import Tariff from '../modules/roe-tools/Tariff.js'
import AvailableTariff from "../modules/roe-tools/AvailableTariff";

export const roeStore = {
    state: {
        connectedTariffParameters: {
            name: 'Name',
            minutes: 'Voice line',
            sms: 'SMS',
            gbInternet: 'Mobile internet',
            gbCloud: 'Cloud storage',
            price: 'Price',
            nextPayDay: 'Next payment'
        },

        availableTariffParameters: {
            name: 'Name',
            minutes: 'Voice line',
            sms: 'SMS',
            gbInternet: 'Mobile internet',
            gbCloud: 'Cloud storage',
            price: 'Price',
            button: ''//'Connect'
        },

        connectedTariff: [
            new Tariff('MEGA COOL', 800, 100, 50, 20, 2700, 0, 50, 27, 99, getDate())]
        ,

        connectedAddOns: [
            {
                name: 'SMS pack#4',
                type: 'SMS',
                dimension: 'texts',
                quantity: 1200,
                left: 1000,
                price: 800,
                dateOfDisconnection: getDate(new Date(2091, 12, 2)),
                button: 'Connect',
            },
            {
                name: 'Global',
                type: 'Cloud storage',
                dimension: 'GB',
                quantity: 500,
                left: 102,
                price: 6686,
                dateOfDisconnection: getDate(new Date(2072, 4, 2)),
                button: 'Connect',
            },
            {
                name: 'FreeDOM',
                type: 'Voice line',
                dimension: 'minutes',
                quantity: 10,
                left: 10,
                price: 6,
                dateOfDisconnection: getDate(new Date(2002, 7, 9)),
                button: 'Connect',
            },
            {
                name: 'Plus Ultra',
                type: 'Mobile internet',
                dimension: 'GB',
                quantity: 50,
                left: 0,
                price: 666,
                dateOfDisconnection: getDate(new Date(2022, 5, 18)),
                button: 'Connect',
            },
        ],

        availableTariffs: [
            new AvailableTariff('Adonis', 90, 860, 23, 67, 0, 'Connect'),
            new AvailableTariff('God', 60, 30, 24, 25, 3450, 'Connect'),
            new AvailableTariff('Lovecraft', 98, 820, 25, 75, 3460, 'Connect'),
            new AvailableTariff("Lovecraft's cat", 56, 20, 26, 644, 643, 'Connect'),
            new AvailableTariff('Brandt', 34, 380, 27, 69, 740, 'Connect'),
            new AvailableTariff('Priceless', 854, 82, 28, 75, 0, 'Connect'),
            new AvailableTariff('Demetr', 247, 74, 29, 25, 745, 'Connect'),
            new AvailableTariff('Acolite', 23, 20, 2, 65, 370, 'Connect'),
            new AvailableTariff('Cuclu', 9, 33, 7, 65, 25, 'Connect'),
            new AvailableTariff('Blabla', 70, 50, 213, 65, 830, 'Connect'),
            new AvailableTariff('Lorem', 8, 66, 34, 77, 20, 'Connect'),
            new AvailableTariff('Cratos', 800, 96, 4, 0, 20, 'Connect'),
            new AvailableTariff('Aphrodite', 4, 44, 444, 44, 212, 'Connect'),
        ],

        availablePhones: [
            {
                path: 'modules/roe-tools/nokia.png',
                model: 'BR1CK 2.1',
                price: 99.99,
            },
            {
                path: 'modules/roe-tools/nokia.png',
                model: 'MASASUNG Solid',
                price: 1000,
            },
            {
                path: 'modules/roe-tools/nokia.png',
                model: 'B0ULDER 7000',
                price: 30000,
            },
            {
                path: 'modules/roe-tools/nokia.png',
                model: 'Nokia 765',
                price: 0,
            },
        ],

        availableNavStates: ['Tariffs', 'Packages', 'Cell Phones'],

        availableNav: {
            currentTab: 'Packages',
        }
    },

    getters: {
        roeGetConnectedTariff(context) {
            return context.state.roe.connectedTariff;
        },

        roeGetConnectedPackages(context) {
            return context.state.roe.connectedAddOns;
        },

        roeGetAvailableTariffs(context) {
            return context.state.roe.availableTariffs;
        },

        // roeGetAvailablePackages(context) {
        //     return context.state.roe.availableAddons;
        // }

        roeGetAvailableCurrentNavTab(context) {
            return context.state.roe.availableNav.currentTab;
        }
    },
    actions: {
        roeSetNavTab(context, payload) {
            context.commit('roeSetNavTab', payload);
        },
    },
    mutations: {
        roeSetNavTab(state, payload) {
            state.roe.availableNav.currentTab = payload.newTab;
            return state;
        },
    }
}

function getDate(date = new Date()) {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.');
}