import { RouterProvider} from "react-router-dom";
import { CartContextProvider } from "./components/web/context/Cart.jsx";
import { router } from "./layouts/routes.jsx";
import { useContext, useEffect } from "react";
import { UserContext } from "./components/web/context/User.jsx";



export default function App() {


  let {setUserToken} = useContext(UserContext);

  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      setUserToken(localStorage.getItem('userToken'));
    }
  },[]);

  // const [user,setUser] = useState(null);
  // const saveCurrentUser = ()=>{
  //   const token = localStorage.getItem('userToken');
  //   const decoded = jwtDecode(token);
  //   setUser(decoded);
  // }


  // useEffect(()=>{
  //     if(localStorage.getItem('userToken')){
  //       saveCurrentUser();
  //     }
  // },[])

  

  return (
    
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    
  ) 
}

