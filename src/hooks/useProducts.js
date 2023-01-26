import { useEffect, useState } from "react"

export const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            try{
                const response = await fetch("src/database/products.json")
                const products = await response.json()
                
                setProducts(products)
            }catch(error){
                console.log(error)
            }
        })()
    }, [])

    return { products }
}