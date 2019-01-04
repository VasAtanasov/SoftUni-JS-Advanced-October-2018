function realEstateAgency() {
    const INPUT_RENT = $('input[name="apartmentRent"]');
    const INPUT_TYPE = $('input[name="apartmentType"]');
    const INPUT_COMMISSION = $('input[name="agencyCommission"]');
    const INPUT_BUDGET = $('input[name="familyBudget"]');
    const INPUT_TYPE_SEARCHED = $('input[name="familyApartmentType"]');
    const INPUT_FAMILY = $('input[name="familyName"]');
    const MESSAGE_CONTAINER = $('#message');
    const REG_OFFER = $('button[name="regOffer"]');
    const FIND_OFFER = $('button[name="findOffer"]');
    const PROFIT_TEXT = $('#roof').find('h1').eq(0);


    let agency = function () {
        const BUILDING = $('#building');
        let profit = 0;

        function registerOffer(offer) {
            offer.isSold = false;
            let div = $('<div>').addClass('apartment');
            div
                .append($('<p>').text(`Rent: ${offer.apartmentRent}`))
                .append($('<p>').text(`Type: ${offer.apartmentType}`))
                .append($('<p>').text(`Commission: ${offer.agencyCommission}`));
            div.get(0).offer = offer;
            BUILDING.append(div);
        }

        function updateProfit(commission) {
            profit += commission;
            PROFIT_TEXT.text(`Agency profit: ${profit} lv.`);
        }

        function searchOffer(searchParams) {
            let div = BUILDING.find('.apartment').toArray().find(function (element) {
                let offer = element.offer;
                let isType = offer.apartmentType === searchParams.familyApartmentType;
                let commission = +offer.apartmentRent * (offer.agencyCommission / 100);
                let isBudget = +searchParams.familyBudget >= +offer.apartmentRent + commission;
                return isBudget && isType && !offer.isSold;
            });

            if (!div) {
                return false;
            }

            let offer = div.offer;
            updateProfit(+offer.agencyCommission * 2);
            offer.isSold = true;
            const BTN_MOVE_OUT = $('<button>').text('MoveOut')
                .on('click', function () {
                    $(this).remove();
                    MESSAGE_CONTAINER.text(`They had found cockroaches in ${searchParams.familyName}'s apartment`)
                }.bind(div));


            $(div).empty();
            $(div).css('border', '2px solid red')
                .append($('<p>').text(`${searchParams.familyName}`))
                .append($('<p>').text('live here now'))
                .append(BTN_MOVE_OUT);
            return true;
        }

        return {
            registerOffer,
            searchOffer
        }

    }();

    FIND_OFFER.on('click', function () {
        let familyBudget = INPUT_BUDGET.val();
        let familyApartmentType = INPUT_TYPE_SEARCHED.val();
        let familyName = INPUT_FAMILY.val();

        if (!isValidSearch(familyBudget, familyApartmentType, familyName)) {
            return;
        }

        if (!agency.searchOffer({familyBudget, familyApartmentType, familyName})) {
            MESSAGE_CONTAINER.text('We were unable to find you a home, so sorry :(');
            return;
        }
        MESSAGE_CONTAINER.text('Enjoy your new home! :))');

        resetFields([INPUT_BUDGET, INPUT_TYPE_SEARCHED, INPUT_FAMILY]);
    });

    REG_OFFER.on('click', function () {
        let apartmentRent = INPUT_RENT.val();
        let apartmentType = INPUT_TYPE.val();
        let agencyCommission = INPUT_COMMISSION.val();

        if (!isValidOffer(apartmentRent, apartmentType, agencyCommission)) {
            MESSAGE_CONTAINER.text('Your offer registration went wrong, try again.');
            return;
        }

        agency.registerOffer({apartmentRent, apartmentType, agencyCommission});

        MESSAGE_CONTAINER.text('Your offer was created successfully.');
        resetFields([INPUT_RENT, INPUT_TYPE, INPUT_COMMISSION]);
    });

    function isValidSearch(familyBudget, familyApartmentType, familyName) {
        if (isNaN(familyBudget) || +familyBudget <= 0) {
            return false;
        }
        if (!familyApartmentType.trim()) {
            return false;
        }
        return familyName.trim();
    }

    function isValidOffer(apartmentRent, apartmentType, agencyCommission) {
        if (isNaN(apartmentRent) || isNaN(agencyCommission)) {
            return false;
        } else if (+apartmentRent <= 0 || +agencyCommission < 0 || +agencyCommission > 100) {
            return false;
        } else return !(!apartmentType.trim() || apartmentType.indexOf(':') >= 0);
    }

    function resetFields(inputs) {
        inputs.forEach((input) => input.val(''));
    }
}