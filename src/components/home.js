
import BlogList from "./bloglist";
import useFetch from "../customHooks/useFetch";

const Home = () => { 

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    

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