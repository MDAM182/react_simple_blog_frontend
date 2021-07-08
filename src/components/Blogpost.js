import React from 'react'
// import {Redirect} from 'react-router-dom'
import BlogpostEdit from './BlogpostEdit'

const Blogpost = (props) => {

    let blogpost = props.blogposts.filter(blogpost => blogpost.id === props.match.params.id)[0]

return (


    <div>
      <h2>
        {blogpost ? blogpost.title : null}, {blogpost ? blogpost.content : null}
      </h2>

      <h4>Edit Blogpost</h4>


    <BlogpostEdit blogpost={blogpost}/>
  </div>

   )



}

export default Blogpost
