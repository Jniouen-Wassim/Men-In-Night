import { viandes, garnitures, sauces, supplements } from '../../AllArray_menu'

import IngredientSandwich from './components/IngredientSandwich/IngredientSandwich.tsx'

export default function Sandwich() {
  const viandes_ = viandes.map((viandes, index) => {
    return <IngredientSandwich data={viandes} key={index} />
  })
  const garnitures_ = garnitures.map((garnitures, index) => {
    return <IngredientSandwich data={garnitures} key={index} />
  })
  const sauces_ = sauces.map((sauces, index) => {
    return <IngredientSandwich data={sauces} key={index} />
  })
  const supplements_ = supplements.map((supplements, index) => {
    return <IngredientSandwich data={supplements} key={index} />
  })

  return (
    <>
      <div className='divType'>
        <h3>Viandes</h3>
        <h4></h4>
        {viandes_}
      </div>

      <div className='divType'>
        <h3>Garnitures</h3>
        <h4></h4>
        {garnitures_}
      </div>

      <div className='divType'>
        <h3>Sauces</h3>
        <h4></h4>
        {sauces_}
      </div>

      <div className='divType'>
        <h3>Supplements</h3>
        <h4></h4>
        {supplements_}
      </div>
    </>
  )
}
