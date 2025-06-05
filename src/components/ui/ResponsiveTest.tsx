// 添加一个简单的响应式测试组件
import React, { useState, useEffect } from 'react';

const ResponsiveTest = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('手机');
      } else if (window.innerWidth < 768) {
        setScreenSize('平板 (小)');
      } else if (window.innerWidth < 1024) {
        setScreenSize('平板 (大)');
      } else if (window.innerWidth < 1280) {
        setScreenSize('笔记本');
      } else {
        setScreenSize('桌面');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm z-50">
      当前设备: {screenSize}
    </div>
  );
};

export default ResponsiveTest;
