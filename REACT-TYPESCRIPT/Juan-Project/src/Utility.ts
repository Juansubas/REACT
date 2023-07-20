interface Person {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}







type PersonNameLess = Pick<Person, "name">;


function loguearDatos(persona: Person){
    const {name, age} = persona;
    console.log(name, age);
}


