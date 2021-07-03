export const addBlogpost = (data) => {

    return (dispatch) => {

        fetch('http://localhost:3000/api/v1/blog_posts/', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(blogpost => dispatch({ type: 'ADD_BLOGPOST', payload: blogpost }))

            .catch(error => console.log(error) )
    }

  }
