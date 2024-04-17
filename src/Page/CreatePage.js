import React, { useEffect, useState } from 'react';
import { useFormAction, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import Header from '../Header';
import {v4 as uuidv4} from 'uuid'

function CreatePage(props) {
   const [errors, setErrors] = useState({idError:"",nameError:"",ageError:""});
   const navigate = useNavigate();
    let {products,setProducts}= props
 const [product,setProduct] = useState({ id:"",name:"",price:"",stock: true});
 function handleInput(e)
 {
  let{name,value}=e.target;
  if (name == "price") {
    value = +value;
}
if (name == "stock") {
    value = (value == "true");
}
handleValidate(name, value)

setProduct({...product,[name]:value});
 }
 function handleValidate(name, value) {
  console.log(name, value);
  if (name == "id") {
    if (value == "") {
        errors.idError = "ID is required";
    } else if (value.length < 3 || value.length > 15) {
        errors.idError =
            "ID has format Pxx,xdigit";
    }else {
        delete errors.idError;
    }  
}
  if (name == "name") {
      if (value == "") {
          errors.nameError = "Name is required";
      }else {
          delete errors.nameError;
      }  
  }
  if (name == "price") {
      if (value == "") {
          errors.ageError = "Price is required";
      } else if (value < 0) {
          errors.ageError =
              "Ivalid Price must be greater than 0";
      }else {
          delete errors.ageError;
      }  
  }
}
 function handleSubmit(e)
 {

  e.preventDefault();
  if(Object.keys(errors).length == 0){
    let dataSubmit={...product,
      No:uuidv4()}
      setProducts(pre=>[...pre,dataSubmit]);
      navigate('/list')
      alert("Update product succsess")
  }else{
      alert("All field is required")
  }

 }
    return (
        <div className='row'>
            <h1  class="text-center">Add new Product</h1>
            <form  onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
    <label htmlFor="id" class="form-label">ID:</label>
    <input type="id" class="form-control" id="id" placeholder="Enter ID" name="id" onChange={handleInput}
    />
    <p className='text-danger'>{errors?.idError}</p>
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="name" class="form-label">Name:</label>
    <input type="name" class="form-control" id="name" placeholder="Enter name" name="name" onChange={handleInput}
    />
     <p className='text-danger'>{errors?.nameError}</p>
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="price" class="form-label">Price:</label>
    <input type="number" class="form-control" id="price" placeholder="Enter price" name="price"  onChange={handleInput}/>
    <p className='text-danger'>{errors?.ageError}</p>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheckDefault" onChange={handleInput} value="true" defaultChecked/>
  <label class="form-check-label" for="flexCheckDefault" name="stock" >
    In Stock
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheckDefault" onChange={handleInput} value="false"/>
  <label class="form-check-label" for="flexCheckDefault" name="stock" >
    Out Stock
  </label>
</div>
  <div class="text-center">
    <button type="submit" class="btn btn-success">Add</button>
  </div>

  
</form>
        </div>
    );
}

export default CreatePage;