import {faker } from "@faker-js/faker";

export function __itemFactory(){
    return {
        title: faker.word.noun(),
        url: faker.internet.avatar(),
        description: faker.lorem.paragraph(),
        amount: faker.datatype.number()
    }
}