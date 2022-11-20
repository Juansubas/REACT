const person = {
    name: 'ryan',
    address: {
        city: 'london'
    },
    location: {}
}

//Al poner ?. le decimos que ponga undefined sino existe y si existe que acceda.
console.log(person.location?.city);