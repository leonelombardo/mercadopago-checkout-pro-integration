import { useContext } from "react"

import { useReducedCart } from "../hooks/useReducedCart"
import { createMercadoPagoPreference } from "../services/createMercadoPagoPreference"
import { Context } from "../context/context"

import { Button } from "./Button"
import { CartProductCard } from "./CartProductCard"
import { MercadoPagoButton } from "./MercadoPagoButton"

export const CartExpanded = ({showCart}) => {
    const { cart, setCart } = useContext(Context)
    const { reducedCart } = useReducedCart()

    const clearCart = () => {
        setCart([])
    }

    const handleCheckout = async () => {
        await createMercadoPagoPreference(cart)
        document.querySelector(".cho-container").innerHTML = ""
    }

    return (
        <>
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
                                    <MercadoPagoButton/>
                                </>
                                : <span className="text-md text-center">No products</span>
                        }
                    </div>
                    : <></>
                }
        </>
    )
}