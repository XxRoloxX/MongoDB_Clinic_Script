import BuilderOf from '../types/Builder';

export interface JednostkaChorobowa {
    nazwa: string;
    kategoria: string;
    opis: string;
    objawy: string;
    zalecaneLeczenie: string;
   
}
export class JednostkaChorobowaBuilder implements BuilderOf<JednostkaChorobowa> {
    private jednostkaChorobowa = {} as JednostkaChorobowa;

    public setNazwa(nazwa: string): JednostkaChorobowaBuilder {
        this.jednostkaChorobowa.nazwa = nazwa;
        return this;
    }

    public setKategoria(kategoria: string): JednostkaChorobowaBuilder {
        this.jednostkaChorobowa.kategoria = kategoria;
        return this;
    }

    public setOpis(opis: string): JednostkaChorobowaBuilder {
        this.jednostkaChorobowa.opis = opis;
        return this;
    }

    public setObjawy(objawy: string): JednostkaChorobowaBuilder {
        this.jednostkaChorobowa.objawy = objawy;
        return this;
    }

    public setZalecaneLeczenie(zalecaneLeczenie: string): JednostkaChorobowaBuilder {
        this.jednostkaChorobowa.zalecaneLeczenie = zalecaneLeczenie;
        return this;
    }

    public build(): JednostkaChorobowa {
        return this.jednostkaChorobowa;
    }
}