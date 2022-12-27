import moment from 'moment/moment'
import React from 'react'
import { MdCopyright } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='Footer'>
       <div className="footerWrapper">
       <div className="footerLeft">
          <div className="copyright"><p>Copyright <MdCopyright></MdCopyright> <Link to={'/'} >Gost Dashborad</Link> <span>{moment().format('YYYY')}</span> </p></div>
        </div>
        <div className="footerRight"><div className="links">
          <ul>
            <li><Link to={'/privacy'}>Privacy Policy</Link></li> <li><Link to={'/terms'}>Terms & Conditions</Link></li></ul></div></div>
       </div>
    </div>
  )
}

export default Footer