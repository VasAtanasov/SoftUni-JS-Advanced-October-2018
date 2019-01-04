function realEstateAgency() {
    class Offer {
        constructor(rent, type, commission) {
            this.rent = rent;
            this.type = type;
            this.comission = commission;
            this.element = this.openOffer();
        }

        get commissionCost() {
            return this.rent * (this.comission / 100);
        }

        get rentalPrice() {
            return this.rent + this.commissionCost;
        }

        openOffer() {
            return $('<div>').addClass('apartment')
                .attr('name', this.type)
                .append($('<p>').text(`Rent: ${this.rent}`))
                .append($('<p>').text(`Type: ${this.type}`))
                .append($('<p>').text(`Commission: ${this.comission}`));
        }

        rentOffer(family) {
            return $('<div>').addClass('apartment').css('border', '2px solid red')
                .append($('<p>').text(family))
                .append($('<p>').text('live here now'))
                .append($('<button>').text('MoveOut'));
        }

        moveIn(family) {
            this.element = this.rentOffer(family);
        }
    }

    class Agency {
        constructor(container) {
            this.offers = [];
            this._profit = 0;
            this.container = $(container);
        }

        register(offer) {
            this.offers.push(offer);
        }

        get profit() {
            return this._profit;
        }

        set profit(value) {
            this._profit += (value * 2);
            $('div#roof h1').text(`Agency profit: ${this.profit} lv.`);
        }

        lend(budget, type, name) {
            let found = false;
            for (let i = 0; i < this.offers.length; i++) {
                const offer = this.offers[i];
                if (offer.type === type && offer.rentalPrice <= budget) {
                    offer.moveIn(name);
                    offer.element.find('button').on('click', () => {
                        this.offers.splice(this.offers.indexOf(offer), 1);
                        this.refresh();
                        notification.text(`They had found cockroaches in ${name}\'s apartment`);
                    });
                    this.profit += (offer.commissionCost);
                    notification.text('Enjoy your new home! :))');
                    this.refresh();
                    found = true;
                    break;
                }
            }
            if (!found) {
                notification.text('We were unable to find you a home, so sorry :(')
            }
        }

        refresh() {
            this.container.empty();
            this.offers.forEach((offer) => {
                this.container.append(offer.element);
            });
        }
    }

    let agency = new Agency('div#building');

    let regOfferBtn = $('button[name="regOffer"]');
    let findOfferBtn = $('button[name="findOffer"]');
    let notification = $('div#notifications').find('p#message');


    regOfferBtn.on('click', function () {
        let apartmentRent = $('input[name="apartmentRent"]');
        let apartmentType = $('input[name="apartmentType"]');
        let agencyCommission = $('input[name="agencyCommission"]');

        let rent = Number(apartmentRent.val());
        let type = apartmentType.val();
        let commission = Number(agencyCommission.val());

        if (!rent || !type || !commission || rent <= 0 || commission < 0 || commission > 100 || type.includes(":")) {
            notification.text('Your offer registration went wrong, try again.');
        } else {
            notification.text('Your offer was created successfully.');
            let offer = new Offer(rent, type, commission);
            agency.register(offer);
            agency.refresh();
        }
        apartmentRent.val('');
        apartmentType.val('');
        agencyCommission.val('');
    });

    findOfferBtn.on('click', function () {
        let familyBudget = $('input[name="familyBudget"]');
        let familyApartmentType = $('input[name="familyApartmentType"]');
        let familyName = $('input[name="familyName"]');

        let budget = Number(familyBudget.val());
        let type = familyApartmentType.val();
        let name = familyName.val();

        if (budget && type && name && budget > 0) {
            agency.lend(budget, type, name);
        }

        familyBudget.val('');
        familyApartmentType.val('');
        familyName.val('');
    })
}