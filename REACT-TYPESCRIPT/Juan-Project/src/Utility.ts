interface Person {
    name?: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}


function loguearDatosDePersonaConNombre(persona: Required<Person>){
    const {name, age} = persona;
    console.log(name, age);
}