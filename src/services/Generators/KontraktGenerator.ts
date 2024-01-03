import { faker } from "@faker-js/faker"
import { generateRandomPracownikAdministracjiFromRepository } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomPracownikAdministracjiFromRepository"
import { Kontrakt, KontraktBuilder } from "../../models/Kontrakt";
import { getIdsOfDocuments } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomEntityFromRepository";
import asyncGenerator from '../../utils/AsyncDocumentGenerator';


const generateSingleKontrakt = async () => {
    const pracownikAdministracji = await generateRandomPracownikAdministracjiFromRepository(1);

    const kontraktBuilder = new KontraktBuilder()
        .setDataPoczatkowa(faker.date.past())
        .setDataKoncowa(faker.date.future())
        .setWartoscKontraktu(faker.number.float({ min: 20000, max: 500000, precision: 3}))
        .setIdPracownikaAdministracji(getIdsOfDocuments(pracownikAdministracji)[0]);

    faker.datatype.boolean() && kontraktBuilder.setOpis(faker.commerce.productDescription());

    return kontraktBuilder.build();
};

const generateKontrakt = asyncGenerator<Kontrakt>(generateSingleKontrakt);

export default generateKontrakt;
