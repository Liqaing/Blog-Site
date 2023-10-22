import { useState } from "react";

const Home = () => { 

    // Use state
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome to the party', body: 'lorem ipsum...', author: 'Rick', id: 2},
        {title: 'Programming Language', body: 'lorem ipsum...', author: 'Devit', id: 3},
    ]);

    return ( 
        <div className="home">
            {/* Loop through each blog in blogs and return a html 
                Note:
                1. use () instead of {} becuase if use {} i should return something,
                () => {return } is equal to () => (), () will return by defualt

                2. key properties is needed for react to keep track of the item,
                if delete or update, react will know which item

                3. map doesn't modified the original array but return a new array
            */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>writted by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;