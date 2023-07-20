interface Person {
    name: number,
    age: number,
    hobby: string,
    country: string,
    city: string,
    surname: string,
}

//Indicamos primero los tipos para las llaves y 
//luego los tipos para los valores
type PersonRecord = Record<string, string>;
type PersonRecordTwo = Record<'name' | 'age', string>;
type PersonRecordThree = Record<'name' | 'age', string | number>;

const nuevoJuanito : PersonRecord = {
    name: 'xd',
    age: 'xd',
    hobby: 'xd',
    country: 'xd',
    city: 'xd',
    surname: 'xd',
}

const nuevoJuanitoss : PersonRecordTwo = {
    name: 'xd',
    age: 'xd',
}

const nuevoJuanitos : PersonRecordThree = {
    name: 1,
    age: 'xd',
}