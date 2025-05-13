import { Response } from 'express'

export const send = (res: Response, data: unknown, status = 200): void => {
  const success = status >= 200 && status < 300
  res.status(status).json({ success, data })
}
