import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getInfo } from '../apis/info.ts'

export function useInfo() {
  const query = useQuery({ queryKey: ['info'], queryFn: getInfo })
  return {
    ...query,
    // Extra queries go here e.g. addInfo: useAddInfo()
  }
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
