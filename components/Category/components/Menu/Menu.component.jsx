import {
  pates,
  boissons,
  viandes,
  garnitures,
  sauces,
  supplements,
  dessertsLeft,
  dessertsRight,
} from './AllArray_menu'

import Pates from './components/Pates/Pates'
import Boissons from './components/Boissons/Boissons'
import Sandwich from './components/Sandwich/Sandwich'
import Desserts from './components/Desserts/Desserts'

export default function Menu() {
  const pates_ = pates.map((pates, index) => {
    return <Pates data={pates} key={index} />
  })

  const boissons_ = boissons.map((boissons, index) => {
    return <Boissons data={boissons} key={index} />
  })

  const viandes_ = viandes.map((viandes, index) => {
    return <Sandwich data={viandes} key={index} />
  })
  const garnitures_ = garnitures.map((garnitures, index) => {
    return <Sandwich data={garnitures} key={index} />
  })
  const sauces_ = sauces.map((sauces, index) => {
    return <Sandwich data={sauces} key={index} />
  })
  const supplements_ = supplements.map((supplements, index) => {
    return <Sandwich data={supplements} key={index} />
  })

  const dessertsLeft_ = dessertsLeft.map((dessertsLeft, index) => {
    return <Desserts data={dessertsLeft} key={index} />
  })
  const dessertsRight_ = dessertsRight.map((dessertsRight, index) => {
    return <Desserts data={dessertsRight} key={index} />
  })

  return (
    <div id='menu'>
      <div className='top'>

        <div className='contentPates'>
          <h2 className='title'>Pâtes 🍜</h2>
          {pates_}
        </div>

        <span className='vertical-line'></span>

        <div className='contentBoissons'>
          <h2 className='title'>Boissons 🍷</h2>
          {boissons_}
        </div>
      </div>

      <div className='middle'>
        <h2 className='title'> Sandwichs à 4.50€ 🍔</h2>

        <div className='contentSandwich'>
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
          
        </div>
      </div>

      <div className='bottom'>
        <h2 className='title'>  Desserts 🍧</h2>

        <div className='contentDesserts'>
          <div className='left'>{dessertsLeft_}</div>
          <div className='right'>{dessertsRight_}</div>
        </div>
      </div>
    </div>
  )
}
