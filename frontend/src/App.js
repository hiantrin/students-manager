import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Table from "./components/Table";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("")
  const [allStudents, setAllStudents] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleSearch = (event) => {
    
    console.log(search)
    event.preventDefault();
  }

  console.log(allStudents)

  useEffect(async () => {

    await axios.get("http://localhost:4000/students/getAll").then((data) => {
      setAllStudents(data.data)
    }).catch((err) => {
        console.log(err)
    })

  }, [])

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} setAllStudents={setAllStudents} />
      <div className="app-container">
        <div className="app">
          <h1 className="head-title">Students list manager</h1>
          <div className="lists-container">
            <div className="search-add">
              <form onSubmit={handleSearch}>
                <input type='text' placeholder='Search..' className='input-search' value={search} onChange={(e) => setSearch(e.target.value)}/>
              </form>
              <button onClick={() => setShowModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
                </svg>
              </button>
            </div>
            <div className="table-container">
              {allStudents.length === 0 ? <p>There is no student infos yet</p> : 
                <Table allStudents={allStudents} />
                
              }
            </div>
            
          </div>
        </div>
      </div>
    </>
    
  );
}

export default App;
