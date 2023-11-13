import { useState } from "react";

const CreateBlog = () => {

    // Create state to keep track of form input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Choose an author');

    return (
        <div className="create-blog">
            <h2>Create new blog</h2>
            <form>
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