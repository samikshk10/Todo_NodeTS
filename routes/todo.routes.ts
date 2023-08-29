import express from "express";

const todoRouters= express.Router();
const todoController = require('../Controllers/TodoController');

todoRouters.get('/users', todoController.getUsers);

module.exports= todoRouters;