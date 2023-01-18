import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProctectedRoutes({ Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("record");
    const allData = JSON.parse(data);
    //  console.log(allData.email);
    //  let login = localStorage.getItem('token');
    // console.log(login,"bhgfcsdg")
    if (!data) {
      navigate("/login");
    }
  });

  return (
    <div>
      After Login
      <Component />
    </div>
  );
}

export default ProctectedRoutes;
