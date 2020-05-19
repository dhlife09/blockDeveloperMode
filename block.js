      /* 복사 방지, 개발자 도구 방지 */
      $(document).keydown(function(event) {
          if (event.keyCode == 123) {
              // Prevent F12
              return false;
          } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
              // Prevent Ctrl+Shift+I        
              return false;
          } else if (event.ctrlKey &&
              (event.keyCode === 67 ||
                  event.keyCode === 86 ||
                  event.keyCode === 85 ||
                  event.keyCode === 117)) {
              return false;
          }
      });
