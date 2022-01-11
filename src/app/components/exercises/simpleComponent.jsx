import React from "react";
import withPropsStyles from "../examples/hoc/withPropsStyles";

const SimpleComponent = () => {
    const withLoginComponent = ({ onLogIn, onLogOut }) => {
        const isAuth = localStorage.getItem("user");
        return (
            <>
                {isAuth ? (
                    <button className="btn btn-dark" onClick={onLogOut}>
                        Выйти из системы
                    </button>
                ) : (
                    <button className="btn btn-primary" onClick={onLogIn}>
                        Войти
                    </button>
                )}
            </>
        );
    };

    const WithPropsStyles = withPropsStyles(withLoginComponent);

    const handleLogOut = () => {
        localStorage.removeItem("user");
        alert("Вы вышли");
    };
    const handleLogIn = () => {
        localStorage.setItem("user", "new User");
        alert("Вы вошли");
    };
    return <WithPropsStyles onLogIn={handleLogIn} onLogOut={handleLogOut} />;
};

export default SimpleComponent;
