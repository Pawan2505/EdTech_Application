import React, { useState,useEffect } from 'react'
import Course from './Course'
import base_url from '../api/bootapi';
import axios from 'axios';
import { Toast } from 'react-bootstrap';

export default function Allcourse() {
  useEffect(
    ()=>{
          document.title="All Courses";
    },[]
  );
  //function to call server:
  const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
      (response)=>{
        console.log(response.data);
        setCourses(response.data);
        
      },(error)=>{
        console.log(error);
      }
    );
  };


  useEffect(()=>{
    getAllCoursesFromServer();
  },[])

  const [courses,setCourses]=useState([
    
  ]);

  const UpdateCourseById=(id)=>
  {
    setCourses(courses.filter((c)=>
    c.id!=id));
  };

  return (
    <div>
      <h1>All courses</h1>
      {courses.length>0? courses.map((item)=><Course 
      key={item.id} course={item} update={UpdateCourseById}/>):"No Courses"}
    </div>
  )
}
