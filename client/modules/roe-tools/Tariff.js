import TariffValue from './TariffValue.js'

export default class Tariff {
    constructor(name, minutes, sms, internet, cloud, price, payday) {
        this.name = new TariffValue(name);
        this.minutes = new TariffValue(minutes, 'min');
        this.sms = new TariffValue(sms);
        this.gbInternet = new TariffValue(internet, 'GB');
        this.gbCloud = new TariffValue(cloud, 'GB');
        this.price = new TariffValue(price, '₽');
        this.nextPayDay = new TariffValue(payday);
    }
}