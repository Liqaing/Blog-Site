import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {

    // Use params hook is used to retrive dynamic value that pass through the url
    const { id } = useParams();
    
    return (
        <div className="blog-details">
            <h2>Blogs - {id}</h2>
        </div>
    );
}
 
export default BlogDetails;