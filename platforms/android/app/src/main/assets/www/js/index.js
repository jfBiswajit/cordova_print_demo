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
          BTPrinter.printBase64(
            function (data) {
              BTPrinter.disconnect(
                function () {},
                function (err) {},
                'RPP300'
              );
            },
            function (err) {},
            'Image Base64 String'
          );
        },
        function (err) {},
        'RPP300'
      );
    },
    function (err) {}
  );
}
