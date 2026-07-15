import React, { useContext } from 'react' // 👈 ต้องมี useContext ตรงนี้ด้วย!
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  
  // เรียกใช้ currency จาก ShopContext
  const { currency } = useContext(ShopContext) 

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      {/* ใช้ currency ร่วมกับ price */}
      <p className='text-sm font-medium'>{currency}{price}</p> 
    </Link>
  )
}

export default ProductItem