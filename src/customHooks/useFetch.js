import { useEffect, useState } from "react";

const useFetch = (url) => {

    // Use state hook
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true); // Initialy loading is true
    const [error, setError] = useState(null);
    

    // Use useEffect hook to request data from API endpoint
    // useEffect run when component render to page

    useEffect(() => {
    
        // Fetch data from api endpoint and set data to blogs state
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Unable to load the blog");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false); // When request is succeed, loading message is not longer need
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
                setData(null);
            })
    
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;