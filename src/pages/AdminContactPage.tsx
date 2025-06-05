import { useState, useEffect } from 'react';
import { 
  getAllSubmissions, 
  updateSubmissionStatus, 
  deleteSubmission,
  ContactSubmission 
} from '../data/dataManager';

const AdminContactPage = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([]);
  const [statusFilter, setStatusFilter] = useState<'all' | ContactSubmission['status']>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  // 加载数据
  useEffect(() => {
    loadSubmissions();
  }, []);

  // 组件挂载时和页面可见时重新加载数据
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        loadSubmissions();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // 筛选和搜索
  useEffect(() => {
    let filtered = submissions;
    
    // 搜索筛选
    if (searchQuery.trim()) {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = submissions.filter(submission => 
        submission.name.toLowerCase().includes(lowercaseQuery) ||
        submission.email.toLowerCase().includes(lowercaseQuery) ||
        submission.company?.toLowerCase().includes(lowercaseQuery) ||
        submission.message.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    // 状态筛选
    if (statusFilter !== 'all') {
      filtered = filtered.filter(s => s.status === statusFilter);
    }
    
    setFilteredSubmissions(filtered);
  }, [submissions, statusFilter, searchQuery]);
  const loadSubmissions = async () => {
    try {
      const allSubmissions = await getAllSubmissions();
      console.log('加载的提交记录:', allSubmissions.length);
      setSubmissions(allSubmissions);
    } catch (error) {
      console.error('加载提交记录失败:', error);
    }
  };
  const handleStatusUpdate = async (id: string, newStatus: ContactSubmission['status'], notes?: string) => {
    try {
      const success = await updateSubmissionStatus(id, newStatus, notes);
      if (success) {
        await loadSubmissions();
        if (selectedSubmission && selectedSubmission.id === id) {
          setSelectedSubmission({ ...selectedSubmission, status: newStatus, notes });
        }
      }
    } catch (error) {
      console.error('更新状态失败:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('确定要删除这条记录吗？')) {
      try {
        const success = await deleteSubmission(id);
        if (success) {
          await loadSubmissions();
          if (selectedSubmission && selectedSubmission.id === id) {
            setSelectedSubmission(null);
          }
        }
      } catch (error) {
        console.error('删除记录失败:', error);
      }
    }
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN');
  };

  const getStatusColor = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new': return '新提交';
      case 'in-progress': return '处理中';
      case 'resolved': return '已解决';
      default: return status;
    }
  };

  const getSubjectText = (subject: string) => {
    const subjects: { [key: string]: string } = {
      'general': '一般咨询',
      'sales': '产品咨询',
      'support': '技术支持',
      'partnership': '合作伙伴',
      'other': '其他'
    };
    return subjects[subject] || subject;
  };  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-32">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">联系表单管理后台</h1>
          <p className="text-gray-600 mt-1">查看和管理客户提交的联系表单</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 flex-1">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* 左侧：表格列表 */}
          <div className="lg:w-2/3">            {/* 筛选和搜索栏 */}
            <div className="bg-white rounded-lg shadow-sm mb-6 p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="搜索姓名、邮箱、公司或消息内容..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as any)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="all">所有状态</option>
                    <option value="new">新提交</option>
                    <option value="in-progress">处理中</option>
                    <option value="resolved">已解决</option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={loadSubmissions}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    刷新
                  </button>
                </div>
              </div>
            </div>

            {/* 统计信息 */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-gray-900">{submissions.length}</div>
                <div className="text-sm text-gray-600">总提交数</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{submissions.filter(s => s.status === 'new').length}</div>
                <div className="text-sm text-gray-600">新提交</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-yellow-600">{submissions.filter(s => s.status === 'in-progress').length}</div>
                <div className="text-sm text-gray-600">处理中</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">{submissions.filter(s => s.status === 'resolved').length}</div>
                <div className="text-sm text-gray-600">已解决</div>
              </div>
            </div>

            {/* 表格 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">公司</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">主题</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交时间</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredSubmissions.map((submission) => (
                      <tr 
                        key={submission.id}
                        className={`hover:bg-gray-50 cursor-pointer ${selectedSubmission?.id === submission.id ? 'bg-yellow-50' : ''}`}
                        onClick={() => setSelectedSubmission(submission)}
                      >
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {submission.name}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {submission.email}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {submission.company || '-'}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {getSubjectText(submission.subject)}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                            {getStatusText(submission.status)}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(submission.submittedAt)}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(submission.id);
                            }}
                            className="text-red-600 hover:text-red-900"
                          >
                            删除
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredSubmissions.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-500">没有找到符合条件的记录</div>
                </div>
              )}
            </div>
          </div>

          {/* 右侧：详情面板 */}
          <div className="lg:w-1/3">
            {selectedSubmission ? (
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <h3 className="text-lg font-semibold mb-4">详细信息</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">姓名</label>
                    <div className="mt-1 text-sm text-gray-900">{selectedSubmission.name}</div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">邮箱</label>
                    <div className="mt-1 text-sm text-gray-900">{selectedSubmission.email}</div>
                  </div>
                  
                  {selectedSubmission.phone && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">电话</label>
                      <div className="mt-1 text-sm text-gray-900">{selectedSubmission.phone}</div>
                    </div>
                  )}
                  
                  {selectedSubmission.company && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">公司</label>
                      <div className="mt-1 text-sm text-gray-900">{selectedSubmission.company}</div>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">主题</label>
                    <div className="mt-1 text-sm text-gray-900">{getSubjectText(selectedSubmission.subject)}</div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">消息内容</label>
                    <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                      {selectedSubmission.message}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">提交时间</label>
                    <div className="mt-1 text-sm text-gray-900">{formatDate(selectedSubmission.submittedAt)}</div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">当前状态</label>
                    <div className="mt-2">
                      <select
                        value={selectedSubmission.status}
                        onChange={(e) => handleStatusUpdate(selectedSubmission.id, e.target.value as ContactSubmission['status'])}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        <option value="new">新提交</option>
                        <option value="in-progress">处理中</option>
                        <option value="resolved">已解决</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">备注</label>
                    <textarea
                      value={selectedSubmission.notes || ''}
                      onChange={(e) => {
                        const updatedSubmission = { ...selectedSubmission, notes: e.target.value };
                        setSelectedSubmission(updatedSubmission);
                      }}
                      onBlur={(e) => handleStatusUpdate(selectedSubmission.id, selectedSubmission.status, e.target.value)}
                      placeholder="添加处理备注..."
                      rows={3}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center text-gray-500">
                  <div className="text-lg mb-2">选择一条记录</div>
                  <div className="text-sm">点击左侧表格中的任意记录查看详细信息</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContactPage;
