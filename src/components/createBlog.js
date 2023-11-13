import { useState } from "react";

const CreateBlog = () => {

    // Create state to keep track of form input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Choose an author');
    const [isLoading, setIsLoading] = useState(false);

    // Handle form submit event
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create javascript obj which contain the data
        const blog = {title, body, author};
       
        setIsLoading(true);

        // Make POST request to database
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('New blog added');
            setIsLoading(false)
        })
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

                {isLoading && <button disabled>Add blog...</button>}
                {!isLoading && <button>Add blog</button>}
            </form>
        </div>
    );
}
 
export default CreateBlog;