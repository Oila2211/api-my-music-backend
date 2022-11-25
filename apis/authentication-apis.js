import e, { Router } from "express";
import fs from 'fs';

const authenticationRoutes = Router();

authenticationRoutes.get('/authenticate/:username/:password', (req, res) => {

    let username = req.params.username
    let password = req.params.password


    let filestorage = fs.readFileSync('./data/users.json');
    let data = JSON.parse(filestorage)

    let userDetails = data.find(x => x.username.toLowerCase() == username.toLowerCase() && x.password == password)

    if (userDetails) {
        let responseObj = {
            status: true,
            username: userDetails.username
        }
        return res.json(responseObj)
    } else {
        let responseObj = {
            status: false
        }
        return res.json(responseObj)
    }


})

export default authenticationRoutes;
