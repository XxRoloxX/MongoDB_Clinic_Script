import { Lekarz } from './Lekarz';
import { Pacjent } from './Pacjent';
import BuilderOf from '../types/Builder';
import mongodb from 'mongodb';

export default interface Recepta {
    dataWystawienia: Date;
    listaLekow: String;
    instrukcje: String;
    uwagi: String;
    idPacjenta: mongodb.ObjectId;
    idLekarza: mongodb.ObjectId;
}

export class ReceptaBuilder implements BuilderOf<Recepta> {
    private recepta = {} as Recepta;

    public setDataWystawienia(dataWystawienia: Date): ReceptaBuilder {
        this.recepta.dataWystawienia = dataWystawienia;
        return this;
    }

    public setListaLekow(listaLekow: string): ReceptaBuilder {
        this.recepta.listaLekow = listaLekow;
        return this;
    }

    public setInstrukcje(instrukcje: String): ReceptaBuilder {
        this.recepta.instrukcje = instrukcje;
        return this;
    }

    public setUwagi(uwagi: String): ReceptaBuilder {
        this.recepta.uwagi = uwagi;
        return this;
    }

    public setIdPacjenta(idPacjent: mongodb.ObjectId): ReceptaBuilder {
        this.recepta.idPacjenta = idPacjent;
        return this;
    }

    public setIdLekarza(idLekarz: mongodb.ObjectId): ReceptaBuilder {
        this.recepta.idLekarza = idLekarz;
        return this;
    }

    public build(): Recepta {
        return this.recepta;
    }
}
