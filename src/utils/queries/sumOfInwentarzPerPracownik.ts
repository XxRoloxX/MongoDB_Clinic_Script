export const sumOfInwentarzPerPracownik = [
    {
        $unwind: '$pracownicy',
    },
    {
        $lookup: {
            from: 'pracownicyAdministracji',
            localField: 'pracownicy',
            foreignField: '_id',
            as: 'owner',
        },
    },
    {
        $addFields: {
            onlyOwner: { $first: '$owner' },
        },
    },
    {
        $group: {
            _id: '$onlyOwner._id',
            imie: { $first: '$onlyOwner.pracownik.imie' },
            nazwisko: { $first: '$onlyOwner.pracownik.nazwisko' },
            maxInwentarzValue: { $max: '$cena' },
        },
    },
];

export default sumOfInwentarzPerPracownik;
