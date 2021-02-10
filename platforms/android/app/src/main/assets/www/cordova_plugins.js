cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-bluetooth-printer.BluetoothPrinter",
      "file": "plugins/cordova-plugin-bluetooth-printer/www/BluetoothPrinter.js",
      "pluginId": "cordova-plugin-bluetooth-printer",
      "clobbers": [
        "BTPrinter"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-bluetooth-printer": "0.0.1-dev",
    "cordova-plugin-whitelist": "1.3.4"
  };
});