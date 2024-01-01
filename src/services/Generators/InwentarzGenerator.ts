import Inwentarz from '../../models/Inwentarz';
import { InwentarzBuilder } from '../../models/Inwentarz';
import { faker } from '@faker-js/faker';
import { generateRandomPracownikAdministracjiFromRepository } from './RandomDocumentFromRepositoryGenerators/GenerateRandomPracownikAdministracjiFromRepository';
import { getIdsOfDocuments } from './RandomDocumentFromRepositoryGenerators/GenerateRandomEntityFromRepository';
import asyncGenerator from '../../utils/AsyncDocumentGenerator';

const generateSingleInwentarz = async () => {
    const pracownicyAdministracjiIds = await generateRandomPracownikAdministracjiFromRepository(
        faker.number.int({ min: 1, max: 5 }),
    );

    const inwentarzBuilder = new InwentarzBuilder()
        .setNazwa(faker.definitions.commerce.product_name.product[0])
        .setIlosc(faker.number.int({ min: 1, max: 100 }))
        .setCena(faker.number.float({ min: 1, max: 10000, precision: 2 }))
        .setPracownicy(getIdsOfDocuments(pracownicyAdministracjiIds));

    if (Math.random() > 0.5) {
        inwentarzBuilder.setOpis(faker.commerce.productDescription());
    }

    return inwentarzBuilder.build();
};

const generateInwentarz = asyncGenerator<Inwentarz>(generateSingleInwentarz);

export default generateInwentarz;
