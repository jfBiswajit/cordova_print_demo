document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  document.getElementById('print').addEventListener('click', function () {
    printNow();
  });
}

function printNow() {
  BTPrinter.list(
    function () {
      BTPrinter.connect(
        function () {
          BTPrinter.printText(
            function (data) {},
            function (err) {},
            'print one'
          );

          BTPrinter.printText(
            function (data) {},
            function (err) {},
            'print two'
          );
          BTPrinter.disconnect(
            function () {},
            function (err) {},
            'RPP300'
          );
        },
        function (err) {},
        'RPP300'
      );
    },
    function (err) {}
  );
}
