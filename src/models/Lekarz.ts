import BuilderOf from "../types/Builder";
import { Pracownik } from "./Pracownik";

export interface Lekarz {
    numerLicencji: string,
    specjalizacja: string,
    pracownik: Pracownik
}

export class LekarzBuilder implements BuilderOf<Lekarz> {
    private lekarz = {} as Lekarz;

    public setNumerLicencji(numerLicencji: string): LekarzBuilder {
        this.lekarz.numerLicencji = numerLicencji;
        return this;
    }

    public setSpecjalizacja(specjalizacja: string): LekarzBuilder {
        this.lekarz.specjalizacja = specjalizacja;
        return this;
    }

    public setPracownik(pracownik: Pracownik): LekarzBuilder {
        this.lekarz.pracownik = pracownik;
        return this;
    }

    public build(): Lekarz {
        return this.lekarz;
    }
}