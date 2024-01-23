const userController = require('../controllers/UserControl');
const User = require('../modules/User');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const secretKey = 'mySecretKey'; 

router.get('/', (req, res) => {
    res.send('Welcome....');
});

router.post('/reg', async (req, res) => {
    try {
        const { username, password } = req.body;
        const data = await userController.Register(username, password);
        console.log(data);
        res.send('Done...');
    } catch (error) {
        console.error(error);
        res.status(500).json('Error'); 
    }
});

router.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body;
        const data = await userController.Login(userName, password);

        if (data) {
            const token = jwt.sign({ username }, secretKey);
            res.json({ message: `Welcome ${userName}`, token });
        } else {
            res.status(401).json('Unauthorized'); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Error');
    }
});

router.get("/getUser", async (req, res) => {
    try {
        const data = await userController.getUsers();
        if (data) { 
            res.json({ users: data, msg: "ok", status: 200 });
        } else {
            res.status(404).send("Users not found"); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
});

module.exports = router;



