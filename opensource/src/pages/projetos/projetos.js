import './projetos.css';
import Menu from './../../components/menu/menu';

import axios from 'axios';
import React, { Component, useEffect, useState } from "react";
import IntegracaoAPI from "../../services/IntegracaoAPI"

const Projetos = () => {
    const [projetos, setProjetos] = useState([])

    useEffect(() => {
        const fetchAllUsuarios = async () => {
            try {
                const res = await axios.get("http://localhost:8800/projeto")
                setProjetos(res.data)
            } catch(e) {
                console.log(e)
            }
        } 
        fetchAllUsuarios()  
    },[])

    return(
        <>
                 <Menu />
                 <div class="projetos">
                     <div class="container">
                       <h1>Projetos</h1>
                         <div class="pesquisa">
                             <input type="text"></input>
                             <img src="https://cdn-icons-png.flaticon.com/512/64/64673.png"></img>
                         </div>
                            {projetos.map((x) => (<div className='repositorio' key={x.pro_id}>
                                
                                <div class="informacoes">
                                <h1 >{x.pro_nome}</h1>
                                <p>{x.pro_descricao}</p>

                                </div>
                                <div class="button">
                                    <a href={x.pro_linkProjeto} target='_blank'>
                                        <div class="textButton">
                                            <p>Saiba mais</p>
                                        </div>
                                    </a>
                                </div>
                            </div>))}
                    </div>
                </div>
            </>
    )
}

export default Projetos;