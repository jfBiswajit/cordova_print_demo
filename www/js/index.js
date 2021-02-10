document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.getElementById('print').addEventListener('click', function() {
      printNow();
    });
}


function printNow() {
  BTPrinter.list(
    function (data) {
      alert(JSON.stringify(data));
    },
    // function (err) {
    //   alert('Error');
    //   alert(err);
    // }

    BTPrinter.connect(
      function (data) {
        alert('Success');
        alert(data);
      },
      function (err) {
        alert('Error');
        alert(err);
      },
      'RPP300'
    )
  );
}
