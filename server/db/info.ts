import connection from './connection.ts'
import { Info } from '../../models/info.ts'

const db = connection

export async function getAllInfo(): Promise<Info[]> {
  return db('info').select()
}

export async function addInfo(newInfo: Info) {
  return db('info').insert({
    title: newInfo.title,
    info: newInfo.info,
  })
}

export function deleteInfo(id: number) {
  return db('info').where({ id }).del()
}
