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
        
        BTPrinter.printText(
          function (data) {
            console.log('Success');
            console.log(data);
          },
          function (err) {
            console.log('Error');
            console.log(err);
          },
          'This Text Comes From The Fucking Printer!'
        );
        
        BTPrinter.disconnect(
          function (data) {
            console.log('Success');
            console.log(data);
          },
          function (err) {
            console.log('Error');
            console.log(err);
          },
          'RPP300'
        );
      },
      function (err) {
        alert('Error');
        alert(err);
      },
      'RPP300'
    )
    
    
  );
}
