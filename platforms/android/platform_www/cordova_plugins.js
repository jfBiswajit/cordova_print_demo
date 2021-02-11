cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-btprinter.BluetoothPrinter",
      "file": "plugins/cordova-plugin-btprinter/www/BluetoothPrinter.js",
      "pluginId": "cordova-plugin-btprinter",
      "clobbers": [
        "BTPrinter"
      ]
    },
    {
      "id": "cordova-pdf-generator.pdf",
      "file": "plugins/cordova-pdf-generator/www/pdf.js",
      "pluginId": "cordova-pdf-generator",
      "clobbers": [
        "cordova.plugins.pdf",
        "pugin.pdf",
        "pdf"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-btprinter": "0.1.0-dev",
    "cordova-pdf-generator": "2.1.1"
  };
});