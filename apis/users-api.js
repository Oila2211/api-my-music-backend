import { Router } from "express";
import fs from 'fs';

const userRoutes = Router();

userRoutes.get('/users', (req, res) => {
    let fileStorage = fs.readFileSync('.data/users.json');
    let data = JSON.parse(fileStorage);
    return res.json(data)

    a

})

userRoutes.post('/users', (req, res) => {
    let user = {
        username: req.body.username,
        password: req.body.password
    }


    let userList = JSON.parse(fs.readFileSync('./data/users.json'));
    userList.push(user);
    let newFileContent = JSON.stringify(userList)
    fs.writeFileSync('./data/users.json', newFileContent)
    return res.json({
        status: true,
    })
})

// userRoutes.post('/users', (req, res) => {
//     // read from file to fetch prev data
//     let fileContent = fs.readFileSync('./users.json')

//     //convert to json
//     let userList = JSON.parse(fileContent)

//     //push new item
//     userList.push('Yvonne')

//     //convert back to a string

//     let newFileContent = JSON.stringify(userList)

//     //write to a file
//     fs.writeFileSync('./users.json', newFileContent)

//     res.send('added successfully')

// })

// app.delete('/users-delete', (req, res) => {
//     const userName = req.query.userName;

//     let fileContent = fs.readFileSync('./users.json');

//     let userList = JSON.parse(fileContent);

//     // const index = userList.indexOf(userName);

//     userList.splice(2, 1)

//     let newFileContent = JSON.stringify(userList)

//     fs.writeFileSync('./users.json', newFileContent)

//     res.send('deleted successfully')



//     // userName.split(3, 2)
//     // res.send('deleted successfully')

// })

export default userRoutes;