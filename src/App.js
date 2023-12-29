
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Menus from './Components/Menus';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Allcourses from "./Components/Allcourses";
import AddCourse from './Components/Addcourse';


function App() {
  return (
    <div >
      <BrowserRouter>
     
     <Header/>
      <Container>
      <Row>
        
          <Col md={4}>
          <Menus/>
         
          </Col>
          <Col md={8}>
            <Routes><Route path="/" Component={Home} exact></Route></Routes>
            <Routes><Route path="/add-course" Component={AddCourse} exact></Route></Routes>
            <Routes><Route path="/view-courses" Component={Allcourses} exact></Route></Routes>
          </Col>
        </Row>
      </Container>
      
     
      </BrowserRouter>
    </div>
  );
}

export default App;
