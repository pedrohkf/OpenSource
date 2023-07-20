import express from "express";
import mysql from "mysql";
import cors from "cors";

let erros = [];

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "opensource"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello, World!")
})

app.get("/projeto", (req, res) => {
    const q = "SELECT * FROM projeto"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/projeto", (req, res) => {

    if (req.body.pro_nome.length <= 3 || req.body.pro_nome.length >= 20) {
        erros = erros + 1;
        console.log('Nome Inválido')
    } else if(req.body.pro_descricao.length >= 100){
        erros = erros + 1;
        console.log('Descrição Inválida')
    } else if(req.body.pro_linkProjeto === ' ' || req.body.pro_linkProjeto.length <= 6){
        erros = erros + 1;
        console.log('Link Inválido')
    } else {
        erros = [];
        const q = "INSERT INTO projeto (`pro_nome`, `pro_data`, `pro_descricao`, `pro_ativo` , `pro_linkProjeto`) VALUES (?)";
        const values = [
            req.body.pro_nome,
            gerarData(),
            req.body.pro_descricao,
            1,
            req.body.pro_linkProjeto
        ]

        console.log(erros)
        console.log(gerarData())

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json("Projeto criado com sucesso");
        });
    }
});

app.listen(8800, () => {
    console.log("connected to backend!")
})

function gerarData() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}-${month}-${day}`;
}
