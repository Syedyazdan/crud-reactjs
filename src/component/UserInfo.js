import React from 'react'


function UserInfo(props) {
    return (
        <div className='container'>
            
            <h1 className ='text-center display-3'>User Info</h1>
            <table className ='table mt-5'>
                
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>

                    
                </tr>
                { 
                props.alluser.length > 0 ? (
                props.alluser.map((all)=>(

                
                <tr>
                    <td>{all.id}</td>
                    <td>{all.name}</td>
                    <td>{all.email}</td>
                    <td><button onClick={() => props.allUpdate (all)} className='btn btn-outline-primary'>Edit</button></td>
                    <td><button onClick={() => props.allDelete (all.id)} className='btn btn-outline-danger'>Delete</button></td>
                </tr>
                ))
                ) : (

                    <p className='lead'>No User Information found!</p>
                )
                }       
                   
                
            </table>
        
            
        </div>
    )
}

export default UserInfo
