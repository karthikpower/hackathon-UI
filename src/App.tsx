import React, { useState } from 'react';
import './App.css';
import { PlanGenAI } from './pages/PlanAI/planAI';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayPlan from './pages/Plan/displayPlan';
import MyContext from './components/MyContext';

function App() {
  const [planGuid, setPlanGuid] = useState('');
  const updatePlanGuid = (planGuid: any) => {
    setPlanGuid(planGuid)
  }
  
  return (
    
    <MyContext.Provider value={planGuid}>
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={6} xl={4}><PlanGenAI getPlanId={updatePlanGuid} /></Col>
          <Col xs={12} md={12} lg={6} xl={4}><DisplayPlan /></Col>
          <Col xs={12} md={12} lg={6} xl={4}>1 of 1</Col>
        </Row>
      </Container>
    </MyContext.Provider>
    
  );
}

export default App;
