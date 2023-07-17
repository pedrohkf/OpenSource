import React, { useEffect, useState } from "react";
import api from "./api";

async function IntegracaoAPI(){
    var projetos = [];
        await api
            .get('/projeto')
            .then((response) => {

                projetos = response.data;

            })
            .catch((e) => {
                console.log("Erro ao Buscar Projetos" + e);
            });
            
    return projetos;  
    
}


export default IntegracaoAPI;

