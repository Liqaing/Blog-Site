import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {

    // Use params hook is used to retrive dynamic value that pass through the url
    const { id } = useParams();
    
    const {data: blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);

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
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;