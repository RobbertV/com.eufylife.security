const Homey = require('homey');

module.exports = class driver_EUFYCAM_2C extends mainDriver {
    onInit() {        
        Homey.app.log('[Device] - init driver_EUFYCAM_2C');
    }
}