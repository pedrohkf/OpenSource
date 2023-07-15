import './projetos.css';
import Menu from './../../components/menu/menu';

import React, { useEffect, useState } from "react";
import Nomes from "../../services/gerar"
import { Link } from 'react-router-dom';


export default function Projetos({ projetos }) {
    
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getData() {            
            const res = await Nomes();
            setUser(res);
          }  getData()      
    }, [setUser]);

    function Items(){
    const words = ["Hello", "World", "How are you?"]
    return (
        <ul>
            {words.map(item => <li>{item}</li>)}
        </ul>
    )}
    
    return ( 
        <>
            <Menu />
            <div class="projetos">
                <div class="container">
                    <h1>Projetos</h1>
                    <div class="pesquisa">
                        <input type="text"></input>
                        <img src="https://cdn-icons-png.flaticon.com/512/64/64673.png"></img>
                    </div>
                    <div class="repositorio">
                        <div class="informacoes">
                            {Items}
                            
                        </div>
                        <div class="button">
                            <div class="textButton">
                            <p>Saiba mais</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
         
    )
}
