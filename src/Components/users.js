import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
//import axios from "axios";
function Users(){
     let context = useContext(Context);
  //to get the userid to delete
    let deleteid;
    let getdeleteid=(id)=>{
         deleteid = id;
    }
   // to delete user in api
   let deleteuser= async()=>{
         //const {data} = await axios.delete(`https://611f26469771bf001785c730.mockapi.io/users/${deleteid}`);
         const userdata = await fetch(`https://611f24619771bf001785c6fb.mockapi.io/user/${deleteid}`,{method:"DELETE"});
         const data = await userdata.json();
         console.log(data);
         let tempusers = context.users.filter((x)=>x.id !== deleteid );
         context.setUsers(tempusers);
   } 

    return(
        <>
        <div className="container-fluid">
           {
               context.users.map((user)=>{
                   return    <div className="card mx-auto usercard my-5" key={user.id} style={{width:"80%"}}>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-6">
                       
                        </div>
                      
                        
                        </div>
                        <h2 className="text-unmuted">{user.name}</h2>
                        <p><b>Email</b><br/>{user.email}</p>
                        <p><b>Location</b><br/>{user.location}</p>
                        <p><b>Phone No</b><br/>{user.phone}</p>

                        <div className="mt-2 row" >
                            <Link to={`edituser/${user.id}`} className="btn col-md-3 mt-2 col-lg-2 btn-primary mx-2">Edit User</Link>
                            <Link to={`profile/${user.id}`} className="btn  col-lg-2 mt-2 col-md-3 btn-dark  mx-2">Veiw Profile</Link>
                            <Link to={`edit-profile/${user.id}`} className="btn col-md-3 mt-2 col-lg-2 btn-warning mx-2">Edit Profile</Link>
                            <button className="btn btn-danger  col-lg-2 col-md-3 mt-2 mx-2" data-toggle="modal" data-target="#mymodal" onClick={()=>getdeleteid(user.id)} >Delete</button>
                    </div>   
                    </div>
                   </div> 
               })
           } 

           <div className="modal  fade" id="mymodal">
               <div className="modal-dialog modal-lg">
                   <div className="modal-content">
               <div className="modal-body"> surely,You want to delete User?</div>
               <div className="modal-footer">
                   <button className="btn btn-danger" data-dismiss="modal" onClick={deleteuser} >Delete</button>
                   <button className="btn btn-primary" data-dismiss="modal" >Cancel</button>
               </div>
               </div>
               </div>
           </div>
          </div>
        </>
    );
}
export default Users;
