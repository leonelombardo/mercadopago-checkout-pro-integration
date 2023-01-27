import { useEffect } from "react"
import { useReducedCart } from "../hooks/useReducedCart"

export const MercadoPagoButton = () => {
    const { reducedCart } = useReducedCart()

    useEffect(() => {
        if(!document.querySelector(".cho-container")) return

        document.querySelector(".cho-container").innerHTML = ""
    }, [reducedCart])
    
    return <div className="cho-container"></div>
}