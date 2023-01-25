import { Button } from "./Button"

export const ProductCard = ({ product }) => {
    return (
        <>
            <div className="flex flex-col justify-between items-center gap-4 min-w-[250px] max-w-[350px] w-full p-8 rounded-md border-2 shadow-custom border-transparent">
                <img src={product.image} className="max-w-[250px] w-full max-h-[250px] h-full object-contain"/>
                <h2 className="text-xl line-clamp-2 font-bold leading-none">{product.title}</h2>
                <p className="text-sm line-clamp-3 leading-none">{product.description}</p>
                <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-success-500">${product.price}</span>
                    <Button>Get</Button>
                </div>
            </div>
        </>
    )
}