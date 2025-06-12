import React from 'react';
// 从 react-router-dom 导入 NavLink 用于路由跳转
import { NavLink } from 'react-router-dom';
// 从 react-bootstrap 导入导航栏相关的组件
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() { // 组件名可以改为 AppNavbar 以示区分
  return (
    // 使用 Navbar 组件，并设置背景色、主题和折叠点
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Navbar.Brand 相当于网站 Logo 或标题，它会自动链接到 to 指定的地址 */}
        <Navbar.Brand as={NavLink} to="/">
          <i className="fas fa-cubes me-2"></i> {/* me-2 是 Bootstrap 的 class，表示 margin-end */}
          我的网站
        </Navbar.Brand>

        {/* Navbar.Toggle 用于在小屏幕上显示汉堡菜单按钮 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar.Collapse 包含所有可折叠的导航链接 */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* ms-auto 这个 class 会让导航项靠右对齐 */}
          <Nav className="ms-auto">
            {/* 关键：使用 Nav.Link 组件，并通过 as={NavLink} 将其功能与路由的 NavLink 结合 */}
            <Nav.Link as={NavLink} to="/" end>
              主页
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              关于
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;