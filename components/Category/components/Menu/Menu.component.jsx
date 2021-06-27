import {
  pates,
  boissons,
  dessertsLeft,
  dessertsRight,
} from './AllArray_menu'

import Pates from './components/Pates'
import Boissons from './components/Boissons'
import Desserts from './components/Desserts'

import Sandwich from './components/Sandwich'

export default function Menu() {
  const pates_ = pates.map((pates, index) => {
    return <Pates data={pates} key={index} />
  })

  const boissons_ = boissons.map((boissons, index) => {
    return <Boissons data={boissons} key={index} />
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
          <Sandwich />
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
