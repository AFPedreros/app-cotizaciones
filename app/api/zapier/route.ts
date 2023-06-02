import { NextApiRequest, NextApiResponse } from "next"
import { mutate } from "swr"

import { Product } from "@/lib/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Zapier enviará la información actualizada del producto en el cuerpo de la solicitud
    const updatedProduct = req.body

    // Actualiza los datos en SWR
    console.log(updatedProduct)

    // Responde con un estado de éxito
    res.status(200).json({ status: "success" })
  } else {
    // Si la solicitud no es un POST, devuelve un error
    res.status(405).json({ status: "error", error: "Method not allowed" })
  }
}
