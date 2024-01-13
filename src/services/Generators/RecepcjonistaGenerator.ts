import { faker } from '@faker-js/faker';
import generatePracownik from './PracownikGenerator';
import syncGenerator from '../../utils/SyncDocumentGenerator';
import { RecepcjonistaBuilder, Recepcjonista } from '../../models/Recepcjonista';

const generateSingleRecepcjonista = () => {
    return new RecepcjonistaBuilder()
        .setNumerTelefonu(faker.number.int({ min: 100000000, max: 999999999 }).toString())
        .setPracownik(generatePracownik())
        .build();
};

const generateRecepjonistas = syncGenerator<Recepcjonista>(generateSingleRecepcjonista);

export default generateRecepjonistas;
