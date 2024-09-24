import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchBlogs = async () => {
      try {
        const res = await fetch(url, { signal: abortCont.signal });
        if (!res.ok) {
          throw Error("could not fetch data");
        }
        const fetchedData = await res.json();
        setData(fetchedData);
        setIsPending(false);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      }
    };

    fetchBlogs();

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
