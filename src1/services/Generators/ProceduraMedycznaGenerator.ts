import {ProceduraMedyczna} from '../../models/ProceduraMedyczna';
import { ProceduraMedycznaBuilder } from '../../models/ProceduraMedyczna';
import { faker } from '@faker-js/faker';
import { getIdsOfDocuments } from './RandomDocumentFromRepositoryGenerators/GenerateRandomEntityFromRepository';
import asyncGenerator from '../../utils/AsyncDocumentGenerator';

const generateSingleProceduraMedyczna = async () => {
    const proceduraMedycznaBuilder = new ProceduraMedycznaBuilder()
        .setNazwa(getRandomNazwa())
        .setKategoria(getKategoria())
        .setOpis(faker.lorem.sentence())
        .setZalecenia(faker.lorem.sentence());

    

    return proceduraMedycznaBuilder.build();
};

const proceduryMedyczne: string[] = [
    'Badanie krwi',
    'RTG',
    'Tomografia komputerowa',
    'Rezonans magnetyczny',
    'EKG',
    'Gastroskopia',
    'Kolonoskopia',
    'Angiografia',
    'Bronchoskopia',
    'Artroskopia',
    'Mammografia',
    'Elektroencefalografia (EEG)',
    'Endoskopia',
    'Biopsja',
    'Laparoskopia',
    'Histeroskopia',
    'Elektrokardiogram (EKG)',
    'Spirometria',
    'Holter EKG',
    'Holter ciśnienia',
    'Prześwietlenie zębów',
    'Fluorografia',
    'Rezonans magnetyczny głowy',
    'Prześwietlenie klatki piersiowej',
    'Prześwietlenie jamy brzusznej',
    'Badanie USG',
    'Tomografia PET',
    'Cholangiopankreatografia rezonansu magnetycznego (MRCP)',
    'Colonografia rezonansu magnetycznego (MRC)',
    'Elektromiografia (EMG)',
    'Bronchografia',
    'Laryngoskopia',
    'Densytometria kości',
    'Artrografia',
    'Sigmoidoskopia',
    'Cystoskopia',
    'Rezonans magnetyczny stawów',
    'Prześwietlenie kręgosłupa',
    'Badanie okulistyczne',
    'Widzenie komputerowe',
    'Korekcja wzroku laserem',
    'Badanie audiometryczne',
    'Elektroretinografia (ERG)',
    'Badanie genetyczne',
    'Badanie immunologiczne',
    'Badanie mikrobiologiczne',
    'Badanie cytologiczne',
  ];

const kategorieProcedur: string[] = [
    'Diagnostyka obrazowa',
    'Badania laboratoryjne',
    'Badania kardiologiczne',
    'Endoskopia',
    'Ginekologia',
    'Ortopedia',
    'Stomatologia',
  ];

const getRandomNazwa = () => {    
    return proceduryMedyczne[faker.number.int({ min: 0, max: proceduryMedyczne.length - 1 })]
}

const getKategoria = () => {    
    return kategorieProcedur[faker.number.int({ min: 0, max: kategorieProcedur.length - 1})]
}

const generateProceduraMedyczna = asyncGenerator<ProceduraMedyczna>(generateSingleProceduraMedyczna);

export default generateProceduraMedyczna;