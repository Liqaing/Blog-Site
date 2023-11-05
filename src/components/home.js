import { useEffect, useState } from "react";
import BlogList from "./bloglist";

const Home = () => { 

    // Use state hook
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(true); // Initialy loading is true

    // Use useEffect hook to request data from API endpoint
    // useEffect run when component render to page
    useEffect(() => {
        // Fetch data from api endpoint and set data to blogs state
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            setLoading(false) // When request is succeed, loading message is not longer need
        })
    });

    return ( 
        <div className="home">
            {/* Call BlogList component and provide blogs state as prop to render 
                Check if blogs is not null before pass it into component to render */}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;