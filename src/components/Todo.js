import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Remove, Update_data } from "../redux/actions/actions";
import { DeleteContext } from "./context/ContextProvider";

const Todo = () => {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState("");
  const [ind, setInd] = useState("");
  const handleClose = () => setShow(false);
  //view data

  const handleShow = (el) => {
    setShow(true);
    setUpdate(el);
  };
  const { User_data } = useSelector((state) => state.todoreducers);

  const [view, setView] = useState(false);
  const [viewValue, setViewValue] = useState("");

  const { dlttask, setDletask } = useContext(DeleteContext);
  console.log(dlttask);

  const dispatch = useDispatch();

  //delete data function
  const remove = (id) => {
    dispatch(Remove(id));
    setDletask(true);
  };

  // update data function
  const usertask_update = () => {
    dispatch(Update_data(update, ind));
    handleClose();
  };

  return (
    <>
      <div>
        {User_data.map((ele, k) => {
          return (
            <div
              key={k}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <li style={{ listStyle: "none" }}>{ele}</li>
              <div
                style={{
                  background: "#F0F8FF",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => {
                    setView(true);
                    setViewValue(ele);
                  }}
                  style={{ cursor: "pointer", margin: "10px" }}
                >
                  Show
                </Button>

                <Button
                  variant="primary"
                  style={{ cursor: "pointer", margin: "10px" }}
                  onClick={() => {
                    handleShow(ele);
                    setInd(k);
                  }}
                >
                  Edit
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <h3 className="text-center mt-2">Update your task</h3>
                  <Modal.Header>
                    <div>
                      <input
                        type="text"
                        value={update}
                        onChange={(e) => setUpdate(e.target.value)}
                        className="form-control col-lg-5 mt-2 align-item-center justify-content"
                      />
                    </div>
                  </Modal.Header>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => usertask_update()}>
                      Update
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  variant="danger"
                  style={{ cursor: "pointer", margin: "10px" }}
                  onClick={() => remove(k)}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}

        <Modal show={view}>
          <h1 className="text-center">{viewValue}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setView(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Todo;
