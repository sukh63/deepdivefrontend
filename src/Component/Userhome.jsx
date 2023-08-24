import React,{useEffect,useState} from 'react'
import Logoubutn from './Logoubutn';
import Footer from './Footer'
import { useForm } from "react-hook-form";
import { NavLink,useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Userhome = () => {
    const history=useHistory()
    const API_KEY=process.env.REACT_APP_API_KEY;

    const {register,handleSubmit,formState: { errors },reset,watch,trigger,} = useForm();
    const [item, setItem] = useState("A");
    const [books, setbooks] = useState("");
const[yourbooks,setyourbooks]=useState([]);
const [filteredResults, setFilteredResults] = useState([]);
const [search,setsearch]=useState();
const [searchInput, setSearchInput] = useState("");
const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = books.filter((item) => {
        return Object.values(item.title)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
  
      setFilteredResults(filteredData);
     
    } else {
      setFilteredResults(books);
     
    }
  };

const deletebook=(event)=>{
const{id}=event.target;

fetch(`${API_KEY}/deletebook`, {
    method: 'POST',
headers: {
Accept: 'application/json',
mode: 'cors',
'Access-Control-Allow-Origin':`${API_KEY}`,
'Content-Type': 'application/json',
'Access-Control-Allow-Credentials': true,
},
credentials:"include",

    body: JSON.stringify({id:id}),
  })
  .then((response) => {
 
   if(response.status===200){
    toast.success('Book Deleted Successfully!', {
      position: toast.POSITION.TOP_RIGHT
    
  });  setTimeout(() => {
    window.location.reload(true);
  }, 3000);


   } else{
    toast.error('something Went Wrong !', {
      position: toast.POSITION.TOP_RIGHT
  });
  setTimeout(() => {
    window.location.reload(true);
  }, 3000);

   }
   

   
    
    
  //Then with the data from the response in JSON...
  
  })
  //Then with the error genereted...
  .catch((error) => {
    console.error('Error:', error);
 
  });


}
    const [bookData, setbookData] = useState({
        title: "",
        author: "",
        ISBN: ""
       
        
   
    });
   
useEffect (() =>{

        fetch(`${API_KEY}/getyourbooks`,{
            method:'GET',
            headers:{
                Accept: 'application/json',
                mode:"cors",
                        'Access-Control-Allow-Origin':`${API_KEY}`, 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
              },
              credentials:"include",
           
        }).then(async(res)=>{
           const data= await res.json();
  
           setyourbooks(data);
// history.push('/signin')
if(res.status !==200){
    const Error = new Error (res.Error);
    throw Error;
}
        }).catch((err) =>{


//logger.info(err);
        })

    },[]);




    useEffect (() =>{

        fetch(`${API_KEY}/getdata`,{
            method:'GET',
            headers:{
                Accept: 'application/json',
                mode:"cors",
                        'Access-Control-Allow-Origin':`${API_KEY}`, 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
              },
              credentials:"include",
           
        }).then((res)=>{
           
// history.push('/signin')
if(res.status !==200){
    const Error = new Error (res.Error);
    throw Error;
}
        }).catch((err) =>{


//logger.info(err);
        })

    },[]);
    useEffect (() =>{

        fetch(`${API_KEY}/getallbooks`,{
            method:'GET',
            headers:{
                Accept: 'application/json',
                mode:"cors",
                        'Access-Control-Allow-Origin':`${API_KEY}`, 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
              },
              credentials:"include",
           
        }).then(async(res)=>{
           const data= await res.json();
  
           setbooks(data);
// history.push('/signin')
if(res.status !==200){
    const Error = new Error (res.Error);
    throw Error;
}
        }).catch((err) =>{
history.push("/Login")

//logger.info(err);
        })

    },[]);
    //Add book api

    const onSubmit=(data)=>{
  

  
        fetch(`${API_KEY}/postbook`, {
            method: 'POST',
      headers: {
        Accept: 'application/json',
        mode: 'cors',
        'Access-Control-Allow-Origin':`${API_KEY}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials:"include",
    
            body: JSON.stringify(data),
          })
          .then((response) => {
         
           if(response.status===200){
            toast.success('Book Added Successfully!', {
              position: toast.POSITION.TOP_RIGHT
            
          });  setTimeout(() => {
            window.location.reload(true);
          }, 3000);
  
  
           } if(response.status===422){
            toast.error('User Already Exist !', {
              position: toast.POSITION.TOP_RIGHT
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 3000);
  
           }
           
  
           
            
            
          //Then with the data from the response in JSON...
          
          })
          //Then with the error genereted...
          .catch((error) => {
            console.error('Error:', error);
         
          });
        }

     

      
  return (
    <>
    <Logoubutn/>
    <ToastContainer />
    <section>
    <div className='container mt-5 mb-5'>
    <div className='row justify-content-center'>
    <div className='col-lg-4 col-12'>
    
    <button className={item ==="A" ?"enrollbtntwo ":'submitbtn2'} onClick={() => setItem("A")} style={{cursor:"pointer"}} >  Your Books</button>
  </div>
    <div className='col-lg-4 col-12'>
    
    
    <button className={item ==="B" ?"enrollbtntwo ":'submitbtn2'} onClick={() => setItem("B")} style={{cursor:"pointer"}} > Add Books</button></div>
    <div className='col-lg-4 col-12'> <button className={item ==="C" ?"enrollbtntwo ":'submitbtn2'} onClick={() => setItem("C")} style={{cursor:"pointer"}} > All Books</button></div>
    </div>
    </div>
    <div className='container'>
    <div className='row justify-content-center'>
    {item === "A" &&<div className='container'>
    <div className='row justify-content-center mt-5 mb-5'>
    <h1 >Your Books</h1>
    </div>
    <div className='row justify-content-center'>
    {yourbooks.length===0 ?<h1>You Have No Books</h1>: yourbooks.map((book,id)=>(
        <div className='col-lg-4 col-md-6 col-12'>
        <div class="cardbook" style={{"width": "18rem"}}>
        <div class="card-body">
          <h5 class="card-title text-center">{book.title}</h5>
    
          <p class="card-text text-center">Author:{book.author}</p>
          <p class="card-text text-center">ISBN:{book.ISBN}</p>
          <NavLink to={"/bookdesc/" + book._id} style={{textDecoration:"none"}} >  <div className='row justify-content-center p-3'> <button className='btn-success text-center' style={{border:"none"}} >Read More</button>
    </div></NavLink>
 <div className='row justify-content-center p-3'> <button className='btn-success text-center' style={{border:"none"}}  onClick={deletebook} id={book._id}>Delete Book</button>
    </div>
      </div>
    </div>
    </div>
      ))}
    </div>
    </div>}
    {item === "B" &&<div className='container'>
    <div className='row justify-content-center'>
    <div className='col-lg-5 mt-5'>
    <h2 className='mainhead2 text-center'>ADD BOOK</h2>
    
    <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder='Enter Title' name="title"   className={`input-head mb-1 ${errors.title && "invalid"}`}   {...register("title", { required: "Title is Required",
    pattern:/^[a-zA-Z ]*$/,
      message:"Please Enter Valid name",
      
    })}
      
      onKeyUp={() => {
        trigger("title");
      }}/>	
     
      {errors.title && (
        <small className="errormes ml-2 ">{errors.title.message}</small>
      )} 
    <input type="text" placeholder='Enter Author' name="author"    className={`input-head mb-1 ${errors.author && "invalid"}`}  {...register("author", { required: "Authorname is Required" ,
    pattern:/^[a-zA-Z ]*$/,
      message:"Please Enter Valid Author name",
      
    })}
    onKeyUp={() => {
      trigger("author");
    }}/>	 
    {errors.author && (
      <small className="errormes ml-2">{errors.author.message}</small>
    )}
    <input type="text" placeholder='Enter ISBN' name="ISBN"   className={`input-head mb-1 ${errors.password && "invalid"}`}   {...register("ISBN", { required: "ISBN is Required",
    pattern:"^(-?[1-9]+\d*([.]\d+)?)$|^(-?0[.]\d*[1-9]+)$|^0$|^0.0$",
      message:"Please Enter Valid Author name",
      
    })}
   onKeyUp={() => {
    trigger("ISBN");
  }} />
  {errors.ISBN && (
    <small className="errormes ml-2">{errors.ISBN.message}</small>
  )}	 

  
   

    <div className='row justify-content-center'>
    <button className='btn simplebtn2 mt-5 mb-5'>ADD BOOK</button>
    </div>
    </form>
    </div>
    </div>
    
    </div>}
    {item === "C" &&<div className='container'>
    <div className='row justify-content-center'> 
    <form>
    <div className='col mb-5 ' >
   <input type='text' className='form-control2'  placeholder='Search books'   onChange={(e) => searchItems(e.target.value)}/>
                         </div>
   {/* <input type='select' className='form-control2' onChange={handlechange} placeholder='Enter Your Country' />*/}

    </form>
  
     
                        
  </div>
    <div className='row justify-content-center'>
    {searchInput.length > 1 ?  filteredResults.map((book,id)=>(   <div className='col-lg-4 col-md-6 col-12'>
    <div class="cardbook" style={{"width": "18rem"}}>
    <div class="card-body">
      <h5 class="card-title text-center">{book.title}</h5>

      <p class="card-text text-center">Author:{book.author}</p>
      <p class="card-text text-center">ISBN:{book.ISBN}</p>
      <NavLink to={"/bookdesc/" + book._id} style={{textDecoration:"none"}} >  <div className='row justify-content-center p-3'> <button className='btn-success text-center' style={{border:"none"}} >Read More</button>
</div></NavLink>
  </div>
</div>
</div>)):  books.map((book,id)=>(
    <div className='col-lg-4 col-md-6 col-12'>
    <div class="cardbook" style={{"width": "18rem"}}>
    <div class="card-body">
      <h5 class="card-title text-center">{book.title}</h5>

      <p class="card-text text-center">Author:{book.author}</p>
      <p class="card-text text-center">ISBN:{book.ISBN}</p>
      <NavLink to={"/bookdesc/" + book._id} style={{textDecoration:"none"}} >  <div className='row justify-content-center p-3'> <button className='btn-success text-center' style={{border:"none"}} >Read More</button>
</div></NavLink>
  </div>
</div>
</div>))}

  
   
    </div>
 
    </div>}
    </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Userhome