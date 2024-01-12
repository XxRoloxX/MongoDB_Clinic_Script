import BuilderOf from '../types/Builder';

export default interface KartaChorob {
    dataUtworzenia: Date;
    alergie: string[];
    nietolerancje: string[];
}

export class KartaChorobBuilder implements BuilderOf<KartaChorob> {
    private kartaChorob = {} as KartaChorob;

    public setDataUtworzenia(dataUtworzenia: Date): KartaChorobBuilder {
        this.kartaChorob.dataUtworzenia = dataUtworzenia;
        return this;
    }

    public setAlergie(alergie: string[]): KartaChorobBuilder {
        this.kartaChorob.alergie = alergie;
        return this;
    }

    public setNietolerancje(nietolerancje: string[]): KartaChorobBuilder {
        this.kartaChorob.nietolerancje = nietolerancje;
        return this;
    }

    public build(): KartaChorob {
        return this.kartaChorob;
    }
}
