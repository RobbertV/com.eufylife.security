const Homey = require('homey');

let devices = [];
let _httpService = undefined;

module.exports = class main_driver extends Homey.Driver {
    onPair( socket ) {
        socket.on('list_devices', async function( data, callback ) {
            socket.emit('list_devices', [] );
            
            _httpService = Homey.app.getHttpService();
            
            devices = await onDeviceListRequest();
            if(devices && devices.length) {
                callback( null, devices );
            } else {
                callback( new Error('Something went wrong!') );
            }
        });
    }
}

// ---------------------------------------AUTO COMPLETE HELPERS----------------------------------------------------------
async function onDeviceListRequest() {
    try {
        const devices = await _httpService.listDevices();
        const results = devices.map((r, i) => ({ 
                name: r.device_name, 
                data: {
                    name: r.device_name, 
                    index: i, 
                    id: r.device_id, 
                    station_sn: r.station_sn, 
                    device_sn: r.device_sn 
                }  
            }));
      
        Homey.app.log('Found devices - ', results);
      
        return Promise.resolve( results );
    } catch(e) {
        Homey.app.log(e);
    }
}