import React from 'react';

type Props<C extends React.ElementType> = {
    variant: 'black' | 'white' | 'red';
    children: React.ReactNode;
    as?: C;
} & React.ComponentPropsWithoutRef<C>;

function Polymorphic<C extends React.ElementType>({ 
    variant, 
    children, 
    as, 
    ...rest
} : Props<C>) {
    //...

    const Componente = as || 'div';
    return <Componente {...rest} style={{background: variant}}>
        {children}</Componente>;
}

export default Polymorphic;

