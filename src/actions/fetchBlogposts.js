export function fetchBlogposts(){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/blog_posts')
        .then(resp => resp.json())
        .then(blog_posts => dispatch({
            type: 'FETCH_BLOGPOSTS',
            payload: blog_posts

        }))
        .catch(error => console.log(error) )
}
}
