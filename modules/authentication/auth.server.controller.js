const express = require('express');
//const jwt = require('jsonwebtoken');
const Auth = require('./auth.server.model');


/*  Sobre método de autenticação:
 *  Descrição:
 *  Rota: /auth/login
 *      [POST]: 
 *          req: { 
 *              body{
 *                  login: String, 
 *                  email: String, 
 *                  senha: String (required)
 *              } 
 *          }  
 *          res: 
 *              status(200) .send(tokenLogin)       : Logado com sucesso. 
 *              status(401) .send("Senha inválida."): Senha inválida.
 *              status(500) .send(erro)             : Erro em qualquer parte da sequencia principal.
 */
const autenticar = async (req, res) => {
    try {
        //->veriricação da entrada
        const auth = await Auth.findOne({'email': req.body.email, 'login':req.body.login});
        //->verificação do retorno do find
        console.log(auth);
        //await auth.populate('User');
        //console.log(auth);
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
};


module.exports = {
    autenticar
};