import request from 'superagent'

const rootUrl = '/api/v1'

export function getInfo(): Promise<string[]> {
  return request.get(rootUrl + '/info').then((res) => {
    return res.body.info
  })
}
