import React, {useState} from "react";
import { ReactDOM } from "react-dom";
import './criarProjeto.css'

import Menu from './../../components/menu/menu';

import axios from 'axios';

function CriarProjetos() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [desc, setDesc] = useState('');
    
    const handleChange = (e) => {
        setName(e.target.value);
    }
        
    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }
        
    const handleDescChange = (e) => {
        setDesc(e.target.value);
    }


    const handleSubmit = (e) => {
        alert(`Name: ${name}, ${link}, ${desc}`);

        e.preventDefault();
    } 

    return (

        <>
            <Menu />
            <form className="criarprojeto" onSubmit={(e) => {handleSubmit(e)}}>
                <div className="container">
                    <h1>Criar Projeto</h1>
                    <div className="Projectinformation">
                        <label>nome projeto</label>
                        <input type="text" value={name} required onChange={(e) => {handleChange(e)}} className="camposPrenchimento" ></input>
                        <label>link projeto</label>
                        <input type="text" value={link} required onChange={(e) => {handleLinkChange(e)}} className="camposPrenchimento" ></input>
                        <label>descrição</label>
                        <textarea type="text" value={desc} required onChange={(e) => {handleDescChange(e)}} className="camposPrenchimento"></textarea>
                        <div className="buttonAdicionar" >
                            <input type="submit" value="Adicionar"></input>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}


export default CriarProjetos;
