
      const array = [
        "",
        "Name",
        "Url",
        "Phone Number",
        "Email",
        "Contact",
        "Paragraph",
        "description",
        "Link",
        "Address",
      ];

      const output = document.getElementById("typing");

      const typingSpeed = 100;

      const erasingSpeed = 50;

      const pause = 1000;

      function typeAndErase(str) {
        let i = 0;

        function type() {
          if (i < str.length) {
            output.textContent += str.charAt(i);

            i++;

            setTimeout(type, typingSpeed);
          } else {
            setTimeout(erase, pause);
          }
        }

        function erase() {
          if (i > 0) {
            output.textContent = output.textContent.slice(0, -1);

            i--;

            setTimeout(erase, erasingSpeed);
          } else {
            next();
            i = 0;
          }
        }

        function next() {
          output.textContent = "";

          if (array.length > 0) {
            const nextItem = array.shift();
            setTimeout(() => typeAndErase(nextItem), pause);
          } else {
            output.innerHTML = "Text";
          }
        }

        type();
      }

      const firstItem = array.shift();
      typeAndErase(firstItem);

