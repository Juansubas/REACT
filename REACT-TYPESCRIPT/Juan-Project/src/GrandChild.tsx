import React from 'react';

type Props = {};

function GrandChild ({}: Props) {

    // ... some code
    const randomFun = () => {
        throw new Error("I'm an error");
    };

    try {
        randomFun();
    }catch(error) {
        if(error instanceof SyntaxError){
            console.error(error.message);
        } else if (error instanceof TypeError) {
            console.error(error.message);
        } else {
            //
        }
    }

    return (
        <div>
        GrandChild
        </div>
    );
}

export default GrandChild;