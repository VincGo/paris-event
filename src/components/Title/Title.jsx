import React from 'react';

const Title = ({title}) => {
    return (
        <>
            <h1 className={"title"}>{title}</h1>
            <div className={"title-decoration"} />
        </>
    );
};

export default Title;