import BuilderOf from "./Builder";

export interface Pracownik {
  readonly imie: string;
  readonly nazwisko: string;
  readonly pesel: string;
  readonly stanowisko: string;
  readonly stawkaGodzinowa: number;
  readonly dataUrodzenia: Date;
  readonly dataZatrudnienia: Date;
}

export class PracownikBuilder implements BuilderOf<Pracownik> {
  private imie: string;
  private nazwisko: string;
  private pesel: string;
  private stanowisko: string;
  private stawkaGodzinowa: number;
  private dataUrodzenia: Date;
  private dataZatrudnienia: Date;

  constructor() {}

  public setImie(imie: string): PracownikBuilder {
    this.imie = imie;
    return this;
  }

  public setNazwisko(nazwisko: string): PracownikBuilder {
    this.nazwisko = nazwisko;
    return this;
  }

  public setPesel(pesel: string): PracownikBuilder {
    this.pesel = pesel;
    return this;
  }

  public setStanowisko(stanowisko: string): PracownikBuilder {
    this.stanowisko = stanowisko;
    return this;
  }

  public setStawkaGodzinowa(stawkaGodzinowa: number): PracownikBuilder {
    this.stawkaGodzinowa = stawkaGodzinowa;
    return this;
  }

  public setDataUrodzenia(dataUrodzenia: Date): PracownikBuilder {
    this.dataUrodzenia = dataUrodzenia;
    return this;
  }

  public setDataZatrudnienia(dataZatrudnienia: Date): PracownikBuilder {
    this.dataZatrudnienia = dataZatrudnienia;
    return this;
  }

  public build(): Pracownik {
    return {
      imie: this.imie,
      nazwisko: this.nazwisko,
      pesel: this.pesel,
      stanowisko: this.stanowisko,
      stawkaGodzinowa: this.stawkaGodzinowa,
      dataUrodzenia: this.dataUrodzenia,
      dataZatrudnienia: this.dataZatrudnienia,
    };
  }
}
