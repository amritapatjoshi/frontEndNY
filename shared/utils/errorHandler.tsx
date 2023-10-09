import { NextApiRequest, NextApiResponse } from "next"

export function handleError(
  error: Error,
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Error occured: ", error)
    
  // customize error response here
  res.status(500).json({ error: "Internal Server Error" })
}