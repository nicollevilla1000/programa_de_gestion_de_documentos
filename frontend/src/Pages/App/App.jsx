//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

// CSS
import './App.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Context
import { AppContext, AppProvider } from "../../Context";

//Screens
import { LoginScreen } from "../Screens/LoginScreen";
import { RegisterScreen } from "../Screens/RegisterScreen";
import { UploadScreen } from "../Screens/UploadScreen";
import { UsersScreen } from "../Screens/UsersScreen";

//Components
import { MainContainer } from "../components/MainContainer";
import { Footer } from "../components/Footer";
import { AccesibilityCard } from "../components/AccesibilityCard";
import { GovNavbar } from "../components/GovNavbars";
import { ConfirmationModal } from "../components/ConfirmationModal";
import { ToastContainer } from "react-toastify";
import { LoadingCard } from "../components/LoadingCard";

//Utils
import { scrollToValue } from "../../utils/scrollToValue";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        scrollToValue();
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {

    const context = React.useContext(AppContext);
    const { auth } = context;

    let routes = useRoutes([
        {path: "/home", element: <UploadScreen/>},

        {path: "/*", element: <Navigate replace to={"/home"}/>},

        {path: "/users", element: <UsersScreen/>},

        {path: "/register", element: <RegisterScreen/>},

        {path: "/login", element: !auth ? <LoginScreen/> : <Navigate replace to={"/home"}/>},
    ]);
    
    return routes;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <GovNavbar/>
                    <AccesibilityCard/>
                    <LoadingCard/>
                    <ConfirmationModal/>

                    <MainContainer>
                        <AppRoutes/>
                    </MainContainer>

                    <ToastContainer/>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

