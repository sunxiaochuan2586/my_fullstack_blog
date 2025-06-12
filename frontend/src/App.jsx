import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 导入我们刚刚创建的 HomePage 组件
import HomePage from './pages/HomePage';
// 将来您可以在这里导入其他页面组件
// import AboutPage from './pages/AboutPage';
// import PostDetailPage from './pages/PostDetailPage';

function App() {
  // App 组件现在只返回路由配置
  return (
    <BrowserRouter>
      <Routes>
        {/* 定义第一条路由规则 */}
        {/* 当用户访问网站根路径 ("/") 时，渲染 HomePage 组件 */}
        <Route path="/" element={<HomePage />} />

        {/* 将来您可以像这样添加更多页面的路由 */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/posts/:postId" element={<PostDetailPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;