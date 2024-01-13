import BuilderOf from '../types/Builder';
import { JednostkaChorobowa } from './JednostkaChorobowa';
import KartaChorob from './KartaChorob';
import  Przebieg  from './Przebieg';

export default interface Choroba {
    dataRozpoczecia: Date;
    dataZakonczenia: Date;
    zalecaneLeczenie: string;
    status: string;
    przebieg?: Przebieg[];
    idJednostkiChorobowej: string;
    idPacjenta: string;
}

export class ChorobaBuilder implements BuilderOf<Choroba> {
    private choroba = {} as Choroba;

    public setDataRozpoczecia(dataRozpoczecia: Date): ChorobaBuilder {
        this.choroba.dataRozpoczecia = dataRozpoczecia;
        return this;
    }

    public setDataZakonczenia(dataZakonczenia: Date): ChorobaBuilder {
        this.choroba.dataZakonczenia = dataZakonczenia;
        return this;
    }

    public setZalecaneLeczenie(zalecaneLeczenie: string): ChorobaBuilder {
        this.choroba.zalecaneLeczenie = zalecaneLeczenie;
        return this;
    }

    public setStatus(status: string): ChorobaBuilder {
        this.choroba.status = status;
        return this;
    }
    public setPrzebieg(przebieg: Przebieg[]): ChorobaBuilder {
        this.choroba.przebieg = przebieg;
        return this;
    }

    public setIdJednostkiChorobowej(idJednostkiChorobowej: string): ChorobaBuilder {
        this.choroba.idJednostkiChorobowej = idJednostkiChorobowej;
        return this;
    }

    public setIdPacjenta(idPacjenta: string): ChorobaBuilder {
        this.choroba.idPacjenta = idPacjenta;
        return this;
    }

    public build(): Choroba {
        return this.choroba;
    }
}
