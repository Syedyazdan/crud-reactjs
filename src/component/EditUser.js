import React, { useState } from 'react'

function EditUser(props) {

    // making hook 

    const [users, setusers] = useState(props.current);

    //making function for taking values from input fields

    const handleinput = (event) =>{
        const{name, value} = event.target
        setusers({...users,[name]:value})
        
    }

    return (
        <div className='container'>

                <h1 className='text-center display-3'>Edit User</h1>

            <form onSubmit={(event) =>{
                event.preventDefault()
                props.updateUser(users.id, users)
            
            }}>
                <label>Name</label>

                <input className='form-control' value={users.name} onChange={handleinput} name='name'></input>

                <label>Email</label>

                <input className='form-control' value={users.email} onChange={handleinput} name='email'></input>

                <button className ="btn btn-primary mt-3">Update Data</button>

            </form>

        </div>
    )
}

export default EditUser
