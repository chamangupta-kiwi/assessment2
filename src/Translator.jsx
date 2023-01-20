import React, { useEffect, useState } from "react";
import country from "./country.json";
import Axios from "axios";

function Translator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handletranslate =()=>{
    fetchData();
  }
  const fetchData = async () => {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${input}&langpair=${from}|${to}`
    );
    const responseToJson = await response.json();
   // setOutput(responseData)
   setOutput(responseToJson.responseData.translatedText);
    //setData(responseToJson);
  };
  //console.log(input, "input value");
  return (
    <div style={{ width: "60%", marginLeft: "20%", marginTop: "5%" }}>
      <div>
        <h1>Google Translator</h1>
        <h3>Select Laguage from dropdown</h3>
        <h2>{from}</h2>
        <select
          style={{ width: "32%" }}
          onChange={(e) => setFrom(e.target.value)}
        >
          {country?.length &&
            country.map((opt) => {
              return (
                <>
                  <option value={opt.code}>{opt.name}</option>
                </>
              );
            })}
        </select>
        <br></br>
        <br></br>
        <textarea
          cols="30"
          rows="5"
          onInput={(e) => setInput(e.target.value)}
        ></textarea>
         <h3>Select Laguage from dropdown</h3>
        <h2>{to}</h2>
        <select
          style={{ width: "32%" }}
          onChange={(e) => setTo(e.target.value)}
        >
          {country?.length &&
            country.map((opt) => {
              return (
                <>
                  <option value={opt.code}>{opt.name}</option>
                </>
              );
            })}
        </select>
        <br></br>
        <br></br>
        <textarea cols="30" rows="5" value={output}></textarea>
        <br></br>
        <button type="button" onClick={handletranslate}>Translate</button>
      </div>
    </div>
  );
}

export default Translator;
