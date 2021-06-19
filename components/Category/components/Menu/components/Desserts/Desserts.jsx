export default function Desserts({data}) {
    return (
      <span>
        <p className='dessert'>{data.dessert}</p>
        <p className='prix'>{data.prix}</p>
      </span>
    )
}
