import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => { 

    // Use state
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome to the party', body: 'lorem ipsum...', author: 'Rick', id: 2},
        {title: 'Programming Language', body: 'lorem ipsum...', author: 'Devit', id: 3},
    ]);

    // Delete blog by id
    const handleDeleteBlog = (id) => {
        // Create new array to store blog that are now not match the id
        // If the id doesn't match, it is not the blog to delete
        const newBlogs = blogs.filter((blog) => blog.id !== id);

        // Update blogs state to newBlogs
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {/* Call BlogList component and provide blogs state, function as prop to render */}
            <BlogList blogs={blogs} title="All Blogs" handleDeleteBlog={handleDeleteBlog}/>
            
            <BlogList blogs={blogs.filter((blog) => {
                // Return only the blogs written by Rick into the components
                return blog.author === 'Rick';
            })} title="Rick's Blogs" handleDeleteBlog={handleDeleteBlog}/>

        </div>
    );
}
 
export default Home;