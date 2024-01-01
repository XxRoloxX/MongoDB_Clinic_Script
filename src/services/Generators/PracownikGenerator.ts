import { PracownikBuilder } from '../../types/Pracownik';
import { faker } from '@faker-js/faker';

const generatePracownik = () => {
    return new PracownikBuilder()
        .setImie(faker.person.firstName())
        .setNazwisko(faker.person.lastName())
        .setPesel(faker.number.int({ max: 99999999999, min: 100000000 }).toString())
        .setStanowisko(faker.person.jobTitle())
        .setStawkaGodzinowa(faker.number.float({ min: 10, max: 100, precision: 2 }))
        .setDataUrodzenia(faker.date.past({ years: 50 }))
        .setDataZatrudnienia(faker.date.past({ years: 10 }))
        .build();
};
export default generatePracownik;
