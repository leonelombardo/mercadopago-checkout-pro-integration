import { useState, useEffect } from "react"
import { ProductCard } from "../components/ProductCard"

import { Wrapper } from "../components/Wrapper"

export const Home = () => {
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

    return (
        <>
            <Wrapper>
                <div className="flex justify-center w-full ">
                    <h1>MercadoPago Integration</h1>
                </div>
                {
                    products.length
                        ?   <>
                            <div className="flex gap-4">
                                {
                                    products.map(product => <ProductCard key={product.id} product={product}/>)
                                }
                            </div>
                        </>
                        : <span>There are no products.</span>
                }
            </Wrapper>
        </>
    )
}