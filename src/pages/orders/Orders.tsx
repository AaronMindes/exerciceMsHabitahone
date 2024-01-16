import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IProduct } from '../../components/IMarketProduct';

const Orders = () => {
  const location = useLocation();
  const [categories,setCategories] = useState<string>();
  const [endOrder,setEndOrder] = useState<any>();


  useEffect(() => {
    setEndOrder(location.state);
  }, [])

  return (
    <div className='order-container'>
      {/* {endOrder?.map((order:any)=>(
        <div>{order}</div>
      ))}
      <div>en</div> */}
    </div>
  )
}

export default Orders