import { faker } from "@faker-js/faker";
import { JednostkaChorobowa, JednostkaChorobowaBuilder } from "../../models/JednostkaChorobowa";
import { getIdsOfDocuments } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomEntityFromRepository";
import asyncGenerator from '../../utils/AsyncDocumentGenerator';

const generateSingleJednostkaChorobowa = async () => {
    const jednostkaChorobowaBuilder = new JednostkaChorobowaBuilder()
        .setNazwa(getRandomNazwa())
        .setKategoria(getKategoria())
        .setOpis(faker.lorem.sentence())
        .setObjawy(faker.lorem.sentence())
        .setZalecaneLeczenie(faker.lorem.sentence());

    return jednostkaChorobowaBuilder.build();
};

const jednostkiChorobowe: string[] = [
    'Rak trzustki',
    'Cukrzyca typu 2',
    'Choroba Alzheimera',
    'Astma',
    'Czerwienica',
    'Choroba Parkinsona',
    'Ropień',
    'Miażdżyca',
    'Cysta jajnika',
    'Choroba Hashimoto',
    'Zapalenie płuc',
    'Celiakia',
    'Czerwona gorączka',
    'Ostra niewydolność nerek',
    'Rwa kulszowa',
    'Choroba Crohna',
    'Osteoporoza',
    'Zawał serca',
    'Czerniak',
    'Zespół jelita drażliwego',
  ];

  const kategorieJednostekChorobowych: string[] = [
    'Nowotwory',
    'Choroby metaboliczne',
    'Choroby neurologiczne',
    'Choroby układu oddechowego',
    'Choroby układu krążenia',
    'Choroby autoimmunologiczne',
    'Choroby zakaźne',
    'Choroby układu pokarmowego',
    'Choroby ortopedyczne',
    'Choroby dermatologiczne',
  ];

const getRandomNazwa = () => {    
    return jednostkiChorobowe[faker.number.int({ min: 0, max: jednostkiChorobowe.length - 1 })]
}

const getKategoria = () => {    
    return kategorieJednostekChorobowych[faker.number.int({ min: 0, max: kategorieJednostekChorobowych.length - 1})]
}

const generateJednostkaChorobowa = asyncGenerator<JednostkaChorobowa>(generateSingleJednostkaChorobowa);

export default generateJednostkaChorobowa;
