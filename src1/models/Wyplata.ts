import BuilderOf from '../types/Builder';

export type StatusWyplaty = 'w trakcie' | 'wyplacona' | 'anulowana';

export interface Wyplata {
    kwota?: number;
    status: StatusWyplaty;
    dataWyplaty?: Date;
}

export class WyplataBuilder implements BuilderOf<Wyplata> {
    private wyplata = {} as Wyplata;

    public setKwota(kwota: number): WyplataBuilder {
        this.wyplata.kwota = kwota;
        return this;
    }

    public setStatus(status: StatusWyplaty): WyplataBuilder {
        this.wyplata.status = status;
        return this;
    }

    public setDataWyplaty(dataWyplaty: Date): WyplataBuilder {
        this.wyplata.dataWyplaty = dataWyplaty;
        return this;
    }

    public build(): Wyplata {
        return this.wyplata;
    }
}
