import React from 'react'
import { Link } from 'react-router-dom'
import flagunated from '../assets/unatedkingdom.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import discord from '../assets/discord.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        <p>Browse meals</p>
        <div className="namefood">
          <Link className='links' href="">A</Link><>/</>
          <Link className='links' href="">B</Link><>/</>
          <Link className='links' href="">C</Link><>/</>
          <Link className='links' href="">D</Link><>/</>
          <Link className='links' href="">E</Link><>/</>
          <Link className='links' href="">F</Link><>/</>
          <Link className='links' href="">G</Link><>/</>
          <Link className='links' href="">H</Link><>/</>
          <Link className='links' href="">I</Link><>/</>
          <Link className='links' href="">J</Link><>/</>
          <Link className='links' href="">K</Link><>/</>
          <Link className='links' href="">L</Link><>/</>
          <Link className='links' href="">M</Link><>/</>
          <Link className='links' href="">N</Link><>/</>
          <Link className='links' href="">O</Link><>/</>
          <Link className='links' href="">P</Link><>/</>
          <Link className='links' href="">Q</Link><>/</>
          <Link className='links' href="">R</Link><>/</>
          <Link className='links' href="">S</Link><>/</>
          <Link className='links' href="">T</Link><>/</>
          <Link className='links' href="">U</Link><>/</>
          <Link className='links' href="">V</Link><>/</>
          <Link className='links' href="">W</Link><>/</>
          <Link className='links' href="">X</Link><>/</>
          <Link className='links' href="">Y</Link><>/</>
          <Link className='links' href="">Z</Link>
        </div>
      </div>
      <div className='footer2'>
        <div className="ichkifooter">
          <div className="footerp">
            <p>© 2024 TheMealDB <br />
              Proudly built in the UK <img width={16} height={10} src={flagunated} alt="" /></p>
          </div>
          <div>
          <div className="socials">
            <p >Socials:
              <Link style={{ textDecoration: 'none' }}> <img width={16} height={16} src={facebook} alt="" /></Link>
              <Link style={{ textDecoration: 'none' }}> <img width={16} height={16} src={twitter} alt="" /> </Link>
              <Link style={{ textDecoration: 'none' }}> <img width={16} height={16} src={discord} alt="" /> </Link></p>

          </div>
          <div style={{display:'flex',gap:'20px'}} className="abouts">
            <Link style={{textDecoration:'none'}}><p style={{color:'white'}}>About</p></Link>
            <Link style={{textDecoration:'none'}}><p style={{color:'white'}}>Faq</p>  </Link>
            <Link style={{textDecoration:'none'}}><p style={{color:'white'}}>Blank</p></Link>
          </div>
          </div>
          <div style={{display:'flex',gap:'20px',fontSize:'30px'}} className="footerreklama">
            <a style={{textDecoration:'none',color:'white'}} href="https://www.thecocktaildb.com/"><p>ThecoctailDB</p></a>
            <a style={{textDecoration:'none',color:'white'}} href="https://www.theaudiodb.com/"><p>TheaudioDB</p>  </a> 
            <a style={{textDecoration:'none',color:'white'}} href="https://www.thesportsdb.com/"><p>ThesportsDB</p> </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer