import mercadoPagoLogo from "../../public/mercadopago-logo.svg"

import { Cart } from "./Cart"

export const Navbar = () => {
    return (
        <>
            <main className="max-w-screen w-full flex justify-center">
                <nav className="max-w-[1000px] w-full flex justify-between">
                    <img src={mercadoPagoLogo} className="max-w-[150px]"/>
                    <Cart/>
                </nav>
            </main>
        </>
    )
}