import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Link 추가
import { Navbar, Container, Nav, Button, Form, Offcanvas } from 'react-bootstrap';
import './iconBar.scss';

function OffcanvasExample() {
  const location = useLocation(); // 현재 페이지의 URL 정보를 얻는 hook
  const [currentPage, setCurrentPage] = useState(''); // 현재 페이지의 내용을 담을 상태(state)

  // 페이지가 변경될 때마다 currentPage 상태를 업데이트
  useEffect(() => {
    if (location.pathname === '/gym') {
      setCurrentPage('체육시설');
    } else if (location.pathname === '/space') {
      setCurrentPage('공간시설');
    } else if (location.pathname === '/culture') {
      setCurrentPage('문화시설');
    }
  }, [location.pathname]);

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <div className='baa'>
              <Link to="/">
                <ul className="navbar__logo">
                  <img src="/img/logo.png" />
                </ul></Link>
              <Navbar.Brand href="/">공공시설 예약 서비스</Navbar.Brand>
            </div>
            <div className="text-center"> {/* 중앙 정렬 */}
              <h2>{currentPage}</h2> {/* currentPage에 따라 내용 변경 */}
            </div>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  공공시설 예약 서비스
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* Link 컴포넌트 사용하여 페이지 이동 처리 */}
                  <Link to="/gym" className="nav-link">체육시설</Link>
                  <Link to="/space" className="nav-link">공간시설</Link>
                  <Link to="/culture" className="nav-link">문화시설</Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;

