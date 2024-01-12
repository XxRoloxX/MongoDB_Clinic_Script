import BuilderOf from '../types/Builder';
import { CzasPracy } from './CzasPracy';
import KartaChorob from './KartaChorob';

export interface Pacjent {
    imie: string;
    nazwisko: string;
    pesel: string;
    dataUrodzenia: Date;
    adresZamieszkania: string;
    telefonPacjenta: string;
    emailPacjenta: string;
    statusUbezpieczenia: string;
    kartaChorob: KartaChorob;
}

export class PacjentBuilder implements BuilderOf<Pacjent> {
    private pacjent = {} as Pacjent;

    public setImie(imie: string): PacjentBuilder {
        this.pacjent.imie = imie;
        return this;
    }

    public setNazwisko(nazwisko: string): PacjentBuilder {
        this.pacjent.nazwisko = nazwisko;
        return this;
    }

    public setPesel(pesel: string): PacjentBuilder {
        this.pacjent.pesel = pesel;
        return this;
    }

    public setDataUrodzenia(dataUrodzenia: Date): PacjentBuilder {
        this.pacjent.dataUrodzenia = dataUrodzenia;
        return this;
    }

    public setAdresZamieszkania(adresZamieszkania: string): PacjentBuilder {
        this.pacjent.adresZamieszkania = adresZamieszkania;
        return this;
    }

    public setTelefonPacjenta(telefonPacjenta: string): PacjentBuilder {
        this.pacjent.telefonPacjenta = telefonPacjenta;
        return this;
    }

    public setEmailPacjenta(emailPacjenta: string): PacjentBuilder {
        this.pacjent.emailPacjenta = emailPacjenta;
        return this;
    }

    public setStatusUbezpieczenia(statusUbezpieczenia: string): PacjentBuilder {
        this.pacjent.statusUbezpieczenia = statusUbezpieczenia;
        return this;
    }
    public setKartaChorob(kartaChorob: KartaChorob): PacjentBuilder {
        this.pacjent.kartaChorob = kartaChorob;
        return this;
    }

    public build(): Pacjent {
        return this.pacjent;
    }
}
