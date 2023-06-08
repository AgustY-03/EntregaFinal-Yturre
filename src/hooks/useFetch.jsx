import { useEffect, useState} from 'react'
import axios from "axios"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
        axios(url).then((res) =>{
            setData(res.data);
            console.log(data);
        });
    }, [url]);

    return { data };

}

export default useFetch;