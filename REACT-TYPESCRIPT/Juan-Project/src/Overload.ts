function concatenate<T, P>(a: T[], b: P[]): (T |P)[];
function concatenate<T>(a: T[], b: T[]): T[];
function concatenate(a:string, b:string):string;

function concatenate(a: string | any[], b: string | any[]) {
    if(typeof a === 'string' && typeof b === 'string'){
        return a + b;
    } else if (Array.isArray(a) && Array.isArray(b)){
        return [...a, ...b];
    }

    return undefined;
}

const result = concatenate('Hello', 'World');
const result2= concatenate<number>([1, 2, 3], [4, 5, 6]);
const result5= concatenate([1, 2, 3], ['a', 'b', 'c']);

