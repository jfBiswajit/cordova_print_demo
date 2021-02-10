document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  document.getElementById('print').addEventListener('click', function () {
    printNow();
  });
}

function printNow() {
  BTPrinter.list(
    function (data) {
      BTPrinter.connect(
        function (data) {
          BTPrinter.printText(
            function (data) {
              BTPrinter.disconnect(
                function (data) {},
                function (err) {},
                'PrinterName'
              );
            },
            function (err) {},
            'String to Print'
          );
        },
        function (err) {},
        'RPP300'
      );
    },
    function (err) {}
  );
}
