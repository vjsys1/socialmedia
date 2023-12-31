import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

// Routes

const app = express();


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();
const port = 6000
mongoose
  .connect("mongodb+srv://imvj:Imvj941@cluster0.zjmoxkg.mongodb.net/socialmediaapp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(`Listening at ${port}`)
    )
  )
  .catch((error) => console.log(error));


  // usage of routes
  app.use('/auth', AuthRoute)
  app.use('/user', UserRoute)
  app.use('/post', PostRoute)
