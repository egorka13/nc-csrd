import Tariff from '../modules/roe-tools/Tariff.js'

export const roeStore = {
    //TODO 'tariff-value class'

    state: {
        tariffParameters: {
            name: 'Name',
            minutes: 'Voice line',
            sms: 'SMS',
            gbInternet: 'Mobile internet',
            gbCloud: 'Cloud storage',
            price: 'Price',
            nextPayDay: 'Next payment'
        },

        connectedTariff: [
            new Tariff('MEGA COOL', 800, 100, 20, 50, 2700, getDate())]
        ,

        connectedAddOns: [
            {
                name: 'SMS pack#4',
                type: 'SMS',
                dimension: 'texts',
                quantity: 1200,
                left: 1000,
                price: 800,
                dateOfDisconnection: getDate(new Date(2091, 12, 2))
            },
            {
                name: 'Plus Ultra',
                type: 'Mobile internet',
                dimension: 'GB',
                quantity: 50,
                left: 12,
                price: 666,
                dateOfDisconnection: getDate(new Date(2022, 5, 18))
            },
            {
                name: 'Gobal',
                type: 'Cloud storage',
                dimension: 'GB',
                quantity: 500,
                left: 102,
                price: 6686,
                dateOfDisconnection: getDate(new Date(2072, 4, 2))
            },
            {
                name: 'FreeDOM',
                type: 'Voice line',
                dimension: 'minutes',
                quantity: 10,
                left: 10,
                price: 6,
                dateOfDisconnection: getDate(new Date(2002, 7, 9))
            }
        ],

        availableTariffs: [
            new Tariff('Adonis', 90, 860, 23, 67, 0, getDate()),
            new Tariff('God', 60, 30, 24, 25, 3450, getDate()),
            new Tariff('Lovecraft', 98, 820, 25, 75, 3460, getDate()),
            new Tariff("Lovecraft's cat", 56, 20, 26, 644, 643, getDate()),
            new Tariff('Brandt', 34, 380, 27, 69, 740, getDate()),
            new Tariff('Priceless', 854, 82, 28, 75, 0, getDate()),
            new Tariff('Demetr', 247, 74, 29, 25, 745, getDate()),
            new Tariff('Acolite', 23, 20, 2, 65, 370, getDate()),
            new Tariff('Cuclu', 9, 33, 7, 65, 25, getDate()),
            new Tariff('Blabla', 70, 50, 213, 65, 830, getDate()),
            new Tariff('Lorem', 8, 66, 34, 77, 20, getDate()),
            new Tariff('Cratos', 800, 96, 4, 0, 20, getDate()),
            new Tariff('Aphrodite', 4, 44, 444, 44, 4444, getDate()),
        ]
    },

    getters: {
        getConnectedTariff(context, payload) {
            return context.state.roe.connectedTariff;
        }
    },
    actions: {},
    mutations: {}
}

function getDate(date = new Date()) {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.');
}