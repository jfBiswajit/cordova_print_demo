document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  document.getElementById('print').addEventListener('click', function () {
    printNow();
  });
}

function printNow() {
  BTPrinter.connected(function (isConnected) {
    alert(JSON.stringify(isConnected));
    if (isConnected === true) {
      alert('connected');
    } else {
      alert('not connected');
    }
  });
}
