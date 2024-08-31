import { useEffect, useState } from "react";
type FetchFunction = () => Promise<any>;

export const useFetch =({fetchConst}:{ fetchConst: FetchFunction }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try{
                const result = await fetchConst();
                setData(result);
                
            }catch{
                setError(error);
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [fetchConst]);

    return { data,error };
}