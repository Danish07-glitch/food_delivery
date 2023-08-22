import React, { useEffect, useState } from 'react'
import {data} from '../data/data.js'


const Foods = () => {
    const [foods, setFoods] = useState(data)

    // Filter type burger/pizza/etc

    const filterType=(category)=>{
      setFoods(
        data.filter((item)=>{
          return item.category==category
        })
      )
    }
    console.log("foods",foods);

    // Filter By Price
    const filterByPrice=(price)=>{
      setFoods(
        data.filter((item)=>{
          return item.price==price
        })
      )
    }
    // useEffect(() => {
      
    // }, [foods])
    


  return (
    <div className='max-w-[1640px] p-4 m-auto px-4 py-12'>
         <h1 className='text-orange-600 text-center text-4xl font-bold'>Top Rated Menu Items</h1>
        {/* Filter Row */}
         <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                <button onClick={()=>filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burgers</button>
                <button onClick={()=>filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
                <button onClick={()=>filterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salads</button>
                <button onClick={()=>filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chicken</button>
                </div>

            </div>
            {/* Filter Price */}
                <div >
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>

                    <button onClick={()=>filterByPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$</button>
                    <button onClick={()=>filterByPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$</button>
                    <button onClick={()=>filterByPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$</button>
                    <button onClick={()=>filterByPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$$</button>
                    </div>

                </div>
         </div>

         {/* Display Foods */}
         <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
          {
            foods.map((item,id)=>(
              <div key={id} className='border rounded-lg shadow-lg hover:scale-110 duration-300'>
                <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                <div className='flex justify-between px-2 py-4'>
                  <p className='font-bold'>{item.name}</p>
                  <p>
                    <span className='bg-orange-500 rounded-full p-1 text-white'>{item.price}</span>
                  </p>
                </div>
              </div>
            ))
          }

         </div>

    </div>
  )
}

export default Foods