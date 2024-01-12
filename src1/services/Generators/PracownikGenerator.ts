import { PracownikBuilder } from '../../models/Pracownik';
import { faker } from '@faker-js/faker';
import _ from 'lodash';
import { CzasPracy, CzasPracyBuilder } from '../../models/CzasPracy';
import { StatusWyplaty, WyplataBuilder } from '../../models/Wyplata';
import syncGenerator from '../../utils/SyncDocumentGenerator';

const generatePracownik = () => {
    return new PracownikBuilder()
        .setImie(faker.person.firstName())
        .setNazwisko(faker.person.lastName())
        .setPesel(faker.number.int({ max: 99999999999, min: 100000000 }).toString())
        .setStanowisko(faker.person.jobTitle())
        .setStawkaGodzinowa(faker.number.float({ min: 10, max: 100, precision: 2 }))
        .setDataUrodzenia(faker.date.past({ years: 50 }))
        .setDataZatrudnienia(faker.date.past({ years: 10 }))
        .setCzasPracy(generateMultipleCzasPracy())
        .build();
};

const generateCzasPracy = () => {
    const czasPracyBuilder = new CzasPracyBuilder()
        .setMiesiacUzupelnienia(faker.date.past({ years: 10 }))
        .setPrzepracowaneGodziny(faker.number.float({ min: 0, max: 160, precision: 2 }))
        .setDataUzupelnienia(faker.date.past({ years: 1 }));

    if (faker.datatype.boolean()) {
        czasPracyBuilder.setWyplata(generateWyplata());
    }

    return czasPracyBuilder.build();
};

const generateMultipleCzasPracy = () =>
    syncGenerator<CzasPracy>(generateCzasPracy)(faker.number.int({ min: 1, max: 5 }));

const generateWyplata = () => {
    const status = _.sample(['w trakcie', 'wyplacona', 'anulowana']) as unknown as StatusWyplaty;

    const wyplataBuilder = new WyplataBuilder().setStatus(status);

    if (status !== 'wyplacona') {
        return wyplataBuilder.build();
    }

    return wyplataBuilder
        .setDataWyplaty(faker.date.past({ years: 1 }))
        .setKwota(faker.number.float({ min: 0, max: 10000, precision: 2 }))
        .build();
};

export default generatePracownik;
