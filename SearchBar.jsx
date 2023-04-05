 import { useState } from 'react'
 

 export const SearchBar = () => {

  const [newTask, setNewTask] = useState("");
      
     const handleChange = (event) => {
      const task = event.target.value
      setNewTask(task)
     }  
      const handleClick = () => {
        setNewTask("");
      }
    return (
    <>
     <div className='type'> 
      <input className='text' type="text"  value={newTask}  onChange={handleChange}/>
       <button className='hit' onClick={handleClick}>X</button>
     </div>
     </>
   )
 }
 
 export default SearchBar;