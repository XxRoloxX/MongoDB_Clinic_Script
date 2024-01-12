import { Lekarz } from './Lekarz';
import { Pacjent } from './Pacjent'
import BuilderOf from '../types/Builder';

export interface Termin {
    status: String;
    dataOd: Date;
    dataDo: Date;
    idPacjenta: string;
    idLekarza: string;
}

export class TerminBuilder implements BuilderOf<Termin> {
    private termin = {} as Termin;

    public setStatus(status: String): TerminBuilder {
        this.termin.status = status;
        return this;
    }

    public setDataOd(dataOd: Date): TerminBuilder {
        this.termin.dataOd = dataOd;
        return this;
    }
    public setDataDo(dataDo: Date): TerminBuilder {
        this.termin.dataDo = dataDo;
        return this;
    }

    public setIdPacjenta(idPacjent: string): TerminBuilder {
        this.termin.idPacjenta = idPacjent;
        return this;
    }

    public setIdLekarza(idLekarz: string): TerminBuilder {
        this.termin.idLekarza = idLekarz;
        return this;
    }

    public build(): Termin {
        return this.termin;
    }
}