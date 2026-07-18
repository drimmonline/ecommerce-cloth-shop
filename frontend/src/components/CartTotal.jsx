import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // ดึงค่ามาคำนวณเก็บไว้ในตัวแปรก่อน เพื่อประหยัดพลังงานคอมและลด error
  const subtotal = getCartAmount(); 
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
         <Title text1={'CART'} text2={'TOTALS'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                {/* ใช้ toLocaleString() หรือ toFixed(2) ช่วยจัดการเรื่องทศนิยมให้สวยงาม */}
                <p>{currency} {subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
              <b>Total</b>
              <b>{currency} {total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</b>
            </div>
      </div>
    </div>
  )
}

export default CartTotal