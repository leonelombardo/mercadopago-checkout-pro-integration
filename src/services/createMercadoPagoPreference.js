import { createMercadoPagoCheckoutButton } from "./createMercadoPagoCheckoutButton"

export const createMercadoPagoPreference = async (cart) => {
    const products = cart.map(product => ({id: product.id, title: product.title, unit_price: product.price * 2, currency_id: "USD", quantity: 1, picture_url: product.image}))

    try{
        const response = await fetch("/api/payments/mercadopago", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(products)
        })
        const preference = await response.json()

        createMercadoPagoCheckoutButton(preference.id)

        return { preference }
    }
    catch(error){
        console.error(error)
    }
}