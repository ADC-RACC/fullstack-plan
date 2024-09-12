import { Router } from 'express'

import * as db from '../db/info.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const info = await db.getAllInfo()

    res.json({ info: info.map((info) => info.title) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
