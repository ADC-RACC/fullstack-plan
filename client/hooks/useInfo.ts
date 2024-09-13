import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getInfo } from '../apis/info.ts'
import { Info } from '../../models/info.ts'
import request from 'superagent'

export function useInfo() {
  return useQuery({
    queryKey: ['info'],
    queryFn: () => getInfo(),
  })
  // Extra queries go here e.g. addInfo: useAddInfo()
}

export function useInfoMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['info'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddInfo
/* function useAddInfo() {
  return useInfosMutation(addInfo)
} */
export async function addInfo(newInfo: Info) {
  console.log(newInfo)
  const result = await request.post(`/api/v1/info`).send(newInfo)
  console.log(result.statusCode)
  return
}

export async function deleteSquids(id: number) {
  const result = await request.delete(`/api/v1/info/`)
  console.log(result.statusCode)
  return
}
