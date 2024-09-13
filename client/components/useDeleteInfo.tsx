import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteInfo } from '../hooks/useInfo'
import { FormEvent } from 'react'

interface DeleteInfoProp {
  id: number
}

const DeleteInfo: React.FC<DeleteInfoProp> = ({ id }) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async () => deleteInfo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['info'] })
    },
  })
  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await mutation.mutate()
  }

  return (
    <form className="form" onSubmit={onSubmit} aria-label="Delete Info">
      <button type="submit" className="button-primary">
        Delete
      </button>
    </form>
  )
}

export default DeleteInfo
