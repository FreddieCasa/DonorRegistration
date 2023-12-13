import { useNavigate } from "react-router-dom";



const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div className = "card">
            <img src="R.jpg"/>
            <h1>Give Something that Means Something</h1>
            <p>Give blood and give the gift of life. Come to give blood Dec. 1-17 and get a $10 Amazon.com Gift Card* by email.</p>
            <button onClick={()=> navigate("/Form")}>MAKE AN APPOINTMENT</button>
        </div>
        
      );
}

export default Homepage;