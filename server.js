/*//logica de fazer um cafe

const cor = "branco"
const tamanho = 2.5

function verificarSeOCopoEstaSujo(sujo) {
    //logica para verificar se o copo está sujo
    return `o copo: ${sujo}`
}
const copo = {
    cor,
    tamanho,
    verificarSeOCopoEstaSujo,
}
console.log(copo.verificarSeOCopoEstaSujo("está sujo"))
*/

//configurando o servidor
const express = require("express")
const server = express()

//configurar a apresentação
server.get("/", function(req, res){
    return res.send("Boa noite consagrado nodemoooon")
})

//ligar o servidor na porta 3000
server.listen(3000, function(){
    console.log("iniciei o servidor!")
})



