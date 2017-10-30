var mqtt = require('mqtt');
var mqttClient = mqtt.connect('mqtt://127.0.0.1');

var WebSocket = require('ws');
var wssClient = new WebSocket('ws://127.0.0.1:2000/usexp/legacy/devices/live');


mqttClient.on('connect', function () {
    console.log('MQTT is connected to the server.');
    mqttClient.subscribe('#');
})

mqttClient.on('message', function (topic, message) {
    // message is Buffer
    wssClient.send(message.toString());
});

wssClient.on('open', function open() {
    console.log('wssClient is open now.');
});
