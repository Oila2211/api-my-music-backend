import { Router } from "express";
import fs from 'fs;'

app.get('/songs', (req, res) => {
    let ourFile = fs.readFileSync('./songs.json')
    let myData = JSON.parse(ourFile)
    res.json(myData)
})

app.get('/songs-list', (req, res) => {

    let obj = {
        artistName: req.query.artistName,
        titleName: req.query.titleName,

    }

    let fileContent = fs.readFileSync('./songs.json')

    let userList = JSON.parse(fileContent)
    userList.push(obj)
    let newFileContent = JSON.stringify(userList)
    fs.writeFileSync('./songs.json', newFileContent)
    res.json({
        message: 'it is working'
    })

})