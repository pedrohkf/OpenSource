import React, {useState} from "react";
import { ReactDOM } from "react-dom";
import './criarProjeto.css'

import { useNavigate } from "react-router-dom";

import Menu from './../../components/menu/menu';

import axios from 'axios';

function CriarProjetos() {
    const [projeto, setProjeto] = useState({
        pro_nome: "",
        pro_descricao: "",
        pro_linkProjeto: "",
    });
    

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setProjeto((prev) => ({...prev, [e.target.name]: e.target.value }));
    }
        


    const handleClick =  async e => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/projeto", projeto)
            navigate("/projetos")
        }catch(err){
            console.log(err)
        }
        console.log("enviar API");
    } 

    return (

        <>
            <Menu />
            <form className="criarprojeto">
                <div className="container">
                    <h1>Criar Projeto</h1>
                    <div className="Projectinformation">
                        <label>nome projeto</label>
                        <input type="text" onChange={handleChange} name="pro_nome" className="camposPrenchimento" ></input>
                        <label>link projeto</label>
                        <input type="text" onChange={handleChange} name="pro_linkProjeto"className="camposPrenchimento" ></input>
                        <label>descrição</label>
                        <textarea type="text" onChange={handleChange} name="pro_descricao" className="camposPrenchimento"></textarea>
                        <div className="buttonAdicionar" >
                            <input type="submit" onClick={handleClick}></input>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )

}

export default CriarProjetos;
