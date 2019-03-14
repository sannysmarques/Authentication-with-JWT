const express = require('express');
//const jwt = require('jsonwebtoken');
const User = require('./user.server.model');
const Auth = require('../authentication/auth.server.model');

//const tokenString = 'P@as5c0DE';


/*  Sobre método de cadastro:
 *  Descrição:
 *  Rota: /user/cadastro
 *      [POST]: 
 *          req: { 
 *              body{
 *                  <Dados requeridos do usuario>
 *                  senha:  String  (required)
 *              } 
 *          }  
 *          res: 
 *              status(201) .send(user)       : Cadastrado com sucesso
 *              status(500) .send(erro)       : Erro ao salvar User ou Auth
 */
const cadastrar = (req, res) => {
    console.log('Cadastro OK');
    console.log(req.body);
    return res.send(req.body);
/*
    //validação dos dados enviados
    const newUser = new User(req.body);
console.log(newUser);
    newUser.save((erro) => {
        if (erro) return  res.status(500).send(erro);
        const newAuth = new Auth ({
            login: req.body.login,
            email: req.body.email,
            permissao: 0,
            senha: req.body.senha   //Usar jwt para armazenar criptografada
        });
console.log(newAuth);
        newAuth.save((erro) => {
            if (erro) return res.status(500).send(erro);
        });
    })
    return res.status(201).send(newUser);
*/
};


module.exports = {
    cadastrar
};