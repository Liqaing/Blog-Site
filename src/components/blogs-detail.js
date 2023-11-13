import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {

    // Use params hook is used to retrive dynamic value that pass through the url
    const { id } = useParams();
    const history = useHistory();
    
    const {data: blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            console.log('Blog deleted');
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div className="error">{error}</div>}
            {blog && (
                <article>
                    <h3>{ blog.title }</h3>
                    <cite>Written by { blog.author }</cite>
                    <div>
                        { blog.body }
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;