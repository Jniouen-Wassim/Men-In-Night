export default function Boissons({ data }) {
  return (
      <span>
        <p className='boisson'>{data.boisson}</p>
        <p className='prix'>{data.prix}</p>
      </span>
  )
}
