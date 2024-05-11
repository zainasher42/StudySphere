import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Welcome from './pages/Welcome/Welcome';
import SignIn from './pages/SignIn/SignIn';
import TnC from './pages/TnC/TnC';
import SignUp from './pages/SignUp/SignUp';
import './App.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap your routes with BrowserRouter */}
      <Routes>
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/TnC" element={<TnC />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()

app.use(express.json)
app.use(express.urlencoded({extended : true}))
app.use("cors")

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
  const{username,email,password}=req.body

  try{
    const check=await collection.findOne({email:email})

    if (check){
      res.json("exist")
    }
    else{
      res.json("not exist")
    }

  }
  catch(e){
    console.log(e)
    res.json("not exist")

  }
})


app.post("/signup",async(req,res)=>{
  const{username,email,password}=req.body

  const data={
    username:username
    email:email,
    password:password
  }

  try{
    const check=await collection.findOne({email:email})

    if (check){
      res.json("exist")
    }
    else{
      res.json("not exist")
      await collection.insertMany([data])
    }

  }
  catch(e){
    console.log(e)
    res.json("not exist")

  }
})

app.listen(8000,()=>{
  console.log("port connected")
})
*/
