import { Pracownik } from './Pracownik';
import BuilderOf from '../types/Builder';

export class Recepcjonista {
    constructor(public numerTelefonu: string, public pracownik: Pracownik) {}
}

export class RecepcjonistaBuilder implements BuilderOf<Recepcjonista> {
    private recepcjonista = {} as Recepcjonista;

    public setNumerTelefonu(numerTelefonu: string): RecepcjonistaBuilder {
        this.recepcjonista.numerTelefonu = numerTelefonu;
        return this;
    }

    public setPracownik(pracownik: Pracownik): RecepcjonistaBuilder {
        this.recepcjonista.pracownik = pracownik;
        return this;
    }

    public build(): Recepcjonista {
        return this.recepcjonista;
    }
}
