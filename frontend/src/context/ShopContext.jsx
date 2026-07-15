import { createContext } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const dedlivery_fee =10;

    const value ={
        products , currency, dedlivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider