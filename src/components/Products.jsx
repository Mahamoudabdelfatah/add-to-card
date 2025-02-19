import React from 'react'

const Products = ({ product: { name, price, count }, Increment, Decrement, index, Delete }) => {
    return (
        <>

            <div className='flex justify-evenly items-center my-[2em] bg-cyan-800 text-white rounded-2xl font-bold p-4 w-full font-extrabold shadow-3 '>
                <h1>Name : {name}</h1>
                <h1>Price : {price} $</h1>
                <h1>Count : {count}</h1>
                <button className="btn btn-soft btn-primary" onClick={() => Increment(index)}>+</button>
                <button disabled={count > 0 ? false : true} className="btn btn-soft btn-secondary" onClick={() => Decrement(index)}>-</button>
                <button className="btn btn-soft btn-error" onClick={() => Delete(index)}>Delete</button>


                <h1>Total : {price * count} $ </h1>
            </div>

        </>
    )
}

export default Products
