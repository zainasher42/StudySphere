import React from 'react'
import './SUstyles.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom'


function SignUpCard() {
  return (
    <div className="card">
    <h1 className='Title'>SIGN UP</h1>
    <input type="textbox" name="username" placeholder="USERNAME"/>
    <input type="textbox" name="email" placeholder="EMAIL"/>
     <input type="password" name="password" placeholder="PASSWORD" className="t2"/>
     <input type="password" name="password" placeholder="CONFIRM PASSWORD"/>
     <p className="text1">Already have an account? <Link to="/" className="text2">SIGN IN</Link></p>
     <button className="btn1">SIGN UP</button>
  </div>


  )
}

export default SignUpCard


/*const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [username,setUsername]=useState('')
const history = useNavigate();

const SignUpCard = () => {
  async function handleSubmit(e)
{
  e.preventDefault()

  try{
    await axios.post("http://localhost:8000/signup",{
      username,email,password
    })
    .then(res=>{
      if(res.data="exist"){
        alert("User already exists")
      }
      else if(res.data="not exist"){
        history("/welcome", {state:{id:email}})
      }
    })
    .catch(e=>{
      alert("wrong details")
      console.log(e)
    })
  }
  catch{
    console.log(e)
  }
}

  return (
    <StyledPaper>
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <WhiteTextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type = "username" onchange = {(e)=>{setUsername(e.target.value)}} placeholder = "Username" name = "" id = ""
        />
        <WhiteTextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type = "email" onchange = {(e)=>{setEmail(e.target.value)}} placeholder = "Email" name = "" id = ""
        />
        <WhiteTextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password" onchange = {(e)=>{setPassword(e.target.value)}} placeholder = "Password" name = "" id = ""
        />
        <WhiteTextField
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <br />
      <p> OR </p>
      <br />

      <Link to = "/"> Login </Link>

      <Typography variant="body2" style={{ marginTop: '1rem' }}>
        Already have an account?{' '}
        <Link to="/signin">Log In</Link>
      </Typography>
      <Typography variant="body2" style={{ marginTop: '0.5rem' }}>
        <Link href="#" onClick={() => console.log('Forgot password')}>Forgot password?</Link>
      </Typography>
    </StyledPaper>
  );
};

export default SignUpCard;
*/



/*const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [username,setUsername]=useState('')
const history = useNavigate();

async function submit(e)
{
  e.preventDefault()

  try{
    await axios.post("http://localhost:8000/signup",{
      username,email,password
    })
    .then(res=>{
      if(res.data="exist"){
        alert("User already exists")
      }
      else if(res.data="not exist"){
        history("/welcome", {state:{id:email}})
      }
    })
    .catch(e=>{
      alert("wrong details")
      console.log(e)
    })
  }
  catch{
    console.log(e)
  }
}

return(
  <div>
    <form action = "POST">
      <input type = "username" onchange = {(e)=>{setUsername(e.target.value)}} placeholder = "Username" name = "" id = "" />
      <input type = "email" onchange = {(e)=>{setEmail(e.target.value)}} placeholder = "Email" name = "" id = "" /> 
      <input type = "password" onchange = {(e)=>{setPassword(e.target.value)}} placeholder = "Password" name = "" id = "" /> 

      <input type = "submit" onClick = {submit}/>
    </form>

    <br />
    <p> OR </p>
    <br />
  


  <Link to = "/"> Login </Link>
  </div>
)*/