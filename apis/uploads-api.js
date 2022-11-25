import { Router } from "express";
import fs from 'fs';
import { generateUUID } from "../utilities/utility.js";

const uploadRoutes = Router();

//get all
uploadRoutes.get('/uploads', (req, res) => {

    let fileContent = fs.readFileSync('./data/uploads.json');
    let data = JSON.parse(fileContent);
    return res.json(data)

})


uploadRoutes.post('/uploads', (req, res) => {

    let obj = req.body;
    obj['Id'] = generateUUID()

    console.log(obj)


    let uploadList = JSON.parse(fs.readFileSync('./data/uploads.json'));
    uploadList.push(obj);
    fs.writeFileSync('./data/uploads.json', JSON.stringify(uploadList))
    return res.json({ status: true })
})

export default uploadRoutes;