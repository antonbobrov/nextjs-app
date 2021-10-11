// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const arr: any[] = [];
  for (let index = 0; index < 1000; index++) {
    arr.push({ name: 'John Doe' })
  }
  res.status(200).json({
    name: arr
  })
}
