import React from "react";
import './criarProjeto.css'
import Menu from './../../components/menu/menu'

export default function CriarProjetos() {
    return (
        <>
            <Menu />
            <div className="criarprojeto">
                <div className="container">
                    <h1>Criar Projeto</h1>
                    <div className="Projectinformation">
                        <label>nome projeto</label>
                        <input type="text" className="camposPrenchimento"></input>
                        <label>link projeto</label>
                        <input type="text" className="camposPrenchimento"></input>
                        <label>descrição</label>
                        <textarea type="text" className="camposPrenchimento"></textarea>
                        <div className="buttonAdicionar">
                            <p>ADICIONAR</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
