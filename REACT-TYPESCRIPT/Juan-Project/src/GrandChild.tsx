import React from 'react';

type Props = {};

function GrandChild ({}: Props) {

    // ... some code

    throw new Error("I'm an error");

    return (
        <div>
        GrandChild
        </div>
    );
}

export default GrandChild;