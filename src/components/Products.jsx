import { useProducts } from "../hooks/useProducts"

import { ProductCard } from "../components/ProductCard"

export const Products = () => {
    const { products } = useProducts()
    
    return (
        <>
            {
                products.length
                    ? <div className="grid grid-cols-3 gap-4 max-w-[1000px] w-full">
                        {
                            products.map(product => <ProductCard key={product.id} product={product}/>)
                        }
                    </div>
                    : <span className="text-lg font-semibold text-center">There are no products.</span>
            }
        </>
    )
}