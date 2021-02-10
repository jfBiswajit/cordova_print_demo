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
            `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAAAAACMfPpKAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAfElEQVQYlU2QWwrEMAwDR0vuf+XZj8qJSyjIyNYjAkAMQNFhkBCKzoNiin70kxKBN41ENuf7+9AZWQOGRx/2m4TeKy2YO0GyDpwszW5EUCs/ur78NZtGvSa8azdPDGttsonot8LtDFNnrs4yLSbuJk0ajnV3vevhCxUj4Q+R11n764g4WgAAAABJRU5ErkJggg==`
          );
        },
        function (err) {},
        'RPP300'
      );
    },
    function (err) {}
  );
}
