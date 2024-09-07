import React from "react";
import axios from "axios"

import { scrollToValue } from "../../../utils/scrollToValue";
import { AppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { handleNotifications } from "../../../utils/handleNotifications";
import { NotFoundCard } from "../NotFoundCard";

const AuthWrapper = ({children}) => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    React.useEffect(() => {
        scrollToValue();
        
        axios.get(`${context.apiUri}/user/`)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    context.setAuth(true);
                    context.setName(data.name);
                } else {
                    context.setAuth(false);
                }
            })
            .catch(err => {
                context.setAuth(false);
                handleNotifications("error", err)
                navigate("/home");
            })
    }, []);

    return (
        // <IsAuthWrapper>
            children
        // </IsAuthWrapper>
    );
}

const IsAuthWrapper = ({children, notFound=false}) => {
    const context = React.useContext(AppContext);

    const { auth } = context || false;


    if (auth) {
        return (children);
    }

    if (notFound) {
        return <NotFoundCard/>
    }

    return;
}

export { AuthWrapper, IsAuthWrapper }