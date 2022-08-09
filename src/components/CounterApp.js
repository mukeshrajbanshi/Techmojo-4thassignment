import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, reset } from "../redux/actions/index";

const CounterApp = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="mt-3 text-center">
      <h1>Counter App</h1>
      <br />
      <h4>using React and Redux</h4>
      
      <input type="text" value={myState} style={{ textAlign: "center", margin : "5px" }} />
      <button onClick={() => dispatch(decNumber())} style={{  margin : "5px" ,paddingRight : "10px"}}> - </button>
      <button onClick={() => dispatch(incNumber())} style={{  margin : "5px" }}> + </button>
      <button onClick={() => dispatch(reset())} style={{ margin : "5px" }}>Reset</button>
    </div>
  );
};
export default CounterApp;
