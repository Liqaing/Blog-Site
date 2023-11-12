import { useEffect, useState } from "react";

const useFetch = (url) => {

    // Use state hook
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true); // Initialy loading is true
    const [error, setError] = useState(null);
    

    // Use useEffect hook to request data from API endpoint
    // useEffect run when component render to page

    useEffect(() => {

        const abortController = new AbortController();

        // Fetch data from api endpoint and set data to blogs state
        fetch(url, { signal: abortController.signal })
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
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setLoading(false);
                    setData(null);    
                }
            });
        
        return () => abortController.abort();
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;