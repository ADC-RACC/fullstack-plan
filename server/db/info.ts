import connection from './connection.ts'
import { Info } from '../../models/fruit.ts'

export async function getAllInfo(db = connection): Promise<Info[]> {
  return db('info').select()
}
