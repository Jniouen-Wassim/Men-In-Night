export default function Pates({ data }) {
  return (
      <span>
        <p className='pate'>{data.pate}</p>
        <p className='prix'>{data.prix}</p>
      </span>
  )
}
