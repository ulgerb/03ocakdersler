import { useState } from "react";
import ClassCom from "./components/ClassCom";
import Effect from "./components/Effect";
import User from "./components/User";



function App() {

  const [users, setUsers] = useState([
    {
      id:0,
      fname:"Ali",
      username:"ali111",
      password:"111",
      color:"red"
    },
    {
      id:1,
      fname:"Veli",
      username:"veli222",
      password:"222",
      color:"green"
    },
    {
      id:2,
      fname:"Mahmut",
      username:"mahmut333",
      password:"333",
      color:"yellow"
    },
    {
      id:3,
      fname:"Ayşe",
      username:"ayse444",
      password:"444",
      color:"pink"
    },
    {
      id:4,
      fname:"Fatma",
      "username":"fatma555",
      password:"555",
      color:"purple"
    },
  ])

  const colorChange = ( id,e) => {
    console.log(id);
    setUsers(
      users.map(user => (user.id === id ? { ...user, color: e.target.value } : user))
    )
  }
  
  return (
    <>
      {
        users.map((user)=>{
          return (
            <div className="container mt-3">
              <User 
                id={user.id}
                key={user.id}
                colorChange={colorChange} 
                fname={user["fname"]} 
                username={user["username"]} 
                color={user["color"]}
              />
            </div>
          )
        })
      }

      <hr /><hr />
      <Effect/>
      <ClassCom/>
    </>
  );
}

export default App;
