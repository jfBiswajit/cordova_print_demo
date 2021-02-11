document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  document.getElementById('print').addEventListener('click', function () {
    printNow();
  });
}

function printNow() {
  BTPrinter.connected(function (isConnected) {
    if (isConnected === true) {
      BTPrinter.printText(
        function (data) {},
        function (err) {},
        'String to Print'
      );
    } else {
      BTPrinter.connect(
        function (data) {},
        function (err) {},
        'RPP300'
      );
      BTPrinter.printText(
        function (data) {},
        function (err) {},
        'String to Print'
      );
    }
  });
}
