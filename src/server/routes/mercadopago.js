import { Router } from "express"
import mercadopago from "mercadopago"

import { MERCADOPAGO_TEST_ACCESS_TOKEN } from "../config.js";

mercadopago.configure({
    access_token: MERCADOPAGO_TEST_ACCESS_TOKEN,
})

export const mercadopagoController = Router()

mercadopagoController.post("/mercadopago", async (req, res) => {
  const preference = {
    items: [...req.body],
		back_urls: {
			"success": "localhost:5173/payments/success",
			"failure": "localhost:5173/payments/failed",
			"pending": "localhost:5173/payments/pending"
		},
		auto_return: "approved",
  }
  
  try{
    const response = await mercadopago.preferences.create(preference)

    res.status(201).json({ status: 201, success: true, error: false, response: response, id: response.body.id})
  }catch(error){
    res.status(500).json({ status: 500, success: false, error: true, response: error})
  }
})

mercadopagoController.get("/feedback", (req, res) => {
    res.json({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id
    })
})