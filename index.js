import express from "express";
import fs from 'fs';
import cors from 'cors'
import uploadRoutes from "./apis/uploads-api.js";
import userRoutes from "./apis/users-api.js";
import authenticationRoutes from "./apis/authentication-apis.js";

import dotenv from 'dotenv'
dotenv.config('.env')

const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static('public'))


app.use('/', userRoutes)

app.use('/', uploadRoutes)

app.use('/', authenticationRoutes)










// app.get('/', (req, res) => {
//     res.send('when are we coming');
// })

// app.get('/check', (req, res) => {
//     let fileData = fs.readFileSync('./users.json');
//     let userList = JSON.parse(fileData)
//     if (userList == true) {
//         res.json('it is present')
//     } else {
//         res.json('not present')
//     }

// })

// app.post('/confirm', (req, res) => {
//     const userName = req.query.userName;

//     let fileData = fs.readFileSync('./users.json');
//     let userList = JSON.parse(fileData)
//     let result = userList.includes(userName)

//     if (result == true) {
//         res.send(true)
//     }
//     else {
//         res.send(false)
//     }

// })

// app.post('/users', (req, res) => {

//     res.send('added successfully');
// })

app.get('/authenticate', (req, res) => {
    const userName = req.query.userName;

    if (userName == 'admin') {
        res.send(true)
    } else {
        res.send(false)
    }
})

app.get('/articles', (req, res) => {
    let ourFile = fs.readFileSync('./articles.json')
    let myData = JSON.parse(ourFile)
    res.json(myData)
})

app.post('/articles', (req, res) => {
    //const { author, content } = req.query.body;

    let fileContent = fs.readFileSync('./articles.json')

    let userList = JSON.parse(fileContent)
    userList.push({ "id": "5", "author": "James", "content": "hello" })
    // author.push('Uzoma')
    // content.push('here is my content for everything involved')
    let newFileContent = JSON.stringify(userList)
    fs.writeFileSync('./articles.json', newFileContent)
    res.send('everything okay')
    // const author = ['Uzoma']
    // const content = ['we are all in this together']

    // let ourFile = fs.readFileSync('./articles.json')
    // let myData = JSON.parse(ourFile)
    // let output = myData.push(author, content)
    // res.json(output)


})

app.delete('/articles-delete', (req, res) => {
    let fileContent = fs.readFileSync('./articles.json')
    let userList = JSON.parse(fileContent)

    userList.splice(0, 1)

    let newFileContent = JSON.stringify(userList)

    fs.writeFileSync('./articles.json', newFileContent)
    res.send('deleted successfully')
})



// app.post('/songs-songlist', (req, res) => {
//     let fileContent = fs.readFileSync('./songs.json')

//     let userList = JSON.parse(fileContent)
//     userList.push({ "id": "1", "Artist": "Tems", "title": "Higher" }, { "id": "2", "Artist": "Beyonce", "title": "Halo" })
//     let newFileContent = JSON.stringify(userList)
//     fs.writeFileSync('./songs.json', newFileContent)
//     res.send('everything okay')
// })




app.listen(process.env.PORT, () => {
    console.log(`Server Started..${process.env.APPLICATION_NAME}`)
    console.log(`Now listening on ${process.env.PORT}`)
})