import BuilderOf from "../types/Builder";

export interface Kontrakt {
    dataPoczatkowa: Date;
    dataKoncowa: Date;
    wartoscKontraktu: number;
    opis: string;
    idPracownikaAdministracji: string;
}

export class KontraktBuilder implements BuilderOf<Kontrakt> {
    private kontrakt = {} as Kontrakt;

    public setDataPoczatkowa(dataPoczatkowa: Date): KontraktBuilder {
        this.kontrakt.dataPoczatkowa = dataPoczatkowa;
        return this;
    }

    public setDataKoncowa(dataKoncowa: Date): KontraktBuilder {
        this.kontrakt.dataKoncowa = dataKoncowa;
        return this;
    }

    public setWartoscKontraktu(wartoscKontraktu: number): KontraktBuilder {
        this.kontrakt.wartoscKontraktu = wartoscKontraktu;
        return this;
    }

    public setOpis(opis: string): KontraktBuilder {
        this.kontrakt.opis = opis;
        return this;
    }

    public setIdPracownikaAdministracji(idPracownikaAdministracji: string): KontraktBuilder {
        this.kontrakt.idPracownikaAdministracji = idPracownikaAdministracji;
        return this;
    }

    public build(): Kontrakt {
        return this.kontrakt;
    }
}