import { useContext, useState } from "react"
import { HiOutlineShoppingCart } from "react-icons/hi"

import { createMercadoPagoPreference } from "../services/createMercadoPagoPreference"
import { useReducedCart } from "../hooks/useReducedCart"
import { Context } from "../context/context"

import { Button } from "./Button"
import { CartProductCard } from "./CartProductCard"

export const Cart = () => {
    const [ showCart, setShowCart ] = useState(false)
    const { cart, setCart } = useContext(Context)
    const { reducedCart } = useReducedCart()    

    const handleShowCart = () => {
        setShowCart(previous => !previous)
    }

    const handleCheckout = async () => {
        const button = document.querySelector("#mercadopago-checkout-button")
        button.innerHTML = ""

        await createMercadoPagoPreference(cart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <>
            <div className="relative flex justify-end items-center max-w-[500px] w-full">
                <button className="relative text-3xl cursor-pointer" onClick={handleShowCart}>
                    <HiOutlineShoppingCart/>
                    <div className="absolute top-[-10px] right-[-10px] flex justify-center items-center text-[10px] text-center font-bold text-secondary-500 bg-error-500 w-[25px] h-[25px] rounded-full border-4 border-secondary-500">{reducedCart.length}</div>
                </button>
                {
                    showCart
                        ? <div className="absolute top-[50px] right-0 flex flex-col items-center gap-4 min-w-[200px] max-w-[500px] w-[85vw] bg-secondary-500 p-6 rounded-md shadow-md">
                            {
                                cart.length
                                    ? <>
                                        <Button variant="ghost" style="text-xs self-end" onClick={clearCart}>Clear all</Button>
                                        {
                                            reducedCart.map(product => <CartProductCard key={product.id} product={product}/>)
                                        }
                                        <Button style="w-full" onClick={handleCheckout}>Checkout</Button>
                                        <div id="mercadopago-checkout-button"></div>
                                    </>
                                    : <span className="text-md text-center">No products</span>
                            }
                        </div>
                        : <></>
                }
            </div>
        </>
    )
}