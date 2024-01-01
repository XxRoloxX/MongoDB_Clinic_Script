import { faker } from '@faker-js/faker';
import { PracownikAdministracji, PracownikAdministracjiBuilder } from '../../models/PracownikAdministracji';
import generatePracownik from './PracownikGenerator';
import syncGenerator from '../../utils/SyncDocumentGenerator';

const generateSinglePracownikAdministracji = () => {
    return new PracownikAdministracjiBuilder()
        .setNumerTelefonu(faker.phone.number())
        .setPracownik(generatePracownik())
        .build();
};

const generatePracownicyAdministracji = syncGenerator<PracownikAdministracji>(generateSinglePracownikAdministracji);

export default generatePracownicyAdministracji;
