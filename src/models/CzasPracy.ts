import BuilderOf from '../types/Builder';
import { Wyplata } from './Wyplata';

export interface CzasPracy {
    miesiacUzupelnienia: Date;
    przepracowaneGodziny: number;
    dataUzupelnienia: Date;
    wyplata?: Wyplata;
}

export class CzasPracyBuilder implements BuilderOf<CzasPracy> {
    private czasPracy = {} as CzasPracy;

    public setMiesiacUzupelnienia(miesiacUzupelnienia: Date): CzasPracyBuilder {
        this.czasPracy.miesiacUzupelnienia = miesiacUzupelnienia;
        return this;
    }

    public setPrzepracowaneGodziny(przepracowaneGodziny: number): CzasPracyBuilder {
        this.czasPracy.przepracowaneGodziny = przepracowaneGodziny;
        return this;
    }

    public setDataUzupelnienia(dataUzupelnienia: Date): CzasPracyBuilder {
        this.czasPracy.dataUzupelnienia = dataUzupelnienia;
        return this;
    }

    public setWyplata(wyplata: Wyplata): CzasPracyBuilder {
        this.czasPracy.wyplata = wyplata;
        return this;
    }

    public build(): CzasPracy {
        return this.czasPracy;
    }
}
