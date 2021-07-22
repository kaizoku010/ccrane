const express = require('express')
const app = express()
const path = require('path');
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,
        '/client/HomeScreen.html'));
  });

app.listen(port, () => {
  console.log(` app running on http://localhost:${port}`)
})