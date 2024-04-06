
      var socket = new WebSocket('ws://' + window.location.hostname + ':81/');

      function buttonDown(btn) {
        if (btn === 1) {
          socket.send('down1');
        } else if (btn === 2) {
          socket.send('down2');
        }
      }

      function buttonUp(btn) {
        if (btn === 1) {
          socket.send('up1');
        } else if (btn === 2) {
          socket.send('up2');
        }
      }

      function increaseSpeed() {
        socket.send('inc_speed');
      }

      function decreaseSpeed() {
        socket.send('dec_speed');
      }

      function storeStartPos() {
        // var startPos = document.getElementById("startPos").value;
        socket.send('store_start_pos');
      }

      function storeStopPos() {
        // var stopPos = document.getElementById("stopPos").value;
        socket.send('store_stop_pos');
      }

      function storeSpeed() {
        // var speed = document.getElementById("speed").value;
        socket.send('store_speed');
      }

      function storeCount() {
        // var count = document.getElementById("count").value;
        socket.send('store_count');
      }

      function startSession() {
        socket.send('start_session');
      }

      function stopSession() {
        socket.send('stop_session');
      }
    