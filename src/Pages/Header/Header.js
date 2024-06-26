import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from'../../img/iconlogo.png';
import { CgMenuGridR } from "react-icons/cg";
import '../../css/defaultStyle.css'
import '../../css/defaultStyleMobile.css'
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";








const Header = () => {
  const [exibir, setExibir] = useState(false);
 
  return (
    <nav className={exibir? "NavbarOne" : "Navbar"}>
    
      <aside className="logoAndBtn">
        <img src={logo} alt="logo gestor" className={exibir? ' ' : "exibirlogo" } />
        <button onClick={()=>setExibir(!exibir)}><CgMenuGridR  className='iconbtn'/></button>
      </aside>
      <ul className='navOptions'>
        <li className='liNav'><Link to="/" className='NavItem'>
          <div className='iconSettings' >
            <GoHomeFill className="iconNav"/>
            </div>
            <div className={exibir? "ocultarTexto" : "exibirTexto"}> 
            <p>Home</p> 
          </div>
        </Link>
        </li>
        <li className='liNav' ><Link to="/membros" className='NavItem'>
          <div className='iconSettings' >
            <FaUsers  className="iconNav"/>
            </div>
            <div className={exibir? "ocultarTexto" : "exibirTexto "}> 
            <p>Membros</p> 
          </div>
        </Link>
        </li>
        <li className='liNav' ><Link to="/cadastro" className='NavItem'>
          <div className='iconSettings' >
            <BsFillClipboard2DataFill  className="iconNav"/>
            </div>
            <div className={exibir? "ocultarTexto" : "exibirTexto"}> 
            <p>Cadastro</p> 
          </div>
        </Link>
        </li>
        <li className='liNav'><Link to="/financeiro" className='NavItem'>
          <div className='iconSettings' >
            <RiMoneyDollarCircleFill  className="iconNav"/>
            </div>
            <div className={exibir? "ocultarTexto" : "exibirTexto"}> 
            <p>Financeiro</p> 
          </div>
        </Link>
        </li>
   
      </ul>


    </nav>
  
  )
}

export default Header