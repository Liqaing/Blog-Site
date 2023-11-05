import { useEffect, useState } from "react";
import BlogList from "./bloglist";

const Home = () => { 

    // Use state hook
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(true); // Initialy loading is true
    const [error, setError] = useState(null);

    // Use useEffect hook to request data from API endpoint
    // useEffect run when component render to page
    useEffect(() => {
        // Fetch data from api endpoint and set data to blogs state
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error("Unable to load the blog");
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false); // When request is succeed, loading message is not longer need
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
                setBlogs(null);
            })
    });

    return ( 
        <div className="home">
            
            {error && <div className="error">{ error }</div>}
            {isLoading && <div>Loading...</div>}

            {/* Check if blogs is null, if not then call BlogList component and provide blogs state as prop to render */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;