import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        if (!inputRef.current.style.width) {
            inputRef.current.style.width = "150px";
        } else if (inputRef.current.style.width) {
            inputRef.current.style = "";
        };
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input ref = {inputRef} type="email" className="form-control" id="email" />
            <button className="btn btn-primary mt-2" onClick={handleClick} >Фокус Input</button>
            <button className="btn btn-secondary mt-2" onClick={handleClickWidth} >Изменить ширину Input</button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
