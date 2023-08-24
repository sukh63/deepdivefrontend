import React,{useState,useEffect} from 'react'
import img from "../Assets/asterisk-kwon-q_gjDWf9ths-unsplash.jpg"
import Navbar from './Navbar'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useHistory,NavLink } from 'react-router-dom';

const Login = () => {



    const API_KEY=process.env.REACT_APP_API_KEY;
    const history=useHistory();
  const {register,handleSubmit,formState: { errors },reset,watch,trigger,} = useForm();
    const [memberData, setMemberData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
   
    });
    const handleChange = (event) => {
        setMemberData({
            ...memberData,
            [event.target.name]: event.target.value
        })
    };
    const onSubmit=(data)=>{
        
   console.log(data);
        fetch(`${API_KEY}/login`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              mode:"cors",
                      'Access-Control-Allow-Origin':`${API_KEY}`,
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Credentials': true
            },
          credentials:"include",
    
            body: JSON.stringify(data),
          })
          .then((response) => {
         
          if(response.status===400){
              toast.error('Invalid Credentials !', {
                position: toast.POSITION.TOP_RIGHT
            });
          }else if(response.status===200){
            history.push("/userhome")
          }
            
          //Then with the data from the response in JSON...
          
          })
          //Then with the error genereted...
          .catch((error) => {
            console.error('Error:', error);
         
          });
        }
      
      
        useEffect(() => {
          window.scrollTo(0, 0)
        }, [])
  return (
    <>
    <Navbar/>

    <ToastContainer />
    <section>
    <div className='container p-5'>
    <div className='row justify-content-center'>
    <h2 className='mainhead2'>Login Into System</h2>

    </div>
    <div className='row '>

    <div className='col-lg-6 mt-5'>
    <img src={img} className="img-responsive" style={{height:"300px",width:"400px",borderRadius:"2rem"}}/>
    </div>
    <div className='col-lg-5 mt-5'>
    <h2 className='mainhead2 text-center'>Enter Credentials</h2>
    
    <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder='Enter Email' name="email" onChange={handleChange}   className={`input-head mb-1 ${errors.email && "invalid"}`}  {...register("email", { required: "Email is Required" ,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid Email Format",
    }})}
    onKeyUp={() => {
      trigger("email");
    }}/>	 
    {errors.email && (
      <small className="errormes ml-2">{errors.email.message}</small>
    )}
    <input type="Password" placeholder='Enter Password' name="email" onChange={handleChange}   className={`input-head mb-1 ${errors.password && "invalid"}`}   {...register("password", { required: "Password is Required",
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      message: "Password must have min 8 Characters (A-Z, a-z, 0-9) & Spl Characters",
    },
    minLength: {
      value: 8,
      message: "Password must have min 8 Characters (A-Z, a-z, 0-9) & Spl Characters",
    },maxLength:{
      value: 16,
      message: "Password should have maximum 16 characters"

    }
   })}
   onKeyUp={() => {
    trigger("password");
  }} />	 

  {errors.password && (
    <small className="errormes ml-0 ">{errors.password.message}</small>
  )}


    <div className='row justify-content-center'>
    <button className='btn simplebtn2 mt-5' >Login</button>
    </div>
    </form>
    </div>
    
   
    </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Login