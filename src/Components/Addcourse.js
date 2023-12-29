import React, { Fragment, useState } from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import {Input} from 'reactstrap';
import { useEffect } from 'react';
import axios from 'axios';
import base_url from '../api/bootapi';

export default function Addcourse() {
    useEffect(
        ()=>{
              document.title="Add Course";
        },[]
      );


      const [course,setCourse]=useState({});

      //form handler function
      const handleForm=(e)=>{
        console.log(course);
        e.preventDefault();
      };

      //creating function to post data on server
      const postDatatoServer=(data)=>
      {
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
            },(error)=>
            {
                console.log(error);
            }

        )
      };


  return (
    <Fragment>
        <h1 className='text-center my-3'>
            Fill Course Details
        </h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId">
                    Course Id
                </label>
                <Input type="text" placeholder="Enter Id Of The Course" id="userId"
                onChange={(e)=>{
                    setCourse({...course,id:e.target.value})
                }
                }/>
            </FormGroup>
            <FormGroup>
                <label for="title">
                    Enter Course Title
                </label>
                <Input type="text" placeholder="Enter Title Of The Course" id="title"
                onChange={(e)=>
                {
                    setCourse({...course,title:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <label for="description">
                    Enter Course Description
                </label>
                <Input type="text-area" placeholder="Enter Description Of The Course" id="description"
                onChange={(e)=>
                {
                    setCourse({...course,description:e.target.value})
                }} />
            </FormGroup>
            <Container className='text-center'>
                <Button type="submit" className='bg-success'>
                    Add Course
                </Button>
                <Button type="reset" className='bg-warning'>
                    Reset/Clear
                </Button>
            </Container>
        </Form>
    </Fragment>
  )
}
