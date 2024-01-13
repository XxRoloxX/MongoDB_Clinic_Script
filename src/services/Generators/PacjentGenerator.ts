import KartaChorob from "../../models/KartaChorob";
import { faker } from "@faker-js/faker";
import {KartaChorobBuilder } from "../../models/KartaChorob";
import asyncGenerator from '../../utils/AsyncDocumentGenerator';
import { Pacjent, PacjentBuilder } from "../../models/Pacjent";


const generateSinglePacjent = async () => {
    const pacjentBuilder = new PacjentBuilder()
        .setImie(faker.name.firstName())
        .setNazwisko(faker.name.lastName())
        .setPesel(faker.number.int({ max: 99999999999, min: 100000000 }).toString())
        .setDataUrodzenia(faker.date.between('1950-01-01', '2002-01-01'))
        .setAdresZamieszkania(faker.address.streetAddress())
        .setTelefonPacjenta(faker.number.int({ min: 100000000, max: 999999999 }).toString())
        .setEmailPacjenta(faker.internet.email())
        .setStatusUbezpieczenia(faker.lorem.word())
        .setKartaChorob(await generateSingleKartaChorob());

    return pacjentBuilder.build();
};

const generateSingleKartaChorob = async () => {
    const kartaChorobBuilder = new KartaChorobBuilder()
        .setDataUtworzenia(faker.date.past())
        .setAlergie(getRandomAlergie(faker.number.int({ min:1, max:3 })))
        .setNietolerancje(getRandomNietolerancje(faker.number.int({ min:1, max:3 })));

    return kartaChorobBuilder.build();
};

// const generateRandomStringArray = () => {
//     const arrayLength = faker.number.int({ min: 1, max: 5 });
//     return Array.from({ length: arrayLength }, () => faker.lorem.word());
// };

const nietolerancjePokarmowe: string[] = [
    'Laktoza',
    'Gluten',
    'Orzechy',
    'Jajka',
    'Ryby',
    'Soja',
    'Pszenica',
    'Śladowe ilości mleka',
    'Seler',
    'Skorupiaki',
    'Mączka sojowa',
    'Orzeszki ziemne',
    'Siarczyny',
    'Jogurt',
    'Krewetki',
    'Mleko krowie',
    'Kurczak',
    'Truskawki',
    'Ziemniaki',
];

const alergie: string[] = [
    'Pollen',
    'Koty',
    'Koń',
    'Kurz domowy',
    'Trawy',
    'Roztocza',
    'Jad owadów (pszczoły, osy)',
    'Grzyby',
    'Lateks',
    'Plesń',
    'Orzechy',
    'Mleko',
    'Jajka',
    'Ryby',
    'Soja',
    'Pszenica',
    'Dym tytoniowy',
    'Sierść zwierząt',
    'Środki chemiczne',
    'Kurczak',
    'Wanilia',
    'Lateks',
    'Jedwab',
];


// const getRandomNietolerancja = () => {    
//     return nietolerancjePokarmowe[faker.number.int({ min: 0, max: nietolerancjePokarmowe.length - 1 })];
// }

// const getRandomAlergia = () => {    
//     return alergie[faker.number.int({ min: 0, max: alergie.length - 1 })];
// }

const getRandomNietolerancje = (ilosc: number) => {    
    const wylosowaneNietolerancje: string[] = [];

    for (let i = 0; i < ilosc; i++) {
        const randomNietolerancja = nietolerancjePokarmowe[faker.datatype.number({ min: 0, max: nietolerancjePokarmowe.length - 1 })];
        wylosowaneNietolerancje.push(randomNietolerancja);
    }

    return wylosowaneNietolerancje;
}

const getRandomAlergie = (ilosc: number) => {    
    const wylosowaneAlergie: string[] = [];

    for (let i = 0; i < ilosc; i++) {
        const randomAlergia = alergie[faker.datatype.number({ min: 0, max: alergie.length - 1 })];
        wylosowaneAlergie.push(randomAlergia);
    }

    return wylosowaneAlergie;
}

const generatePacjent = asyncGenerator<Pacjent>(generateSinglePacjent);

export default generatePacjent;