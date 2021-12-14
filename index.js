const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
    console.log('ping')
    res.send('pong')
})

app.listen(3000, () => console.log('listening on port 3000'))

// ssh -i ./appademin-access-point.pem -R 8080:localhost:3000 ec2-user@ec2-16-171-22-69.eu-north-1.compute.amazonaws.com