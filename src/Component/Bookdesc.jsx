import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink, useHistory } from 'react-router-dom'
import Addreview from './Modals/Addreview'
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Bookdesc = (props) => {
const history=useHistory();
const[bookdetail,setbookdetail]=useState([]);
const {register,handleSubmit,formState: { errors },reset,watch,trigger,} = useForm();
const API_KEY=process.env.REACT_APP_API_KEY;
const[modal,setmodal]=useState(false);
const[rating,setrating]=useState("3.0");
const ratingChanged = (newRating) => {
    setrating(newRating);
    
   
    }
    
    const onSubmit = (data)=>{

    
    
      const res =  fetch(`${API_KEY}/postreview`, {
        method: "POST",
        body: JSON.stringify({
        
          review:data.review,
         rating:rating,
        bookid:bookdetail._id
  
          
        }),
        headers: {
         
          mode: 'cors',
          'Access-Control-Allow-Origin':`${API_KEY}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
        credentials:"include",
       
      }).then((res) => {
     
        if(res.status===200){
            toast.success('Review Added Successfully!', {
                position: toast.POSITION.TOP_RIGHT
              
            });  setTimeout(() => {
              window.location.reload(true);
            }, 3000);
  
      
        }else {
            toast.error('something Went Wrong!', {
                position: toast.POSITION.TOP_RIGHT
              
            });  setTimeout(() => {
              window.location.reload(true);
            }, 3000);
        }
        /*const noti={message:"Your Review has been successfully Saved. ",category:"Entity",querytype:"Review Saved"}*/
    
       /* fetch(`${API_KEY}/notification`, {
          method: 'POST',
          headers:{
            Accept: "application/json",
            mode: 'cors',
            'Access-Control-Allow-Origin':`${API_KEY}`,
          'Content-type': 'application/json',
            
            'Access-Control-Allow-Credentials': true,
          },
          credentials:"include",
          body: JSON.stringify(noti),
        })
        .then((response) => {
     if(response.status === 200){
       //window.alert("saved noti")
     }
    
         })
         .catch((error)=>{
          console.error('Error:', error);
         })*/
    
          
      
    
    
      }).catch((error) => {
        console.error('Error:', error);
        
    
      });
      
     
    }
    const  fetchbookdetails = async () => {
            
           
        let book_id = props.match.params.book_id;
      
        try{
          const res = await fetch(`${API_KEY}/getbook/`  + book_id,{
            method:"GET",
            headers:{
              mode: 'cors',
              'Access-Control-Allow-Origin':`${API_KEY}`,
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
            credentials:"include"
          
           
      
             
          });
          const data = await res.json();
          setbookdetail(data);
      
      
          if(res.status !== 200 ){
              const error = new Error(res.error);
              throw error;
              
          }
          
       
      
      
      }catch(err){
        console.log(err);
        history.push("/Login");
      
      } 
      
      }
      useEffect(() => {
        fetchbookdetails();
      },[ ] );
  return (
    <>
    <Navbar/>
    <ToastContainer />
    <div className='container'>
    <div className='row justify-content-center'>

    <div className='col-lg-6 col-md-6 col mt-5 mb-5' id='Divdesc'>
   <div className='row mt-4 mb-2'>
   <div className='col-lg-6'><h1 className='divhead'>Book Name:</h1></div>
   <div className='col-lg-2'><h6 className='divhead2'>{bookdetail.title}</h6></div>
   </div>
   <div className='row mt-4 mb-2'>
   <div className='col-lg-6'><h1 className='divhead'>Book Author:</h1></div>
   <div className='col-lg-2'><h6 className='divhead2'>{bookdetail.author}</h6></div>
   </div>
   <div className='row mt-4 mb-2'>
   <div className='col-lg-6'><h1 className='divhead'>Book ISBN:</h1></div>
   <div className='col-lg-2'><h6 className='divhead2'>{bookdetail.ISBN}</h6></div>
   </div>
   <div className='row mt-4 mb-2 justify-content-center'>
<NavLink to="/userhome"><button className='btn btn-success'>Go Back</button></NavLink>





   </div>
    
    </div>
    <div className='col-lg-5 col-md-5 ml-5 mt-5'>
    <div className='row'>

<div className='container' >
<div className='row'>
<div className='col-lg-12 col-md-8 col-12' id='Divdesc'>
<h1 className='text-center'>Add Review</h1>
<form  className='col-lg-12' onSubmit={handleSubmit(onSubmit)} >
<div className='row justify-content-center'>



<ReactStars
    count={5}
    onChange={ratingChanged}
    size={40}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffa534"
    value={3}
    
    color="lightgray"
    name="rating"
   
  
  />,
</div>
<div className='row justify-content-center'>
<h1 className='ratinghead'>{rating|| "Select rating"}</h1>
</div>





<div className="form-input ">
    
<div className="col">

<input
  name="review"
  type="text"
  //value={review}
  //onChange={(e)=>setreview(e.target.value)}
  className={`form-control  ${errors.review && "invalid"}`}
  placeholder="Enter Your Review"
  rows="4" cols="50"
  {...register("review", { required: "Review body is Required",
       pattern:/^[a-zA-Z .,\n 0-9]*$/,
         message:"Review body is Required",
        
         
       })}
       onKeyUp={() => {
        trigger("review");
      }}
 />
 {errors.review && (
  <small className="errormes ml-2 ">{errors.review.message}</small>
)}
 </div>
 
<div className='row justify-content-center mt-4'>
<button className=' btn btn-success' > SUBMIT REVIEW</button>
</div>

</div>
</form>
</div>
</div>
</div>

</div>

    </div>
    <div></div>
    
    </div>
  
   
    </div>
    <div className='container'>
    <div className='row justify-content-center'>
    <h2 className='text-center'>Top Reviews</h2>
  
    </div>
    
        
        <div className='row mt-5 justify-content-center'>

{bookdetail.reviews && bookdetail.reviews.map((review,id)=>(
    <div className='col-lg-10 col-md-10 col-10 mt-2 mb-2' id='reviewcard'>

    <div className='row'>
    <div className='col-lg-4 mt-2'><h1 className='divhead2'>{review.uid}</h1></div>
    <div className='col-lg-4'></div>
    <div className='col-lg-4 mt-3 float-right'>
    <ReactStars
    count={5}
 
    size={20}
    isHalf={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffa534"
    value={review.rating}
    
    color="black"
    name="rating"
   
  
  />
    
    </div>
    </div>
    <div className='row p-2 justify-content-center'>
    <p className='reviewspara'>{review.review}</p>
    </div>
    
    </div>

))}
    



   
   
    
  
    </div>
   

    </div>
    <Footer/>
    
    </>
  )
}

export default Bookdesc