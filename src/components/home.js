import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => { 

    // Use state
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome to the party', body: 'lorem ipsum...', author: 'Rick', id: 2},
        {title: 'Programming Language', body: 'lorem ipsum...', author: 'Devit', id: 3},
    ]);

    return ( 
        <div className="home">
            {/* Call BlogList component and provide blogs state as prop to render */}
            <BlogList blogs={blogs} title="Home"/>
        </div>
    );
}
 
export default Home;