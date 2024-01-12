import { Lekarz } from './Lekarz';
import { ProceduraMedyczna } from './ProceduraMedyczna'
import { Pacjent } from './Pacjent'
import BuilderOf from '../types/Builder';

export interface Skierowanie {
    dataWystawienia: Date;
    idPacjenta: string;
    idLekarza: string;
    idProceduryMedycznej: string;
}

export class SkierowanieBuilder implements BuilderOf<Skierowanie> {
    private skierowanie = {} as Skierowanie;

    public setDataWystawienia(dataWystawienia: Date): SkierowanieBuilder {
        this.skierowanie.dataWystawienia = dataWystawienia;
        return this;
    }

    public setIdPacjenta(idPacjent: string): SkierowanieBuilder {
        this.skierowanie.idPacjenta = idPacjent;
        return this;
    }

    public setIdLekarza(idLekarz: string): SkierowanieBuilder {
        this.skierowanie.idLekarza = idLekarz;
        return this;
    }

    public setIdProceduryMedycznej(idProceduraMedyczna: string): SkierowanieBuilder {
        this.skierowanie.idProceduryMedycznej = idProceduraMedyczna;
        return this;
    }

    public build(): Skierowanie {
        return this.skierowanie;
    }
}