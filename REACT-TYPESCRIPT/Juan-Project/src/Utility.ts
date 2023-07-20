interface Person {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}

function devolverNumero(a: number){
    if (a < 0){
        return null;
    }

    if (a > 10) {
        return 'hola';
    }

    return a;
}




let x: ReturnType<typeof devolverNumero>;

