export const Button = ({type="button", children}) => {
    return (
        <button type={type} className="text-secondary-500 font-semibold bg-lightblue-500 py-1 px-4 rounded-md text-center min-w-[100px] w-fit">
            {children}
        </button>
    )
} 