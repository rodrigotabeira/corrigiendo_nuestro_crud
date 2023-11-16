/*
En este archivo se trabaja la lógica para responder las peticiones al servidor
*/
const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getUserById);

userRouter.post("/", userController.createUser);

userRouter.put("/:id", userController.updateUser); // se actualizo "post" por "put" para actualizar

userRouter.delete("/:id", userController.getUserById);

module.exports = userRouter;
