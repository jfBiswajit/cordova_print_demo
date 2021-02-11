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
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAChCAIAAAD/fTL+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO7SURBVHhe7dIxjkNBAMLQ3P/Sf6WVERQZJVPHr6TFr0f6mrnogrnogrnogrnogrnogrnowptcXtI/ghjmoiOCGOaiI4IY5qIjghjmoiOCGJ9zYdUP4PJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHZ9z0c8iiGEuOiKIYS46IohhLjoiiGEuOiKI8WaSTsxFF8xFF8xFF8xFF8xFF8xFX3ueP02pU9wjSNjhAAAAAElFTkSuQmCC',
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
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAChCAIAAAD/fTL+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO7SURBVHhe7dIxjkNBAMLQ3P/Sf6WVERQZJVPHr6TFr0f6mrnogrnogrnogrnogrnogrnowptcXtI/ghjmoiOCGOaiI4IY5qIjghjmoiOCGJ9zYdUP4PJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHeai4vJgHZ9z0c8iiGEuOiKIYS46IohhLjoiiGEuOiKI8WaSTsxFF8xFF8xFF8xFF8xFF8xFX3ueP02pU9wjSNjhAAAAAElFTkSuQmCC',
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
