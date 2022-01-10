import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../../components/common/divider";

const UseRefExercise = () => {
    const blockRef = useRef();
    const styleRef = useRef();
    const [styleBlock, setStyleBlock] = useState({
        height: 40,
        width: 60,
        color: "white"
    });

    const changeStyle = {
        height: 150,
        width: 80,
        color: "white"
    };

    const handleClick = () => {
        setStyleBlock(styleBlock => changeStyle);
        blockRef.current.textContent = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <Divider />
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={styleBlock}
                ref={styleRef}
            >
                <small ref={blockRef}>Блок</small>
            </div>
            <button className="btn btn-secondary mt-2" onClick={handleClick} >Измененить свойства объекта</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
