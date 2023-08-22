async function test() {
    
    function threeSecondPromise(): Promise<string>{
        console.log('Inicial:', new Date().getSeconds());
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('hola');
            }, 3000);
        });
    }

    const x = await threeSecondPromise();
    const y = await threeSecondPromise();
    const z = await threeSecondPromise();

    const[x1, y1, z1] = await Promise.all([x,y,z]).then(l=> {
        console.log("Termina", new Date().getSeconds());
        return l;   
    });

    console.log(x1, y1, z1);
}

test();