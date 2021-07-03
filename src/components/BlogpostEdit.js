import React from 'react'
import {connect} from 'react-redux'
import {editBlogpost} from '../actions/editBlogpost'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';




class BlogpostEdit extends React.Component {


    state = {
        title: '',
      content: ''

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
    }

  handlesubmit = (event) => {

      event.preventDefault()

        let newblogpost = { ...this.state, id: this.props.blogpost.id }
        this.props.editBlogpost(newblogpost)
        this.setState({
            title: '',
            content: ''

        })
  }



  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <FormGroup>


          <Label for="exampleText">Blog Title</Label>
          <Input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/>

          <Label>BlogPost Content:  </Label>
          <Input type='text' placeholder='Content' value={this.state.content} name="content" onChange={this.handleChange}/>

      </FormGroup>
      <Button type="submit" > Submit </Button>

  </Form>
    )
  }
}



BlogpostEdit.defaultProps = {
    blogpost: {}
}
export default connect(null,{editBlogpost})(BlogpostEdit)
