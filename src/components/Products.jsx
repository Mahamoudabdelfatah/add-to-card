import React from 'react'

const Products = ({ product: { name, price, items }, increment, decrement, index, deletee }) => {
    return (
        <>

            <div className='flex justify-evenly items-center my-[2em] bg-cyan-800 text-white rounded-2xl font-bold p-4 w-full font-extrabold shadow-3 '>
                <h1>Name : {name} </h1>
                <h1>Price : {price} </h1>
                <h1>Items : {items} </h1>
                <button className="btn btn-soft btn-primary" onClick={() => increment(index)}>+</button>
                <button disabled={items > 0 ? false : true} className="btn btn-soft btn-secondary" onClick={() => { decrement(index) }}>-</button>
                <button className="btn btn-soft btn-error" onClick={() => { deletee(index) }}>Delete</button>


                <h1>Total :  {price * items}</h1>
            </div>

        </>
    )
}

export default Products
