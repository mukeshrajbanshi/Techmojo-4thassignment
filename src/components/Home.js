import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Todo from "./Todo";
import  {Add } from "../redux/actions/actions";
import { useDispatch } from 'react-redux';

const Home = () => {
    const [data, setData] = useState("");
    console.log(data);

    const dispatch = useDispatch("");


    const addData = () => {
        dispatch(Add(data))
        setData("")
    }
  return (
    <>
    <div className='container'>
        <section className='mt-3 text-center'>
            <h3>Todo App</h3>
            <div >
                <input  type= "text" value={data} onChange = {(e) =>setData(e.target.value) }  style={{ margin : "5px" }}/>
                <Button variant = "contained" style = {{background : "red" }} onClick={() => addData()} >
                    Add
                </Button>
            </div>
            <Todo />
        </section>
    </div>
    </>
  )
}

export default Home
