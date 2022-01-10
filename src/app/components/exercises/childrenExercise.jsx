import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";

const ChildrenExercise = () => {
    const ListComponents = ({ children }) => {
        const listCListComponentsArr = React.Children.toArray(children);
        console.log(listCListComponentsArr);
        return (
            <ol>
                {React.Children.map(listCListComponentsArr.sort(), (child) => {
                    return <li>{React.cloneElement(child)}</li>;
                })}
            </ol>
        );
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component />
            <Component />
            <Component />

            <Divider />
            <ListComponents>
                <Component />
                <Component />
                <Component />
            </ListComponents>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

ChildrenExercise.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ChildrenExercise;
