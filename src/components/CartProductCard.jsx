export const CartProductCard = ({product}) => {
    return (
        <div className="flex gap-8 items-center w-full pb-4 border-b-2 border-secondary-300">
            <img src={product.image} className="max-w-[50px] w-full max-h-[50px] h-full object-contain rounded-md"/>
            <div className="flex justify-between items-center gap-8 w-full">
                <h2 className="text-sm font-bold">{product.title}</h2>
                <div>
                    <span className="text-sm font-bold">x{product.quantity}</span>
                    <h2 className="text-sm text-success-500 font-bold">${product.price * product.quantity}</h2>
                </div>
            </div>
        </div>
    )
}