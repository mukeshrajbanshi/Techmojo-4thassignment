import React from "react";
import axios from "axios";
import { useState } from "react";

const FetchApi = () => {
  const [getData, setGetdata] = useState([]);

  const GetApiData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res.data);
        setGetdata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   GetApiData()
  // },[])
  // console.log("this is " , getData);
  return (
    <div className='mt-3 text-center'>
       <button onClick={GetApiData}>getData</button> 
      {
        getData.data?.map((items) => {
          return  (
            <div key={items.id}>
            <li style={{listStyle : "none"}}>{items.name}</li>
            </div>
          )
        })
      }
    </div>
  );
};

export default FetchApi;
