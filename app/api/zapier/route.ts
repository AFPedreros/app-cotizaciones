import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Responde con un estado de éxito
    res.status(200).json({ status: "success" })
  } else {
    // Si la solicitud no es un POST, devuelve un error
    res.status(405).json({ status: "error", error: "Method not allowed" })
  }
}
