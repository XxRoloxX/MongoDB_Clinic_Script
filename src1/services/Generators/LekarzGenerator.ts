import { faker } from '@faker-js/faker';
import { Lekarz, LekarzBuilder } from "../../models/Lekarz"
import generatePracownik from "./PracownikGenerator"
import syncGenerator from '../../utils/SyncDocumentGenerator';


const generateSingleLekarz = () => {
    return new LekarzBuilder()
        .setSpecjalizacja(getRandomSpecjalizacja())
        .setNumerLicencji(faker.phone.imei())
        .setPracownik(generatePracownik())
        .build();
}

const specjalizacje: string[] = [
    'Chirurg',
    'Stomatolog',
    'Pediatra',
    'Internista',
    'Ortopeda',
    'Dermatolog',
    'Neurolog',
    'Kardiolog',
    'Ginekolog',
    'Okulista',
    'Urolog',
    'Endokrynolog',
    'Psychiatra',
    'Onkolog',
    'Radiolog',
    'Laryngolog',
    'Gastroenterolog',
    'Nefrolog',
    'Reumatolog',
    'Hematolog',
    'Pulmonolog',
    'Alergolog',
    'Chirurg plastyczny',
    'Chirurg naczyniowy',
    'Neonatolog',
    'Geriatria',
    'Proktolog',
    'Fizjoterapeuta',
    'Patolog',
    'Audiolog',
    'Audiologopeda',
    'Logopeda',
    'Diabetolog',
    'Immunolog',
    'Genetyk',
    'Traumatolog',
    'Mikrobiolog',
    'Epidemiolog',
    'Anestezjolog',
    'Medycyna rodzinna',
    'Medycyna sportowa',
    'Farmaceuta',
    'Chirurg szczękowo-twarzowy',
    'Transplantolog',
    'Toksykolog',
    'Medycyna lotnicza',
    'Medycyna pracy',
    'Medycyna tropikalna',
  ];  

const getRandomSpecjalizacja = () => {    
    return specjalizacje[faker.number.int({ min: 0, max: specjalizacje.length })]
}

const generateLekarzes = syncGenerator<Lekarz>(generateSingleLekarz);

export default generateLekarzes;