import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    children: ReactNode;
    id: string;
};

function Modal({ children, id }: ModalProps) {
    const modalRoot = document.querySelector(`#${id}`) as HTMLElement;
    modalRoot.style.position = 'relative';

    const elRef = useRef<HTMLDivElement | null>(null);
    if (!elRef.current) elRef.current = document.createElement('div');

    useEffect(() =>{
    const el = elRef.current;
    modalRoot.appendChild(el);
    return() => {
        modalRoot.removeChild(el);
    };
}, []);

     return createPortal(
        <div
            style={{
                position: 'absolute',
                display: 'grid',
                top:0,
                left:0,
                placeItems: 'center',
                height: '50hv',
                width: '50hv',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(0,0,0)',
                zIndex: 99,
            }}
        >
            {children}
        </div>,
        elRef.current
     );
}

export default Modal