import React from 'react';
import {connect} from 'react-redux'
import {fetchBlogposts} from './actions/fetchBlogposts'
import BlogpostsContainer from './containers/BlogpostsContainer'





class App extends React.Component {

    componentDidMount() {
        this.props.fetchBlogposts()
    }

  render() {

    return (

      <div className="App">
        <BlogpostsContainer />
      </div>
    );

  }

}

// export default App;
export default connect(null, {fetchBlogposts})(App)
