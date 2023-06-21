import { createContext, useContext, useState} from 'react';

export interface IEdadContext {
    edad: number;
    setEdad: React.Dispatch<React.SetStateAction<number>>;
}

export const EdadContext = createContext<IEdadContext>({} as IEdadContext);

export function EdadProvider({ children }: any) {

    const [edad, setEdad] = useState<number>(26);

    const sharedData : IEdadContext = {
        edad,
        setEdad
    };

    return (<EdadContext.Provider value={sharedData}>{children}</EdadContext.Provider>);
}

export const useEdad = () => {
    const edadContext = useContext(EdadContext);
    if(!edadContext){
        throw new Error('useEdad debe estar dentro de EdadProvider');
    }

    return edadContext;
};