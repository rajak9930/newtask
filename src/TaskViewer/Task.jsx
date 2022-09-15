import React , {useState, useEffect}from "react";
import { Scrollbars } from "react-custom-scrollbars";
import View from "./View";

// const getData = () => {
//   const taskData = localStorage.getItem("Task_creator");
//   if (taskData) {
//     return JSON.parse(taskData);
//   } else {
//     return [];
//   }
// };
const Task = () => {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState([]);
  const [showTask, setShowTask] = useState(true);
  const [showlast, setshowlast] = useState(false);

  // input field states
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    let myTask = {
      taskName,
      taskDescription,
      taskDate,
      taskTime,
    };
    setTask([...task, myTask]);
    setTaskName("");
    setTaskDescription("");
    setTaskDate("");
    setTaskTime("");
    
  };
  useEffect(() => {
    localStorage.setItem("Task_creator", JSON.stringify(task));
  }, [task]);

  const upcoming = () => {
    setshowlast(true)
    
      setShowTask(false)  
      const check = [...task];
      const newData =  check.slice(-3);
      setNewTask(newData)
    

  };

  const handleAll = () => {
    setshowlast(false)
    if(showTask === false) {
       setShowTask(true)
       const taskData = localStorage.getItem("Task_creator");
       if (taskData) {
         setTask(JSON.parse(taskData));
       } else {
         return [];
       }
    } else {
      const taskData = localStorage.getItem("Task_creator");
          if (taskData) {
            setTask(JSON.parse(taskData));
          } else {
            return [];
          }
    }
  };
  return (
    <>
      <div className="container">
        <div className="row g-0 mt-5">
          <div className="col-8 border">
            <h3 className="text-center">Task Creator</h3>

            <div className="card border-0">
              <div className="card-body">
                <div className="container p-5">
                  <form action="" className="" onSubmit={handleSubmit}>
                    <label htmlFor="">
                      Task Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="taskName"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                      required
                    />
                    <label htmlFor="" className="mt-3">
                      Task Description (optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="taskDescription"
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                    />
                    <div className="row mt-4">
                      <div className="col-6 ">
                        <input
                          type="date"
                          className="form-control"
                          name="taskDate"
                          value={taskDate}
                          onChange={(e) => setTaskDate(e.target.value)}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="time"
                          className="form-control"
                          name="taskTime"
                          value={taskTime}
                          onChange={(e) => setTaskTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mt-5">
                      Create Task
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 border">
            <div className="container mt-4">
              <div className="nav">
                <button type="button" className="" onClick={upcoming}>
                  Upcoming
                </button>
                <button className="ms-auto" onClick={handleAll}>
                  All
                </button>
              </div>
              <Scrollbars className="mt-5" style={{ height: "300px" }}>
                  {showTask === true  &&
                    <View task={task} />
                   }

                  {showlast && <View task={newTask} />}
                {/* <>{task.length < 1 && <h1> NO task</h1>}</> */}
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
