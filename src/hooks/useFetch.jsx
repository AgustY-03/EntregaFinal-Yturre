import { useEffect, useState} from 'react'
import axios from "axios"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        axios(url).then((res) =>{
            setData(res.data);
            setLoading(false);
            console.log(data);
        });
    }, [url]);

    return { data, loading };

}

export default useFetch;