async function devolverNumeroAsync(a: number) {

    return a;
}

//
let y: ReturnType<typeof devolverNumeroAsync>;0

// con awaited

let x : Parameters<typeof devolverNumeroAsync>

type Preferences = string;

const preferences: Preferences = localStorage.getItem('preferences')!;

//Desaparece cualquier tipo null y asi limpiamos el valor quedando solo string por ejemplo.
type CleanPreferences = NonNullable<Preferences>


const cleanPreferences: CleanPreferences = preferences;


interface PersonaInmutable {
    name: string;
    age: number;
}

const juanitoInmutable: Readonly<PersonaInmutable> = {
    name: 'Juan',
    age: 20,
}

//juanitoInmutable.age = 21;