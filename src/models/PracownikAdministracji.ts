import { Pracownik } from '../types/Pracownik';
import BuilderOf from '../types/Builder';

export class PracownikAdministracji {
    constructor(public numerTelefonu: string, public pracownik: Pracownik) {}
}

export class PracownikAdministracjiBuilder implements BuilderOf<PracownikAdministracji> {
    private pracownikAdministracji = {} as PracownikAdministracji;

    public setNumerTelefonu(numerTelefonu: string): PracownikAdministracjiBuilder {
        this.pracownikAdministracji.numerTelefonu = numerTelefonu;
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
