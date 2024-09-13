import { useQuery } from '@tanstack/react-query'
import { getInfo } from '../apis/info'
import AddInfo from './useAddInfo'
import DeleteInfo from './useDeleteInfo'

function Info() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['info'],
    queryFn: () => getInfo(),
  })

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <h1>Info</h1>
      {data.map((info) => (
        <li key={info.title}>
          {info.title}: {info.info}
          <DeleteInfo id={info.id} />
        </li>
      ))}
      <AddInfo />
    </>
  )
}

export default Info