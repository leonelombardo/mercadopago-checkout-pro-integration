import { useContext } from "react"

import { Context } from "../context/context"

export const useReducedCart = () => {
    const { cart } = useContext(Context)

    const reducedCart = cart.reduce((acc, product) => {
        const isRepeated = acc.find(x => x.id === product.id)

        if(isRepeated) return [...acc].map(x => x.id === product.id ? {...x, quantity: x.quantity + 1} : x)
        return [...acc, product]
    }, []) || []

    return { reducedCart }
}