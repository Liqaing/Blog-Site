// Take in the prop which provided by parent compenent 
const BlogList = ({blogs, title, handleDeleteBlog}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {/* Loop through each blog in blogs and return a html */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{ blog.title }</h3>
                    <p> written by { blog.author }</p>
                    <button onClick={() => handleDeleteBlog(blog.id)}>Delete Blog</button>
                </div>
            ))}   
        </div>
    );
}
 
export default BlogList;