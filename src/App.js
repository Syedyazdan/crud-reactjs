import React, { useState } from 'react'
import UserInfo from './component/UserInfo'
import Userdata from './component/Userdata';
import EditUser from './component/EditUser';

const App = () =>{
  const user = [
    
  ]  
  //Using hook
  const [count, setcount] = useState(user);

  //Making function to delete data
  function del(id){
    setcount(count.filter((deleteUser) => deleteUser.id !==id))
  }

  //Making function to increament id

  const adduser = (userx) => {
    userx.id = count.length + 1
    // updating data from hook
    setcount([...count,userx])
  }  

  //Making hook for Edit, we make 2 hooks here
  const [Edit, SetEdit] = useState(false);

  //Making empty object
  const initial = {id:"null", name:" ", email:" "}

  //Making another hook
  const [current, setcurrent] = useState(initial);

  //Making function for edit
  const update = (user) =>{
    SetEdit(true);
    setcurrent({id:user.id, name:user.name, email:user.email});
  }

  //making function for update user

  const updateUser = (id,updated) => {
    SetEdit(false);
    setcount(count.map((user) => (user.id ==id ? updated : user)))
  }

  return (
    <div className='container row'>

      {
        Edit ? (

          <div className='col-md-6'>
      <EditUser SetEdit={SetEdit} 
                current={current}
                updateUser = {updateUser}
      />
      </div>

        ) : (

          <div className='col-md-6'>
      <Userdata  add = {adduser} />
      </div>

        )
      }



      <div className='col-md-6'>
      <UserInfo alluser = {count} allDelete = {del} allUpdate = {update} />
      </div>
 
    </div>
  )
}

export default App
