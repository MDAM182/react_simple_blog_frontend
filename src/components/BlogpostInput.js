
import React from 'react'
import {connect} from 'react-redux'
import { addBlogpost } from '../actions/addBlogpost'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class BlogpostInput extends React.Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBlogpost(this.state)
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



} // End of Class BlogstInput

export default connect(null,{addBlogpost})(BlogpostInput)
