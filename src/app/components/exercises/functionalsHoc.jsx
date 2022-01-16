import React from "react";
import CardWrapper from "../common/Card";

const functionsHoc = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const handleLogOut = () => {
        localStorage.removeItem("user");
        alert("Вы вышли");
    };
    const handleLogIn = () => {
        localStorage.setItem("user", "new User");
        console.log(isAuth);
        alert("Вы вошли");
    };
    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogIn={handleLogIn}
                onLogOut={handleLogOut}
                {...props}
            />
        </CardWrapper>
    );
};

export default functionsHoc;
