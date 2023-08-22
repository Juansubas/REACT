
// Overload

function add(a: number, b: number): number;

function add(a: string, b: string): string;

function add(a: string, b: number): string;

function add(a: any, b: any): any{
    return a + b;
}

const res1 = add(1, 2);
const res2 = add('a', 'b');
const res3 = add('a', 1);