import { useEffect, useState } from "react";

const useFetch = (url) => {
  // console.log("url--", url);
  const [resp, setResp] = useState({ data: ["No data available"] });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}:  Page Not Found`);
        }
        res.json();
      })
      .then((res) => setResp(res))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return { resp, error, isLoading };
};
export default useFetch;
