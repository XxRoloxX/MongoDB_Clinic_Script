import BuilderOf from '../types/Builder';

import { CzasPracy } from './CzasPracy';

export interface Pracownik {
    imie: string;
    nazwisko: string;
    pesel: string;
    stanowisko: string;
    stawkaGodzinowa: number;
    dataUrodzenia: Date;
    numerKonta?: string;
    dataZatrudnienia: Date;
    czasPracy?: CzasPracy[];
}

export class PracownikBuilder implements BuilderOf<Pracownik> {
    private pracownik = {} as Pracownik;

    public setImie(imie: string): PracownikBuilder {
        this.pracownik.imie = imie;
        return this;
    }

    public setNazwisko(nazwisko: string): PracownikBuilder {
        this.pracownik.nazwisko = nazwisko;
        return this;
    }

    public setPesel(pesel: string): PracownikBuilder {
        this.pracownik.pesel = pesel;
        return this;
    }

    public setStanowisko(stanowisko: string): PracownikBuilder {
        this.pracownik.stanowisko = stanowisko;
        return this;
    }

    public setStawkaGodzinowa(stawkaGodzinowa: number): PracownikBuilder {
        this.pracownik.stawkaGodzinowa = stawkaGodzinowa;
        return this;
    }

    public setDataUrodzenia(dataUrodzenia: Date): PracownikBuilder {
        this.pracownik.dataUrodzenia = dataUrodzenia;
        return this;
    }

    public setDataZatrudnienia(dataZatrudnienia: Date): PracownikBuilder {
        this.pracownik.dataZatrudnienia = dataZatrudnienia;
        return this;
    }

    public setCzasPracy(czasPracy: CzasPracy[]): PracownikBuilder {
        this.pracownik.czasPracy = czasPracy;
        return this;
    }
    public setNumerKonta(numerKonta: string): PracownikBuilder {
        this.pracownik.numerKonta = numerKonta;
        return this;
    }

    public build(): Pracownik {
        return this.pracownik;
    }
}
