import React, { useState, useEffect } from 'react';
import '../App.css'; // 我们可以暂时复用 App.css 的样式

function HomePage() {
  // 逻辑和之前完全一样：创建 state，获取数据，更新 state
  const [message, setMessage] = useState('正在从后端加载数据...');

  useEffect(() => {
    fetch('/api/public/greeting')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        console.error('获取数据失败:', error);
        setMessage('加载后端数据失败，请检查后端服务是否已启动。');
      });
  }, []);

  // 返回主页应该显示的 JSX 内容
  return (
    <div className="App">
      <header className="App-header">
        <h1>我的第一个前后端分离项目</h1>
        <p>这是一个基于 React 和 Flask 的应用</p>
      </header>
      <main>
        <h2>来自后端的消息：</h2>
        <div className="message-box">
          <p>{message}</p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;