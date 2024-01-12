import { faker } from '@faker-js/faker';
import { PracownikAdministracji, PracownikAdministracjiBuilder } from '../../models/PracownikAdministracji';
import generatePracownik from './PracownikGenerator';
import syncGenerator from '../../utils/SyncDocumentGenerator';

const generateSinglePracownikAdministracji = () => {
    return new PracownikAdministracjiBuilder()
        .setSpecjalizacja(faker.commerce.department())
        .setPracownik(generatePracownik())
        .build();
};

const generatePracownikasAdministracji = syncGenerator<PracownikAdministracji>(generateSinglePracownikAdministracji);

export default generatePracownikasAdministracji;
