import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // 引入全局样式

// 这段代码找到 index.html 中的 <div id="root"></div>
// 然后把我们的 <App /> 组件渲染进去
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)