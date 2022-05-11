import { NextApiRequest, NextApiResponse } from 'next'

export default function helloRoute(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello🚀🚀🚀' })
}
