import { useState } from 'react'

import Menu from './components/Menu'
import Horaire_info from './components/Horaire_info'

export default function Category(){

  const [button, setButton] = useState({
    menuBtn: true,
    horaire_infoBtn: false,
  })

  const [activeButton, setActiveButton] = useState(button.menuBtn)

  return (
    <section id="category" className="containerSpace">

      <div className="allButton">   
        <button  onClick={() => setButton({ menuBtn: true, horaire_infoBtn: false })} 
        className={`btnCategory ${activeButton === button.menuBtn ? 'active' : ''}`}>
          <div> Menu </div>
        </button>
        <button  onClick={() => setButton({ menuBtn: false, horaire_infoBtn: true })} 
        className={`btnCategory ${activeButton === button.horaire_infoBtn ? 'active' : ''}`}>
          <div> Horaire & info </div>
        </button>
      </div>

      <div className="containerText">
          {/* -----( Button n1 )---- */}
          {button.menuBtn === true ? (<Menu />) : null}

          {/* -----( Button n2 )---- */}
          {button.horaire_infoBtn === true ?(<Horaire_info />)  : null}
      </div>
    </section>
  )
}
