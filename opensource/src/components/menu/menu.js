import React from "react";
import './menu.css'
import { Link } from 'react-router-dom';

const menu = () =>{
    return(
        <div className="menu">
            <Link to="/" class="itemMenu" >home</Link>
            <Link to="/projetos" class="itemMenu">projetos</Link>
            <Link to="/criarprojetos" class="itemMenu">criar projeto</Link>
        </div>
    )
}
export default menu;