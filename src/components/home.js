import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => { 

    // Use state hook
    const [blogs, setBlogs] = useState(null);

    return ( 
        <div className="home">
            {/* Call BlogList component and provide blogs state as prop to render */}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    );
}
 
export default Home;