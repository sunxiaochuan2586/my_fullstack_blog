import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <p className="mb-0">Copyright &copy; {new Date().getFullYear()} Ramo's Blog</p>
        <p className="small">All Rights Reserved</p>
      </Container>
    </footer>
  );
}

export default Footer;