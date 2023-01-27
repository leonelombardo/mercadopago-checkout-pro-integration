export const CartProductCard = ({product}) => {
    return (
        <div className="flex gap-8 items-center w-full pb-4 border-b-2 border-secondary-300">
            <img src={product.image} className="max-w-[50px] w-full max-h-[50px] h-full object-contain rounded-md"/>
            <div className="flex justify-between items-center gap-8 w-full">
                <h2 className="text-sm font-bold w-[80%]">{product.title}</h2>
                <div className="flex flex-col items-end w-[20%]">
                    <span className="text-xs font-bold">x{product.quantity} ${product.price}</span>
                    <h2 className="text-sm text-success-500 font-bold">${product.price * product.quantity}</h2>
                </div>
            </div>
        </div>
    )
}