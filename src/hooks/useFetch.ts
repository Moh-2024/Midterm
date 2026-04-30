import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    getData();
  }, [url]);

  return { data, loading };
}

export default useFetch;