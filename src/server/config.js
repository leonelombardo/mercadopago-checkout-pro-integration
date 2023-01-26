import path from 'path'
import { fileURLToPath } from 'url'
import { config } from "dotenv"

const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

config()

export const PORT = process.env.VITE_PORT
export const MERCADOPAGO_TEST_ACCESS_TOKEN = process.env.VITE_MERCADOPAGO_TEST_ACCESS_TOKEN