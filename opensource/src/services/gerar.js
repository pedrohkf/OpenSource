import React, { useEffect, useState } from "react";
import api from "./api";

async function Nomes(){
    var user = [];
        await api
            .get('/users/davi0503')
            .then((response) => {

                user = response.data;

            })
            .catch((e) => {
                console.log("ops! Usuário inválido" + e);
            });
            
    return ['davi', 'pedro', 'lidia'];   
    
}


export default Nomes;

