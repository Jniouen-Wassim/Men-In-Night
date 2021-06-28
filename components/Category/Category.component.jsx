import { useState } from 'react'

import { useTranslation } from 'next-i18next';

import Menu from './components/Menu'
import Horaire_info from './components/Horaire_info'

export default function Category(){

  const { t } = useTranslation();

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
          <div> {t('button1')} </div>
        </button>
        <button  onClick={() => setButton({ menuBtn: false, horaire_infoBtn: true })} 
        className={`btnCategory ${activeButton === button.horaire_infoBtn ? 'active' : ''}`}>
          <div> {t('button2')} </div>
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
