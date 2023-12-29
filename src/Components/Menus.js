import React from 'react'
import { ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Menus() {
  return (
    <div className="text-center  my-3">
      <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to='/' action>
            Home
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to='/add-course' action>
            AddCourse
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to='/view-courses' action>
            List Of Courses
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to='#!' action>
            ContactUs
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to='#!' action>
            AboutUs
        </Link>
      </ListGroup>
    </div>
  )
}
