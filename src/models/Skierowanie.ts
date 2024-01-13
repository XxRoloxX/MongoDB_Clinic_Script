import { Lekarz } from './Lekarz';
import { ProceduraMedyczna } from './ProceduraMedyczna';
import { Pacjent } from './Pacjent';
import BuilderOf from '../types/Builder';
import mongodb from 'mongodb';

export interface Skierowanie {
    dataWystawienia: Date;
    idPacjenta: mongodb.ObjectId;
    idLekarza: mongodb.ObjectId;
    idProceduryMedycznej: mongodb.ObjectId;
}

export class SkierowanieBuilder implements BuilderOf<Skierowanie> {
    private skierowanie = {} as Skierowanie;

    public setDataWystawienia(dataWystawienia: Date): SkierowanieBuilder {
        this.skierowanie.dataWystawienia = dataWystawienia;
        return this;
    }

    public setIdPacjenta(idPacjent: mongodb.ObjectId): SkierowanieBuilder {
        this.skierowanie.idPacjenta = idPacjent;
        return this;
    }

    public setIdLekarza(idLekarz: mongodb.ObjectId): SkierowanieBuilder {
        this.skierowanie.idLekarza = idLekarz;
        return this;
    }

    public setIdProceduryMedycznej(idProceduraMedyczna: mongodb.ObjectId): SkierowanieBuilder {
        this.skierowanie.idProceduryMedycznej = idProceduraMedyczna;
        return this;
    }

    public build(): Skierowanie {
        return this.skierowanie;
    }
}
