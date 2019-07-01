//Load our app server using express

const express = require('express')
const app = express()

app.get("/", (req, res) => {
  console.log("Responding to the route");
  res.send("Hello From R00000T")
})
//We can ping now to local host 3000 - Node app.js
app.listen(3003, () => {
  console.log("Server is up and listeing on 3003...")
})
