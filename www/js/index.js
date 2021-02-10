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
            function () {
              BTPrinter.disconnect(
                function () {},
                function (err) {},
                'RPP300'
              );
            },
            function (err) {},
            `Hi there!`
          );
        },
        function (err) {},
        'RPP300'
      );
    },
    function (err) {}
  );
}
