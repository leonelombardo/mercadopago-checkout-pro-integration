import { toast } from "react-hot-toast"

export const notification = (text, type="success") => {
    if(type==="success") toast.success(text, { position: "bottom-right", duration: 3000 })
    if(type==="error") toast.error(text, { position: "bottom-right", duration: 3000 })
}