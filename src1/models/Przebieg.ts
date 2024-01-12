import BuilderOf from '../types/Builder';

export default interface Przebieg {
    podjeteDzialania: string;
    zalecenia: string;
    notatki: string;
}

export class PrzebiegBuilder implements BuilderOf<Przebieg> {
    private przebieg = {} as Przebieg;

    public setPodjeteDzialania(podjeteDzialania: string): PrzebiegBuilder {
        this.przebieg.podjeteDzialania = podjeteDzialania;
        return this;
    }

    public setZalecenia(zalecenia: string): PrzebiegBuilder {
        this.przebieg.zalecenia = zalecenia;
        return this;
    }

    public setNotatki(notatki: string): PrzebiegBuilder {
        this.przebieg.notatki = notatki;
        return this;
    }

    public build(): Przebieg {
        return this.przebieg;
    }
}
