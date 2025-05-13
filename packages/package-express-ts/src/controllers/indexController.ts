import { Request, Response } from 'express'
import { send } from '../utils/responseWrapper'

export const home = (req: Request, res: Response): void => {
  send(res, { message: 'API is working' })
}
