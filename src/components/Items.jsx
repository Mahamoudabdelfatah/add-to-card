import React from 'react'
import Products from './Products'
import { MdSunny, MdDarkMode } from "react-icons/md";


const Items = ({ products, Increment, Decrement, Delete, theme, DarkLight, DeleteCart, show, totalPiad, reset }) => {
    return (
        <>


            <div className={`${theme ? "bg-white" : "bg-black"} h-screen`}>
                <div className= "flex flex-col justify-center items-center gap-[1em]  w-full ">

                    <h1 className='text-3xl font-extrabold text-green-900 pb-3 pt-[3em]'>Cart ITEMS</h1>
                    <div className='flex flex-wrap justify-evenly items-center w-full gap-2'>
                        <button className="btn bg-gray-700 text-white font-bold rounded-[0.5em]" onClick={() => reset()}>Reset</button>
                        <button className="btn bg-red-600 text-white font-bold rounded-[0.5em]" onClick={() => DeleteCart()}>Delete Cart</button>
                        <button className="btn bg-black rounded-[0.5em]" onClick={() => DarkLight()}>

                            {theme ? <MdDarkMode className='text-white font-bold' /> : <MdSunny className='text-white font-bold' />}
                        </button>
                    </div>

                    {products.map((product, index) => (
                        <Products key={index} product={product} Increment={Increment} Decrement={Decrement} index={index} Delete={Delete} />
                    ))}

                    {show ? <h1 className='text-3xl font-extrabold text-green-900 text-center pb-3 pt-3' >Total Paid : {totalPiad} $ </h1>
                        : <h1 className='text-3xl font-extrabold text-red-900 text-center pb-3 pt-3' >Empty</h1>
                    }

                </div>
            </div>


        </>
    )
}

export default Items
