import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchBlogposts} from '../actions/fetchBlogposts'
import Blogposts from '../components/Blogposts'
import Blogpost from '../components/Blogpost'
import BlogpostInput from '../components/BlogpostInput'
import NavBar from '../components/NavBar'


class BlogpostsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBlogposts()
    }
  render() {
    return (
      <div>
      <NavBar/>
        <Switch>
            <Route exact path = '/blog_posts/new' component={BlogpostInput}/>
            <Route exact path='/blog_posts/:id' render={(routerProps) => <Blogpost {...routerProps} blogposts={this.props.blogposts} />} />
            <Route exact path='/blog_posts' render={(routerProps) => <Blogposts {...routerProps} blogposts={this.props.blogposts}/>}/>
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
        return {
          blogposts: state.blog_posts
        }
}

export default connect(mapStateToProps, {fetchBlogposts})(BlogpostsContainer)
