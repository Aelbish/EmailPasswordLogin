import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // //if we didn't use useEffect to define the function, it would go to infinite loop since setIsLoggedIn will re-run our App component again and again.
  // //useEffect is used to define functions which we want to run when the dependencies change
  // //Here when the app is first loaded the function inside useEffect will run since the dependency at first is empty but now it is not empty
  // //When we execute setIsLoggedIn type of function the component here App() will reexecute, but the function inside useEffect will not run since the dependency i.e. login hasn't changed
  // //The function inside useEffect ensures that we are logged in even if we reload the page
  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);

  return (
    // All the nested components and their children will now have access to AuthContext, we can pass objects and functions as well using the AuthContext.provider
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
