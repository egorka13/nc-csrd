import TariffValue from './TariffValue.js'

export default class Tariff {
    constructor(name, minutes, minutesLeft, sms, smsLeft, internet, internetLeft,
                cloud, cloudLeft, price, payday) {
        this.name = new TariffValue(name);
        this.nameLeft = new TariffValue('');
        this.minutesLeft = new TariffValue(minutesLeft, '/');
        this.minutes = new TariffValue(minutes, 'min');
        this.smsLeft = new TariffValue(smsLeft, '/');
        this.sms = new TariffValue(sms);
        this.gbInternetLeft = new TariffValue(internetLeft, '/');
        this.gbInternet = new TariffValue(internet, 'GB');
        this.gbCloudLeft = new TariffValue(cloudLeft, '/');
        this.gbCloud = new TariffValue(cloud, 'GB');
        this.price = new TariffValue(price, '₽');
        this.priceLeft = new TariffValue('');
        this.nextPayDay = new TariffValue(payday);
        this.nextPayDayLeft = new TariffValue('');
    }
}