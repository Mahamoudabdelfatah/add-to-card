import React from 'react'
import img from "../assets/Me.jpg"

const Header = ({ addedProducts, products, increment, counter,theme }) => {


    return (
        <div className={`${theme ? "bg-black" : "bg-white"}  navbar bg-[#005f78] bg-opacity-75 text-neutral-content shadow-sm font-bold p-4 fixed w-full top-0 z-50`}>
            <div className="flex-1">
                <div className="flex justify-center items-center gap-3 flex-wrap ">
                    {addedProducts.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => increment(product.id)}
                            className={`btn btn-soft btn-secondary `}
                        >
                            {product.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">{counter()}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{counter()} Items</span>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src={img}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
