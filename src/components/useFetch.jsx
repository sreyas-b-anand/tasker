import { useEffect, useState } from "react";

function useFetch(url) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`failed to fetch data`);
        }
        let value = await response.json();
        setLoading(false);
        setTasks(value);
        setError(false);
      } catch (error) {
        setTasks([]);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  });
  return { tasks, error, loading };
}

export default useFetch;
