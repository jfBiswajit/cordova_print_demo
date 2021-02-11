document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  document.getElementById('print').addEventListener('click', function () {
    printNow();
  });
}

function printNow() {
  BTPrinter.connected(function (isConnected) {
    if (isConnected === true) {
      BTPrinter.printBase64(
        function (data) {
          // alert('Success');
          // alert(data);
        },
        function (err) {
          // alert('Error');
          // alert(err);
        },
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk+M+AARiHsiAAcCIKAYwFoQ8AAAAASUVORK5CYII=',
        '0'
      ); //base64 string, align
    } else {
      BTPrinter.connect(
        function (data) {},
        function (err) {
          // alert(err);
        },
        'RPP300'
      );

      BTPrinter.printBase64(
        function (data) {
          // alert('Success');
          // alert(data);
        },
        function (err) {
          // alert('Error');
          // alert(err);
        },
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk+M+AARiHsiAAcCIKAYwFoQ8AAAAASUVORK5CYII=',
        '0'
      ); //base64 string, align
    }
  });
  
  BTPrinter.disconnect(
    function (data) {
      // alert('Success');
      // alert(data);
    },
    function (err) {
      // alert('Error');
      // alert(err);
    },
    'RPP300'
  );
}
