import { useEffect, useState } from "react";


function useProduct(){
    const[product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/photographer-product-list.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return [product, setProduct];
}


export default useProduct;