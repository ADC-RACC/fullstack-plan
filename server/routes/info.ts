import { Router } from 'express'

import * as db from '../db/info.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const info = await db.getAllInfo()

    res.json(info)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('unknown error')
    }
    res.status(500).json({
      error: `Something went wrong.`,
    })
  }
})

export default router
