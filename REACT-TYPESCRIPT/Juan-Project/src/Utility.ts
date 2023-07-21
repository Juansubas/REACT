async function devolverNumeroAsync(a: number) {

    return a;
}

//
let y: ReturnType<typeof devolverNumeroAsync>;0

// con awaited

let x : Awaited<ReturnType<typeof devolverNumeroAsync>>;
