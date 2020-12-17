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
            new Tariff('MEGA COOL', 800, 100, 50, 20, 2700, 0, 50, 27, 99, getDate(new Date(2011, 1, 2)))
        ],

        connectedAddOns: [
            {
                name: 'SMS pack#4',
                type: 'SMS',
                dimension: 'texts',
                quantity: 1200,
                left: 1000,
                price: 800,
                dateOfDisconnection: getDate(new Date(2021, 1, 2)),
                button: 'Connect',
            },
            {
                name: 'Global',
                type: 'Cloud storage',
                dimension: 'GB',
                quantity: 500,
                left: 102,
                price: 6686,
                dateOfDisconnection: getDate(new Date(2021, 1, 2)),
                button: 'Connect',
            },
            {
                name: 'FreeDOM',
                type: 'Voice line',
                dimension: 'minutes',
                quantity: 10,
                left: 10,
                price: 6,
                dateOfDisconnection: getDate(new Date(2021, 1, 2)),
                button: 'Connect',
            },
            {
                name: 'Plus Ultra',
                type: 'Mobile internet',
                dimension: 'GB',
                quantity: 50,
                left: 0,
                price: 666,
                dateOfDisconnection: getDate(new Date(2021, 1, 2)),
                button: 'Connect',
            },
        ],

        availableTariffs: [
            new AvailableTariff('Adonis', 900, 150, 50, 15, 800, 'Connect'),
            new AvailableTariff('God', 600, 200, 10, 5, 300, 'Connect'),
            new AvailableTariff('Lovecraft', 400, 820, 25, 75, 900, 'Connect'),
            new AvailableTariff("Lovecraft's cat", 500, 50, 25, 60, 600, 'Connect'),
            new AvailableTariff('Brandt', 34, 380, 25, 60, 7, 'Connect'),
            new AvailableTariff('Priceless', 0, 0, 0, 0, 0, 'Connect'),
            new AvailableTariff('Demetr', 500, 50, 50, 50, 1500, 'Connect'),
            new AvailableTariff('Acolite', 300, 150, 5, 65, 370, 'Connect'),
            new AvailableTariff('Cuclu', 100, 400, 15, 65, 25, 'Connect'),
            new AvailableTariff('Blabla', 800, 50, 25, 65, 830, 'Connect'),
            new AvailableTariff('Lorem', 200, 600, 30, 35, 20, 'Connect'),
            new AvailableTariff('Cratos', 400, 300, 40, 0, 200, 'Connect'),
            new AvailableTariff('Aphrodite', 400, 50, 0, 25, 200, 'Connect'),
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

        orders: [
            {
                ID: 'h49gok2kf',
                Name: 'Plus Ultra',
                Status: 'WAITING FOR PROVISIONING',
                Type: 'Package, connect',
                ['Mobile Internet']: '50 GB',
                Price: '800 ₽',
                Created: getDate(),
            },
            {
                ID: 'jf92a32gid3',
                Name: 'MEGA COOL',
                Status: 'COMPLETE',
                Type: 'Tariff, connect',
                ['Voice Line']: '800 min',
                SMS: '50 texts',
                ['Mobile Internet']: '2700 GB',
                ['Cloud Storage']: '50 GB',
                Price: '99 ₽',
                Created: getDate(new Date( 2020, 10, 10)),
            },
            {
                ID: 'wrfl42374fuy',
                Name: "Lovecraft's cat",
                Status: 'COMPLETE',
                Type: 'Tariff, disconnect',
                ['Voice Line']: '500 min',
                SMS: '50 texts',
                ['Mobile Internet']: '25 GB',
                ['Cloud Storage']: '60 GB',
                Price: '600 ₽',
                Created: getDate(new Date( 2020, 10, 10)),
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
        },

        roeGetOrders(context) {
            return context.state.roe.orders;
        },
    },
    actions: {
        roeSetNavTab(context, payload) {
            context.commit('roeSetNavTab', payload);
        },

        roeAddOrder(context, payload) {
            context.commit('roeAddOrder', payload);
        }
    },
    mutations: {
        roeSetNavTab(state, payload) {
            state.roe.availableNav.currentTab = payload.newTab;
            return state;
        },

        roeAddOrder(state, payload) {
            state.roe.orders.unshift(payload);
            return state;
        }
    }
}

function getDate(date = new Date()) {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.');
}