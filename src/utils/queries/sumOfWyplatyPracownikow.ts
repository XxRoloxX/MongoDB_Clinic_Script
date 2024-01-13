export const sumOfWyplatyPracownika = [
    {
        $unwind: '$pracownik.czasPracy',
    },
    // {
    //     $match: {
    //         'pracownik.czasPracy.wyplata.kwota': { $exists: true },
    //     },
    // },
    {
        $group: {
            _id: '$_id',
            imie: { $first: '$pracownik.imie' },
            nazwisko: { $first: '$pracownik.nazwisko' },
            sumaWyplat: {
                $sum: '$pracownik.czasPracy.wyplata.kwota',
            },
        },
    },
];

export default sumOfWyplatyPracownika;
