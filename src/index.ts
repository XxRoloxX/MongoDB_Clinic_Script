import generatePracownicyAdministracji from './services/Generators/PracownicyAdministracjiGenerator';
import { connectToDatabase } from './services/Database.service';
import { collections } from './services/Database.service';
import generateInwentarz from './services/Generators/InwentarzGenerator';

const main = async () => {
    await connectToDatabase();

    await collections.pracownicyAdministracji.insertMany(generatePracownicyAdministracji(10000));

    const inwentarz = await collections.inwentarz.insertMany(await generateInwentarz(5000));

    //   console.log(pracownicyAdministracji);
    console.log(inwentarz);
};

main();
