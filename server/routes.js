const express = require('express')
const router = express.Router()
const User = require('./models/user')

router.get('/', async (req, res) => {
    try{
        const user = await User.find({})
        res.send(user);
    } catch (error) {
        console.log(error)
    }
})

router.post('/new', async (req, res) => {
    const new_user = new User({
        userName: req.body.userName,
        password: req.body.password
    })
    try{
        await new_user.save()
        res.send({ message: "Sucessfully Saved New User"})
    } catch(error) {
        console.log(error)
        res.send({message: "Error Creating user"})
    }
})

router.post('/login', async (req, res) => {
    let user = {}
    const userName = req.body.userName
    const password = req.body.password
    try{
        const check_user = await User.find({'userName':userName})
        const check_password = await User.find({'password':password})
        if(check_user._id === check_password._id){
                res.status(200).send({message: 'Sucessfully Logged In'})
        }
    } catch(error) {
        if(!check_user){
            res.status(400).send("Username is not correct")
        }
        if(!check_password){
            res.status(401).send('Password is not correct')
        }
    }
})

module.exports = router;