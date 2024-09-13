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
router.post('/', async (req, res) => {
  try {
    const newInfo = req.body
    const addedInfo = await db.addInfo(newInfo)
    res.json(addedInfo)
  } catch (error) {
    console.error(error)
    res.status(500)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await db.deleteInfo(Number(id))
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
  res.json()
})

export default router
