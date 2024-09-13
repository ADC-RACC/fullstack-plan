import request from 'superagent'
import { Info } from '../../models/info'

const rootUrl = '/api/v1'

export function getInfo() {
  return request.get(rootUrl + '/info').then((res) => {
    return res.body as Info
  })
}
