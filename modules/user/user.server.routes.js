const express = require('express');
const userController = require('./user.server.controller');

module.exports = (userRouter) => {
console.log('userRoutes Ok');
    userRouter.route('/cadastrar')
        .post(userController.cadastrar);
    return userRouter;
};