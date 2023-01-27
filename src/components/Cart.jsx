import { useState } from "react"
import { HiOutlineShoppingCart } from "react-icons/hi"

import { useReducedCart } from "../hooks/useReducedCart"

import { CartExpanded } from "./CartExpanded"

export const Cart = () => {
    const [ showCart, setShowCart ] = useState(false)
    const { reducedCart } = useReducedCart()

    const handleShowCart = () => {
        setShowCart(previous => !previous)
    }

    return (
        <>
            <div className="relative flex justify-end items-center max-w-[500px] w-full">
                <button className="relative text-3xl cursor-pointer" onClick={handleShowCart}>
                    <HiOutlineShoppingCart/>
                    <div className="absolute top-[-10px] right-[-10px] flex justify-center items-center text-[10px] text-center font-bold text-secondary-500 bg-error-500 w-[25px] h-[25px] rounded-full border-4 border-secondary-500">{reducedCart.length}</div>
                </button>
                <CartExpanded showCart={showCart}/>
            </div>
        </>
    )
}