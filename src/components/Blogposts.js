// eslint-disable-next-line
import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { Nav, NavLink,Card,CardBody } from 'reactstrap';


class Blogposts extends React.Component{


  state = {
    title: '',
  content: ''

  }



  render(){
  return (

    <div className="nested-links">

      {this.props.blogposts.map(blogpost =>
        <li key={blogpost.id}>
        <Card>
          <CardBody>
            <Nav className="mr-auto" navbar>
              <NavLink href={`api/v1/blog_posts/${blogpost.id}`}> {blogpost.title} - {blogpost.content} </NavLink>
            </Nav>


            </CardBody>
          </Card>

        </li>)}
    </div>

  )
 }
}

export default connect(null, {})(Blogposts)
