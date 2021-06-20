import { FaPhoneSquareAlt, FaSnapchatSquare } from 'react-icons/fa'

export default function Horaire_info() {
  return (
    <div id='horaireInfo'>
      <div className='horaire'>
        <h2 className='title'>Horaire ⌛</h2>
        <div className='infoLeft'>
          <p>
            Livraison <strong>Vendredi & Samedi</strong> <br /> de
            <strong> 21h30 à 3h00 </strong>
          </p>
        </div>
      </div>
      <div className='social'>
        <h2 className='title'> Nous contacter 🔎</h2>
        <div className='infoRight'>
            <a className="linkIcon" href="#"><FaSnapchatSquare className="icon" size='50' color='white' /> <p>MENINNIGHT</p> </a>
            <div><FaPhoneSquareAlt className="icon" size='50' color='white' /> <span><a href="tel:048-479-5830"> <p> 0484/79.58.30</p></a> <br /> <a href="tel:047-069-5090"><p>0470/69.50.90</p></a> </span></div>
        </div>
      </div>
    </div>
  )
}
