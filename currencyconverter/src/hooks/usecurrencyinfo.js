import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_myQZyNa2t6BfKqVhYQKg3Nq7srn7UpusGrQ8wmFE&currencies=EUR%2CUSD%2CCAD`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

