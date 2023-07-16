import './projetos.css';
import Menu from './../../components/menu/menu';

import React, { Component, useEffect, useState } from "react";
import Nomes from "../../services/gerar"


class Projetos extends Component {

    state = {
        usuarios: []
    }

    async componentDidMount() {
        const response = await Nomes()
        this.setState({ usuarios: response });

    }

    render() {
        const { usuarios } = this.state;

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
                        {
                            usuarios.map(x => <div className='repositorio'>
                                
                                <div class="informacoes">
                                <h1>{x}</h1>

                                </div>
                                <div class="button">
                                    <div class="textButton">
                                        <p>Saiba mais</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </>

        )
    }

}

export default Projetos;
