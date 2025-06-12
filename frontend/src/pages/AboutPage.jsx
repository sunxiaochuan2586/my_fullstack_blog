import React from 'react';
import Container from 'react-bootstrap/Container'; // 从 react-bootstrap 导入容器组件
// 在新版中可能没有，用普通 div 代替
import Button from 'react-bootstrap/Button';

function AboutPage() {
  return (
    // 使用 Bootstrap 的 Jumbotron 样式来创建一个醒目的介绍区
    <div className="p-5 mb-4 bg-light rounded-3">
      <Container fluid className="py-5">
        <h1 className="display-5 fw-bold">关于我们</h1>
        <p className="col-md-8 fs-4">
          这是一个使用 React、Bootstrap 和 Flask 构建的前后端分离项目。
          我们正在学习如何组织代码、管理路由以及与后端 API 进行通信。
        </p>
        <hr className="my-4" />
        <p>
          这个“关于”页面就是我们多页面路由功能成功的证明！
        </p>
        <Button variant="primary" size="lg" href="https://react-bootstrap.github.io/" target="_blank">
          学习 React-Bootstrap
        </Button>
      </Container>
    </div>
  );
}

export default AboutPage;