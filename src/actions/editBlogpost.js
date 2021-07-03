export const editBlogpost = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/blog_posts/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(blogpost => dispatch({ type: 'EDIT_BLOGPOST', payload: blogpost }))

            .catch(error => console.log(error) )
    }

}
