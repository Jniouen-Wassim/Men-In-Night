export default function Sandwich({data}) {
  return (
    <div>
      <div className="type">
        <p>{data.typeFood}</p>
        <p>{data.prix}</p>
      </div>
    </div>
  )
}
