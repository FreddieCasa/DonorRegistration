import { useState } from "react";
import axios from "axios";
import "./Form.css"

const Form = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    bloodGroup: "",
  });

  const handleForm = (event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(personToPost);
    };

  
    const personToPost = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      bloodGroup: formData.bloodGroup,
    };

    const postData = () => {
      axios
        .post("https://dummyjson.com/users/add", { personToPost })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    };
  
    postData();

  return (
      <div>
        <h1>Register a decision to donate</h1>
        <p>Use this form to record a decision to donate some or all of your organs and tissue. Fields marked * are mandatory</p>
        <form onSubmit={handleSubmit} className = "formDesign">

            <label className="formLabel">First Name *</label>
            <div><input 
              required 
              type ="text" 
              name = "firstName"
              value={formData.firstName}
              onChange={handleForm}>
             
              </input>
              </div>

            <label className="formLabel">Last Name *</label>
            <div>
              <input 
              required 
              type ="text" 
              name = "lastName"
              value={formData.lastName}
              onChange={handleForm}>
            
              </input>
              </div>

            <label className="formLabel">Age *</label>
            <div>
              <input 
              required 
              type ="text" 
              name = "age"
              value={formData.age}
              onChange={handleForm}>
              </input>
              </div>

            <label className="formLabel">Gender *</label>
            <div>
              <input 
              required 
              type ="text" 
              name = "gender"
              value={formData.gender}
              onChange={handleForm}>
        
              </input>
              </div>

            <label className="formLabel">Blood Group *</label>
            <div>
              <input
              required 
              type ="text" 
              name = "bloodGroup"
              value={formData.bloodGroup}
              onChange={handleForm}>
              </input>
           
              </div>
              <div className="submitButton">
              <button>
                submit
              </button>
       
        </div>
       
        </form>
        
      </div>
      
  );
}


export default Form;
