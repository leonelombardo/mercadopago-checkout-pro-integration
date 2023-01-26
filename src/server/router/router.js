import { mercadopagoController } from "../routes/mercadopago.js"

export const router = (app) => {
    app.use("/api/payments/", mercadopagoController)
}