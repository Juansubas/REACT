interface Person {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}

type PersonNameLess = Omit<Person, "name">;


