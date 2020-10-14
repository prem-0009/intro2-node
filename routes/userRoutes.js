const express = require('express');
const router = express.Router();
let users = require('../models/userArray')

const {getAllUsers} = require('../controllers/UserController');
const {createNewUser} = require('../controllers/UserController');
const {findOneUser} = require('../controllers/UserController');
const {updateUser} = require('../controllers/UserController');
const {deleteUser} = require('../controllers/UserController');


//get all users
router.get('/all-users', getAllUsers)//nomiddle ware


//get one user based on id number
router.get('/single-user/:id',findOneUser );


router.post('/create-user', createNewUser);


router.put('/update-user/:id', updateUser);


router.delete('/delete-user/:id', deleteUser);


module.exports = router;