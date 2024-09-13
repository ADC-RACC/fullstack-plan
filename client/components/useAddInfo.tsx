import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Info } from '../../models/info'
import { ChangeEvent, FormEvent, useState } from 'react'
import { addInfo } from '../hooks/useInfo'

function AddInfo() {
  // setup with useState
  const [{ title, info }, setFormValues] = useState({
    title: '',
    info: '',
  })

  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: async (info: Info) => addInfo(info),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['info'] })
    },
  })

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await addMutation.mutate({
      title,
      info,
    })
  }

  return (
    <>
      <form className="form" onSubmit={onSubmit} aria-label="Add Info">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="info">Info</label>
          <input
            type="text"
            name="info"
            id="info"
            value={info}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="button-primary">
          Add
        </button>
      </form>
    </>
  )
}

export default AddInfo
