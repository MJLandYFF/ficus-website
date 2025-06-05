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
  submittedAt: string;
  status: 'new' | 'in-progress' | 'resolved';
  notes?: string;
}

// 后端API基础URL
const API_BASE = 'http://localhost:3001/api';

// 本地存储键名（作为备份）
const STORAGE_KEY = 'ficus_contact_submissions';

// 从后端API加载数据
const loadFromAPI = async (): Promise<ContactSubmission[]> => {
  try {
    const response = await fetch(`${API_BASE}/contacts`);
    if (!response.ok) {
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }
    const data = await response.json();
    console.log('从API加载数据成功:', data.length, '条记录');
    return data || [];
  } catch (error) {
    console.error('从API加载数据失败:', error);
    // 如果API不可用，尝试从localStorage加载
    return loadFromStorage();
  }
};

// 从本地存储加载数据（备份方案）
const loadFromStorage = (): ContactSubmission[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      console.log('从localStorage加载备份数据');
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('加载本地数据失败:', error);
  }
  return [];
};

// 保存数据到本地存储（备份）
const saveToStorage = (submissions: ContactSubmission[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
    console.log('数据已备份到localStorage:', submissions.length, '条记录');
  } catch (error) {
    console.error('保存数据到本地存储失败:', error);
  }
};

// 向后端API提交新数据
const submitToAPI = async (submission: Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>): Promise<ContactSubmission | null> => {
  try {
    const response = await fetch(`${API_BASE}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }
    
    const newSubmission = await response.json();
    console.log('数据已提交到API:', newSubmission);
    return newSubmission;
  } catch (error) {
    console.error('提交数据到API失败:', error);
    return null;
  }
};

// 更新后端数据
const updateInAPI = async (id: string, updates: { status?: ContactSubmission['status']; notes?: string }): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }
    
    console.log('数据已在API中更新:', id);
    return true;
  } catch (error) {
    console.error('更新API数据失败:', error);
    return false;
  }
};

// 从后端删除数据
const deleteFromAPI = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/contacts/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }
    
    console.log('数据已从API中删除:', id);
    return true;
  } catch (error) {
    console.error('从API删除数据失败:', error);
    return false;
  }
};

// 获取所有提交记录
export const getAllSubmissions = async (): Promise<ContactSubmission[]> => {
  const submissions = await loadFromAPI();
  // 同时备份到localStorage
  if (submissions.length > 0) {
    saveToStorage(submissions);
  }
  return submissions.sort((a, b) => 
    new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
};

// 根据ID获取特定提交记录
export const getSubmissionById = async (id: string): Promise<ContactSubmission | undefined> => {
  const allSubmissions = await getAllSubmissions();
  return allSubmissions.find(submission => submission.id === id);
};

// 添加新的提交记录
export const addSubmission = async (submission: Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>): Promise<ContactSubmission | null> => {
  // 首先尝试提交到API
  const apiResult = await submitToAPI(submission);
  
  if (apiResult) {
    return apiResult;
  } else {
    // 如果API失败，保存到localStorage作为备份
    console.log('API提交失败，保存到localStorage作为备份');
    const newSubmission: ContactSubmission = {
      ...submission,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: 'new'
    };
    
    const currentData = loadFromStorage();
    currentData.push(newSubmission);
    saveToStorage(currentData);
    
    return newSubmission;
  }
};

// 更新提交记录状态
export const updateSubmissionStatus = async (id: string, status: ContactSubmission['status'], notes?: string): Promise<boolean> => {
  // 首先尝试更新API
  const apiSuccess = await updateInAPI(id, { status, notes });
  
  if (apiSuccess) {
    return true;
  } else {
    // 如果API失败，更新localStorage备份
    console.log('API更新失败，更新localStorage备份');
    const currentData = loadFromStorage();
    const submissionIndex = currentData.findIndex(s => s.id === id);
    
    if (submissionIndex !== -1) {
      currentData[submissionIndex] = {
        ...currentData[submissionIndex],
        status,
        notes: notes || currentData[submissionIndex].notes
      };
      saveToStorage(currentData);
      return true;
    }
    
    return false;
  }
};

// 删除提交记录
export const deleteSubmission = async (id: string): Promise<boolean> => {
  // 首先尝试从API删除
  const apiSuccess = await deleteFromAPI(id);
  
  if (apiSuccess) {
    return true;
  } else {
    // 如果API失败，从localStorage删除
    console.log('API删除失败，从localStorage删除');
    const currentData = loadFromStorage();
    const initialLength = currentData.length;
    const filteredData = currentData.filter(s => s.id !== id);
    
    if (filteredData.length < initialLength) {
      saveToStorage(filteredData);
      return true;
    }
    
    return false;
  }
};

// 根据状态筛选提交记录
export const getSubmissionsByStatus = async (status: ContactSubmission['status']): Promise<ContactSubmission[]> => {
  const allSubmissions = await getAllSubmissions();
  return allSubmissions.filter(submission => submission.status === status);
};

// 搜索提交记录
export const searchSubmissions = async (query: string): Promise<ContactSubmission[]> => {
  const allSubmissions = await getAllSubmissions();
  const lowercaseQuery = query.toLowerCase();
  return allSubmissions.filter(submission => 
    submission.name.toLowerCase().includes(lowercaseQuery) ||
    submission.email.toLowerCase().includes(lowercaseQuery) ||
    submission.company?.toLowerCase().includes(lowercaseQuery) ||
    submission.message.toLowerCase().includes(lowercaseQuery)
  );
};

// 导出所有数据（用于备份）
export const exportAllData = async (): Promise<string> => {
  const allSubmissions = await getAllSubmissions();
  return JSON.stringify({
    contactSubmissions: allSubmissions,
    exportDate: new Date().toISOString()
  }, null, 2);
};

// 检查API连接状态
export const checkAPIConnection = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/contacts`);
    return response.ok;
  } catch (error) {
    console.error('API连接检查失败:', error);
    return false;
  }
};
