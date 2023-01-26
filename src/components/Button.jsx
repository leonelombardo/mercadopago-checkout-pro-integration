export const Button = ({type="button", variant="primary", style, disabled, onClick, children}) => {
    return (
        <>
            {
                variant === "primary" && 
                    <button type={type} onClick={onClick} className={`text-secondary-500 font-semibold ${disabled ? "bg-lightblue-300" : "bg-lightblue-500"} py-2 px-4 rounded-md text-center min-w-[100px] w-fit ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${style}`} disabled={disabled}>
                        {children}
                    </button>
            }
            {
                variant === "ghost" && 
                    <button type={type} onClick={onClick} className={`text-primary-500 font-semibold bg-secondary-300 py-2 px-4 rounded-md text-center min-w-[100px] w-fit ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${style}`} disabled={disabled}>
                        {children}
                    </button>
            }
        </>
    )
} 