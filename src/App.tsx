import React, { useContext, useState } from 'react';
import './App.css';
import { PlanGenAI } from './pages/PlanAI/planAI';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlanContext from './components/PlanContext';
import FilterOptions  from './pages/Plan/filterOptions';
import CourseDetails from './pages/CourseDetail/courseDetails';
import CourseContext from './components/CourseContext';

function App() {
  const [planGuid, setPlanGuid] = useState('');
  const updatePlanGuid = (planGuid: any) => {
    setPlanGuid(planGuid)
  }

  const [courseId, setcourseId] = useState('');
  const passCourseId = (courseId: any) => {
    setcourseId(courseId)
  }

  return (
    
    <PlanContext.Provider value={planGuid}>
      <CourseContext.Provider value={courseId}>
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={6} xl={6} xxl={4}><PlanGenAI getPlanId={updatePlanGuid} /></Col>
            <Col xs={12} md={12} lg={6} xl={6} xxl={4}><FilterOptions getCourseId={passCourseId} /></Col>
            <Col xs={12} md={12} lg={6} xl={6} xxl={4}><CourseDetails courseId={courseId} /></Col>
          </Row>
        </Container>
      </CourseContext.Provider>
    </PlanContext.Provider>
    
  );
}

export default App;
