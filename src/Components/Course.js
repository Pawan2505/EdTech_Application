import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, Container, Toast } from "react-bootstrap";

import base_url from "../api/bootapi";
import axios from "axios";



export default function Course({course,update}) {
  const deleteCourse=(id)=>
  {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>
      {
        Toast.success("course deleted");
        update(id);
      },(error)=>
      {
        Toast.error("course not deleted !! something went wrong")
      }
    )
  }
 
  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <CardSubtitle>Java Course</CardSubtitle>
          <CardText>This is a Java Course for Beginners</CardText>
          <Container className="text-center ">
            <Button className="bg-danger " onClick={()=>
            {
             deleteCourse(course.id) ;
            }}>Delete</Button>
            <Button className="bg-warning ml-5">Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}
