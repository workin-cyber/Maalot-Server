const express = require("express")
const router = express.Router();
const userLogic = require('../BL/userLogic')

router.get('/', async(req,res)=>{
    const users = await userLogic.getAllUsers();
    res.send(users)
})


module.exports=router;
// const rou
// module.exports = (req, res) => {
//     res.send("testI")
// }
// const userLogic = require('../BL/userLogic')

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/user', async (req, res) => {

//     let res = await userLogic.bla()

//     res.send({
//         firstName: "Yonatan",
//         lastName: "Ramon",
//         email: "Yokon@walla.com",
//         password: "987865",
//         address: {
//             street: 12,
//             homeNum: 34,
//             city: "jerusalem",
//         },
//         gender: 'male'
//     })
// })