import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function UserData() {

  const navigate = useNavigate(); 
  
//  console.log(allData.email);
const handleClick = () => {
  localStorage.clear();
  navigate('/login');
}; 
  return (
    <div style={{background:'#0064804d',width:'50%',marginLeft:'20%',marginTop:'5%'}}>
      <Button variant="info" onClick={handleClick} style={{ margin: "10px" }}>
        Home
      </Button>
      <h1 style={{ textAlign: "center" }}>User Details:</h1>
      <hr></hr>
      <h1>Profile page</h1>
      {/* <h3>Email: - {allData.email}</h3>
      <h3>Password: - {allData.password}</h3> */}
     
    </div>
  );
}

export default UserData;
