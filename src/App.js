import Header from "./Components/Header";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Users from "./Components/users";
import CreateUser from "./Components/createUser";
import EditUser from "./Components/EditUser";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";
import {useEffect,useState} from "react";
import {Context} from "./Context";
import "./Components/components.css";

function App()
{
    const [users,setUsers]= useState([]);
    
    let GetUsers= async()=>{
        const userdata = await fetch("https://611f24619771bf001785c6fb.mockapi.io/user/");
        const data = await userdata.json();
        setUsers(data);
       
    }
useEffect(()=>
    {   
        GetUsers();
        console.log("rendered");
    },[])

    return (
        <>
       <Context.Provider 
       value={{
           users,
           setUsers
       }}
       >
        <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path="/" component={Users} />
        <Route  path="/createuser" component={CreateUser} />
        <Route path="/edituser/:id" component={EditUser} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/edit-profile/:id" component={EditProfile} />
        </Switch>
        </BrowserRouter>
        </Context.Provider>
        
        </>
    );
}
export default App;
