const Homey = require('homey');
const mainDriver = require('../main-driver');

module.exports = class driver_INDOOR_CAM_PAN_TILT extends mainDriver {
    onInit() {        
        Homey.app.log('[Device] - init driver_INDOOR_CAM_PAN_TILT');
    }
}