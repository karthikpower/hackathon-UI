import React from 'react';
import './App.css';
import { PlanGenAI } from './pages/PlanAI/planAI';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayPlan from './pages/Plan/displayPlan';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}  md={12} lg={4}><PlanGenAI/></Col>
        <Col md={12} lg={4}><DisplayPlan /></Col>
        <Col md={12} lg={4}>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default App;
