import { Pracownik } from './Pracownik';
import BuilderOf from '../types/Builder';

export class PracownikAdministracji {
    constructor(public specjalizacja: string, public pracownik: Pracownik) {}
}

export class PracownikAdministracjiBuilder implements BuilderOf<PracownikAdministracji> {
    private pracownikAdministracji = {} as PracownikAdministracji;

    public setSpecjalizacja(specjalizacja: string): PracownikAdministracjiBuilder {
        this.pracownikAdministracji.specjalizacja = specjalizacja;
        return this;
    }

    public setPracownik(pracownik: Pracownik): PracownikAdministracjiBuilder {
        this.pracownikAdministracji.pracownik = pracownik;
        return this;
    }

    public build(): PracownikAdministracji {
        return this.pracownikAdministracji;
    }
}
