export const createMercadoPagoCheckoutButton = (preferenceId) => {
    const MERCADOPAGO_TEST_PUBLIC_KEY = import.meta.env.VITE_MERCADOPAGO_TEST_PUBLIC_KEY

    const mercadopago = new MercadoPago(MERCADOPAGO_TEST_PUBLIC_KEY, {
        locale: 'es-AR'
    })

    mercadopago.checkout({
        preference: {
            id: preferenceId
        },
        render: {
            container: ".cho-container",
            label: "Pay with MercadoPago"
        }
    })
}