import BuilderOf from '../types/Builder';
import mongodb from 'mongodb';

export default interface Inwentarz {
    nazwa: string;
    ilosc: number;
    cena: number;
    pracownicy: mongodb.ObjectId[];
    opis?: string;
}

export class InwentarzBuilder implements BuilderOf<Inwentarz> {
    private inwentarz = {} as Inwentarz;

    public setNazwa(nazwa: string): InwentarzBuilder {
        this.inwentarz.nazwa = nazwa;
        return this;
    }

    public setIlosc(ilosc: number): InwentarzBuilder {
        this.inwentarz.ilosc = ilosc;
        return this;
    }

    public setCena(cena: number): InwentarzBuilder {
        this.inwentarz.cena = cena;
        return this;
    }

    public setPracownicy(pracownicy: mongodb.ObjectId[]): InwentarzBuilder {
        this.inwentarz.pracownicy = pracownicy;
        return this;
    }
    public setOpis(opis: string): InwentarzBuilder {
        this.inwentarz.opis = opis;
        return this;
    }

    public build(): Inwentarz {
        return this.inwentarz;
    }
}
