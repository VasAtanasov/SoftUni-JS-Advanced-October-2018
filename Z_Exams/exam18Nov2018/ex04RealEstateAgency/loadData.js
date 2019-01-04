function seed() {
    let apartmentRent = $('input[name="apartmentRent"]');
    let apartmentType = $('input[name="apartmentType"]');
    let agencyCommission = $('input[name="agencyCommission"]');

    let familyBudget = $('input[name="familyBudget"]');
    let familyApartmentType = $('input[name="familyApartmentType"]');
    let familyName = $('input[name="familyName"]');

    let regOfferBtn = $('button[name="regOffer"]');

    let apartments = [
        {
            apartmentRent: '700',
            apartmentType: 'two room apartment',
            agencyCommission: '50'
        },
        {
            apartmentRent: '650',
            apartmentType: 'single room apartment',
            agencyCommission: '10'
        },
        {
            apartmentRent: '1500',
            apartmentType: 'Maisonette',
            agencyCommission: '25'
        },
        {
            apartmentRent: '700',
            apartmentType: 'two room apartment',
            agencyCommission: '50'
        },
    ];

    apartments.forEach((apartment) => {
        apartmentRent.val(apartment.apartmentRent);
        apartmentType.val(apartment.apartmentType);
        agencyCommission.val(apartment.agencyCommission);
        regOfferBtn.click();
    });

    familyBudget.val('5000');
    familyApartmentType.val('Maisonette');
    familyName.val('Peshovi');
}