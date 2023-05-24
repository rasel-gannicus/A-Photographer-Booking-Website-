import { useEffect, useState } from "react";
import { getBookingItems } from "../Local Storage/bookings-storage";
import usePackages from "./usePackages";


function useCart(){
    const [packages, setPackages] = usePackages();
    
    let[cart, setCart] = useState([]);
    useEffect(()=>{
        let items = getBookingItems();
        let freshCart = [];
        for(let id in items){
            let addedProduct = packages.find(index=> index.id == id);
            if(addedProduct){
                addedProduct.quantity = items[id];
                freshCart.push(addedProduct);            
            }
            setCart(freshCart);
        }
    },[packages]);
    return [cart, setCart];
}

export default useCart;