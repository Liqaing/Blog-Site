import { useState } from "react";

const CreateBlog = () => {

    // Create state to keep track of form input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Choose an author');

    // Handle form submit event
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create javascript obj which contain the data
        const blog = {title, body, author};
        console.log(blog)
    }

    return (
        <div className="create-blog">
            <h2>Create new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                    type="text"
                    // Set title to value of state
                    value={title}
                    // Update value of state when change
                    onChange={(e) => setTitle(e.target.value)}
                    required 
                />
                <label>Blog content</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Choose an author" disabled>Choose an author</option>
                    <option value="Rick">Rick</option>
                    <option value="Mario">Mario</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
    );
}
 
export default CreateBlog;