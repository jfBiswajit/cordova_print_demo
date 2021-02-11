cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-bluetooth-printer.BluetoothPrinter",
      "file": "plugins/cordova-plugin-bluetooth-printer/www/BluetoothPrinter.js",
      "pluginId": "cordova-plugin-bluetooth-printer",
      "clobbers": [
        "BTPrinter"
      ]
    },
    {
      "id": "cordova-plugin-btprinter.BluetoothPrinter",
      "file": "plugins/cordova-plugin-btprinter/www/BluetoothPrinter.js",
      "pluginId": "cordova-plugin-btprinter",
      "clobbers": [
        "BTPrinter"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-bluetooth-printer": "0.0.1-dev",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-btprinter": "0.1.0-dev"
  };
});