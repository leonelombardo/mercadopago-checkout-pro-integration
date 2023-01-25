export const ProductCard = ({ product }) => {
    return (
        <>
            <div className="flex flex-col gap-4 max-w-[300px] w-full ">
                <h2>{product.title}</h2>
                <p className="max-h-[150px] overflow-hidden">{product.description}</p>
                <span>{product.price}</span>
                <button type="button">Get</button>
            </div>
        </>
    )
}