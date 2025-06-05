// 联系表单提交数据类型定义
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  privacyAgreed: boolean;
  submittedAt: Date;
  status: 'new' | 'in-progress' | 'resolved';
  notes?: string;
}

// 本地存储键名
const STORAGE_KEY = 'ficus_contact_submissions';

// 默认示例数据
const defaultSubmissions: ContactSubmission[] = [
  {
    id: '1',
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '+86 138 0000 0000',
    company: '某科技有限公司',
    subject: 'general',
    message: '我们对你们的气体分析设备很感兴趣，希望了解更多产品信息和价格。',
    privacyAgreed: true,
    submittedAt: new Date('2024-01-15T10:30:00'),
    status: 'resolved',
    notes: '已发送产品资料和报价单'
  },
  {
    id: '2',
    name: '李四',
    email: 'lisi@company.com',
    phone: '+86 139 1111 1111',
    company: '工业测试中心',
    subject: 'support',
    message: '我们的FICUS-2000设备出现了校准问题，需要技术支持。',
    privacyAgreed: true,
    submittedAt: new Date('2024-01-20T14:15:00'),
    status: 'in-progress',
    notes: '已安排技术工程师联系'
  },
  {
    id: '3',
    name: 'Wang Ming',
    email: 'wang.ming@international.com',
    phone: '+1 555-0123',
    company: 'International Gas Solutions',
    subject: 'partnership',
    message: 'We are interested in becoming a distributor for FICUS products in North America.',
    privacyAgreed: true,
    submittedAt: new Date('2024-01-25T09:45:00'),
    status: 'new'
  }
];

// 从本地存储加载数据
const loadFromStorage = (): ContactSubmission[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // 将字符串日期转换回 Date 对象
      return parsed.map((item: any) => ({
        ...item,
        submittedAt: new Date(item.submittedAt)
      }));
    }
  } catch (error) {
    console.error('加载本地数据失败:', error);
  }
  // 如果没有存储的数据，返回默认数据并保存到localStorage
  const defaultData = defaultSubmissions;
  saveToStorage(defaultData);
  return defaultData;
};

// 保存数据到本地存储
const saveToStorage = (submissions: ContactSubmission[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  } catch (error) {
    console.error('保存数据到本地存储失败:', error);
  }
};

// 初始化数据
let contactSubmissions: ContactSubmission[] = loadFromStorage();

// 获取所有提交记录
export const getAllSubmissions = (): ContactSubmission[] => {
  // 重新从localStorage加载最新数据
  contactSubmissions = loadFromStorage();
  return [...contactSubmissions].sort((a, b) => 
    new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
};

// 根据ID获取特定提交记录
export const getSubmissionById = (id: string): ContactSubmission | undefined => {
  return contactSubmissions.find(submission => submission.id === id);
};

// 添加新的提交记录
export const addSubmission = (submission: Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>): ContactSubmission => {
  const newSubmission: ContactSubmission = {
    ...submission,
    id: Date.now().toString(),
    submittedAt: new Date(),
    status: 'new'
  };
  
  contactSubmissions.push(newSubmission);
  saveToStorage(contactSubmissions);
  console.log('新提交记录已添加:', newSubmission);
  console.log('当前总记录数:', contactSubmissions.length);
  return newSubmission;
};

// 更新提交记录状态
export const updateSubmissionStatus = (id: string, status: ContactSubmission['status'], notes?: string): boolean => {
  const submissionIndex = contactSubmissions.findIndex(s => s.id === id);
  if (submissionIndex !== -1) {
    contactSubmissions[submissionIndex] = {
      ...contactSubmissions[submissionIndex],
      status,
      notes: notes || contactSubmissions[submissionIndex].notes
    };
    saveToStorage(contactSubmissions);
    return true;
  }
  return false;
};

// 删除提交记录
export const deleteSubmission = (id: string): boolean => {
  const initialLength = contactSubmissions.length;
  contactSubmissions = contactSubmissions.filter(s => s.id !== id);
  if (contactSubmissions.length < initialLength) {
    saveToStorage(contactSubmissions);
    return true;
  }
  return false;
};

// 根据状态筛选提交记录
export const getSubmissionsByStatus = (status: ContactSubmission['status']): ContactSubmission[] => {
  return contactSubmissions.filter(submission => submission.status === status);
};

// 搜索提交记录
export const searchSubmissions = (query: string): ContactSubmission[] => {
  const lowercaseQuery = query.toLowerCase();
  return contactSubmissions.filter(submission => 
    submission.name.toLowerCase().includes(lowercaseQuery) ||
    submission.email.toLowerCase().includes(lowercaseQuery) ||
    submission.company?.toLowerCase().includes(lowercaseQuery) ||
    submission.message.toLowerCase().includes(lowercaseQuery)
  );
};
