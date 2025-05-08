const express = require('express');
const router = express.Router();


const {
    createUser,
    fetchAllUsers,
    fetchSingleUser,
    updateUser,
    deleteUser,
    login
} = require('../controller/user');


router.post('/user', createUser);

router.post('/user/login', login);

router.get('/user', fetchAllUsers);

router.get('/user/:id', fetchSingleUser);

router.patch('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

module.exports = router;