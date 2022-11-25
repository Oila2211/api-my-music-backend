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