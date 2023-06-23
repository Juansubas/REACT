type Props = {
    multiplyAge: () => void;
};

const Child = ({ multiplyAge }: Props ) =>{
    console.log('Child re-render');
    return(
        <button onClick={multiplyAge}>Multiply Age</button>
    );
}

export default Child;