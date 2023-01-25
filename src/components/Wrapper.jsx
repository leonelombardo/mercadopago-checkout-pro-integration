export const Wrapper = ({ children }) => {
    return (
        <div className="flex flex-col items-center gap-6 min-w-screen w-full min-h-screen h-full p-6">
            { children }
        </div>
    )
}