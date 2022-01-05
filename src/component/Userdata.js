import React, { useState } from 'react'

function Userdata(props) {
    //makin object to empty input fields

    const initial = {
        id : 'null',
        name: " ",
        email: " "
    }

    // making hook for taking data from input fields

    const [users, setusers] = useState(initial);

    //making function for taking values from input fields

    const handleinput = (event) =>{
        const{name, value} = event.target
        setusers({...users,[name]:value})
        console.log(users);
    }

    return (
        <div className='container'>
            <h1 className='text-center display-3'>User Data</h1>
            <form className='form-group mt-5' onSubmit={(event) =>{
                event.preventDefault()
                props.add(users)
                setusers(initial)
            }}>

                <label>Name</label>

                <input className='form-control' value={users.name} onChange={handleinput} name='name' placeholder='Name'></input>

                <label>Email</label>

                <input className='form-control' value={users.email} onChange={handleinput} name='email' placeholder='Email'></input>

                
                <button className='btn btn-success mt-4'>Save Data</button>

            </form>

            
            
        </div>
    )
}

export default Userdata
