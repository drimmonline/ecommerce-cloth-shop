import { createContext, useEffect, useState } from "react"; // เพิ่ม useEffect ตรงนี้
import { products } from "../assets/assets.js";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10; // แก้สะกดคำจาก dedlivery_fee
    
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({}); // แก้จาก constt และย้ายขึ้นมาด้านบน

    const addToCart = async (itemId, size) => { // เปลี่ยนเป็น itemId (พิมพ์เล็ก) เพื่อให้เหมือนกันทั้งหมด
        if(!size){
            toast.error('Select Product Size')
            return;
        }

        let cartData = structuredClone(cartItems); // แก้จาก cartItem เป็น cartItems (เติม s)

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems) {
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount+= cartItems[items][item];
                    }

                }catch(error){

                }
            }
        }
        return totalCount;

    }


    const updateQuantity =async (itemId , size , quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);


    }

    // ย้าย object value มาไว้ด้านล่างสุดหลังจากที่ประกาศตัวแปรทุกตัวครบแล้ว
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart , getCartCount,updateQuantity
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;