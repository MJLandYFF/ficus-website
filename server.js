// Express.js 后端服务器，用于保存联系表单数据到 data.json 文件
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'public', 'data.json');

// 中间件
app.use(cors());
app.use(express.json());

// 读取 data.json 文件
const readDataFile = async () => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('读取数据文件失败:', error);
    return { contactSubmissions: [] };
  }
};

// 写入 data.json 文件
const writeDataFile = async (data) => {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    console.log('数据已保存到 data.json 文件');
    return true;
  } catch (error) {
    console.error('写入数据文件失败:', error);
    return false;
  }
};

// GET /api/contacts - 获取所有联系表单提交
app.get('/api/contacts', async (req, res) => {
  try {
    const data = await readDataFile();
    res.json(data.contactSubmissions || []);
  } catch (error) {
    res.status(500).json({ error: '获取数据失败' });
  }
});

// POST /api/contacts - 添加新的联系表单提交
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, phone, company, subject, message, privacyAgreed } = req.body;
    
    // 验证必填字段
    if (!name || !email || !subject || !message || !privacyAgreed) {
      return res.status(400).json({ error: '缺少必填字段' });
    }

    const data = await readDataFile();
    
    // 创建新的提交记录
    const newSubmission = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      subject,
      message,
      privacyAgreed,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    data.contactSubmissions.push(newSubmission);
    
    const success = await writeDataFile(data);
    if (success) {
      res.status(201).json(newSubmission);
    } else {
      res.status(500).json({ error: '保存数据失败' });
    }
  } catch (error) {
    console.error('添加提交记录失败:', error);
    res.status(500).json({ error: '服务器内部错误' });
  }
});

// PUT /api/contacts/:id - 更新联系表单提交状态
app.put('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    
    const data = await readDataFile();
    const submissionIndex = data.contactSubmissions.findIndex(s => s.id === id);
    
    if (submissionIndex === -1) {
      return res.status(404).json({ error: '未找到指定的提交记录' });
    }
    
    data.contactSubmissions[submissionIndex] = {
      ...data.contactSubmissions[submissionIndex],
      status: status || data.contactSubmissions[submissionIndex].status,
      notes: notes !== undefined ? notes : data.contactSubmissions[submissionIndex].notes
    };
    
    const success = await writeDataFile(data);
    if (success) {
      res.json(data.contactSubmissions[submissionIndex]);
    } else {
      res.status(500).json({ error: '保存数据失败' });
    }
  } catch (error) {
    console.error('更新提交记录失败:', error);
    res.status(500).json({ error: '服务器内部错误' });
  }
});

// DELETE /api/contacts/:id - 删除联系表单提交
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const data = await readDataFile();
    const initialLength = data.contactSubmissions.length;
    data.contactSubmissions = data.contactSubmissions.filter(s => s.id !== id);
    
    if (data.contactSubmissions.length < initialLength) {
      const success = await writeDataFile(data);
      if (success) {
        res.json({ message: '删除成功' });
      } else {
        res.status(500).json({ error: '保存数据失败' });
      }
    } else {
      res.status(404).json({ error: '未找到指定的提交记录' });
    }
  } catch (error) {
    console.error('删除提交记录失败:', error);
    res.status(500).json({ error: '服务器内部错误' });
  }
});

app.listen(PORT, () => {
  console.log(`后端服务器运行在 http://localhost:${PORT}`);
  console.log(`数据文件路径: ${DATA_FILE}`);
});
