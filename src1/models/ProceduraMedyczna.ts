import BuilderOf from "../types/Builder";

export interface ProceduraMedyczna {
    nazwa: string;
    kategoria: string;
    opis: string;
    zalecenia: string;
}

export class ProceduraMedycznaBuilder implements BuilderOf<ProceduraMedyczna> {
    private proceduraMedyczna = {} as ProceduraMedyczna;

    public setNazwa(nazwa: string): ProceduraMedycznaBuilder {
        this.proceduraMedyczna.nazwa = nazwa;
        return this;
    }

    public setKategoria(kategoria: string): ProceduraMedycznaBuilder {
        this.proceduraMedyczna.kategoria = kategoria;
        return this;
    }

    public setOpis(opis: string): ProceduraMedycznaBuilder {
        this.proceduraMedyczna.opis = opis;
        return this;
    }

    public setZalecenia(zalecenia: string): ProceduraMedycznaBuilder {
        this.proceduraMedyczna.zalecenia = zalecenia;
        return this;
    }

    

    public build(): ProceduraMedyczna {
        return this.proceduraMedyczna;
    }
}