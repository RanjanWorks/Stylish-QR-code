
let arr = [];
const designs = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/292px-Twitter-logo.svg.png",
    dotsColor: "black",
    cornerSquareColor: "#179CF0",
    cornerDotColor: "#179CF0",
    backgroundColor: "#fff",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image:
      "https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png",
    dotsColor: "black",
    cornerSquareColor: "#1873C8",
    cornerDotColor: "#1873C8",
    backgroundColor: "#fff",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/800px-New_Replit_Logo.svg.png",
    dotsColor: "black",
    cornerSquareColor: "#F26201",
    cornerDotColor: "#F26201",
    backgroundColor: "#fff",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/009/911/500/original/google-pay-editorial-logo-digital-payment-app-free-vector.jpg",
    dotsColor: "black",
    cornerSquareColor: "#2774E0",
    cornerDotColor: "#2BA04B",
    backgroundColor: "#fff",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image:
      "https://static-00.iconduck.com/assets.00/whatsapp-logo-icon-512x512-7i7ztupy.png",
    dotsColor: "black",
    cornerSquareColor: "black",
    cornerDotColor: "black",
    backgroundColor: "#fff",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__480.jpg",
    dotsColor: "#CF2259",
    cornerSquareColor: "#7E3BAF",
    cornerDotColor: "#7E3BAF",
    backgroundColor: "#fff",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png",
    dotsColor: "black",
    cornerSquareColor: "#1877F2",
    cornerDotColor: "#1877F2",
    backgroundColor: "#fff",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },

  {
    image: null,
    dotsColor: "blue",
    dotsOption: "dots",
    cornerSquareColor: "blue",
    cornerDotColor: "blue",
    backgroundColor: "#fff",
    cornerDotsOptions: "dot",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "red",
    cornerSquareColor: "red",
    cornerDotColor: "red",
    backgroundColor: "#fff",
    dotsOption: "extra-rounded",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "extra-rounded",
  },
  {
    image: null,
    dotsColor: "orange",
    cornerSquareColor: "green",
    cornerDotColor: "green",
    backgroundColor: "white",
    dotsOption: "dots",
    cornerDotsOptions: "square",
    cornerSquareOptions: "square",
  },
  {
    image: null,
    dotsColor: "black",
    cornerSquareColor: "blue",
    cornerDotColor: "blue",
    backgroundColor: "white",
    dotsOption: "square",
    cornerDotsOptions: "rounded",
    cornerSquareOptions: "square",
  },
  {
    image: null,
    dotsColor: "#FFA000",
    cornerSquareColor: "#FFCD4E",
    cornerDotColor: "#FFCD4E",
    backgroundColor: "black",
    dotsOption: "square",
    cornerDotsOptions: "square",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "black",
    cornerSquareColor: "black",
    cornerDotColor: "black",
    backgroundColor: "white",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: "images/yt.png",
    dotsColor: "black",
    cornerSquareColor: "red",
    cornerDotColor: "red",
    backgroundColor: "white",
    dotsOption: "dots",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: "images/facebook.png",
    dotsColor: "black",
    cornerSquareColor: "blue",
    cornerDotColor: "blue",
    backgroundColor: "white",
    dotsOption: "dots",
    cornerDotsOptions: "rounded",
    cornerSquareOptions: "rounded",
  },
  {
    image: "images/github.png",
    dotsColor: "black",
    cornerSquareColor: "black",
    cornerDotColor: "black",
    backgroundColor: "white",
    dotsOption: "square",
    cornerDotsOptions: "square",
    cornerSquareOptions: "rounded",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/rounded-instagram-logo-web-print-transparent-white-background-use-printing-purpose-165758567.jpg",
    dotsColor: "black",
    cornerSquareColor: "#DB2344",
    cornerDotColor: "#DB2344",
    backgroundColor: "white",
    dotsOption: "dots",
    cornerDotsOptions: "rounded",
    cornerSquareOptions: "rounded",
  },
  {
    image: null,
    dotsColor: "gold",
    cornerSquareColor: "gold",
    cornerDotColor: "gold",
    backgroundColor: "black",
    dotsOption: "rounded",
    cornerDotsOptions: "rounded",
    cornerSquareOptions: "rounded",
  },
  {
    image: null,
    dotsColor: "blue",
    cornerSquareColor: "blue",
    cornerDotColor: "blue",
    backgroundColor: "#fff",
    dotsOption: "rounded",
    cornerDotsOptions: "square",
    cornerSquareOptions: "square",
  },
  {
    image: null,
    dotsColor: "red",
    cornerSquareColor: "green",
    cornerDotColor: "red",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "square",
  },
  {
    image: null,
    dotsColor: "green",
    cornerSquareColor: "red",
    cornerDotColor: "green",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "square",
  },
  {
    image: null,
    dotsColor: "#245953",
    cornerSquareColor: "#245953",
    cornerDotColor: "#408E91",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "#19A7CE",
    cornerSquareColor: "#19A7CE",
    cornerDotColor: "#146C94",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },

  {
    image: null,
    dotsColor: "#3A1078",
    cornerSquareColor: "#3A1078",
    cornerDotColor: "#4E31AA",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "#7B2869",
    cornerSquareColor: "#7B2869",
    cornerDotColor: "#9D3C72",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "#1A120B",
    cornerSquareColor: "#1A120B",
    cornerDotColor: "#3C2A21",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "#CB1C8D",
    cornerSquareColor: "#CB1C8D",
    cornerDotColor: "#7F167F",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "#FF7000",
    cornerSquareColor: "#FF7000",
    cornerDotColor: "#10A19D",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "#434242",
    cornerSquareColor: "#FB2576",
    cornerDotColor: "#0002A1",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "#1D1CE5",
    cornerSquareColor: "#7978FF",
    cornerDotColor: "#1D1CE5",
    backgroundColor: "#fff",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "red",
    cornerSquareColor: "red",
    cornerDotColor: "red",
    backgroundColor: "#000000",
    dotsOption: "square",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
  {
    image: null,
    dotsColor: "black",
    cornerSquareColor: "#black",
    cornerDotColor: "red",
    backgroundColor: "#fff",
    dotsOption: "classy",
    cornerDotsOptions: "extra-rounded",
    cornerSquareOptions: "dot",
  },
];

function removeQrcode() {
  while (style.firstChild) {
    style.removeChild(style.firstChild);
  }
}

function checkActiveOfStyle() {
  if (style.classList.contains("active")) {
    if (style.childNodes.length > 0) {
      return;
    } else {
      createQrcode();
    }
  } else {
    removeQrcode();
  }
}

textinput.addEventListener("input", () => {
  info = textinput.value;
  removeQrcode();
  checkActiveOfStyle();
});

function createQrcode() {
  for (let i = 0; i < designs.length; i++) {
    let qrCode1 = new QRCodeStyling({
      width: 150,
      height: 150,
      image: designs[i].image,
      type: "canvas",
      data: info || "Ranjan",
      margin: 10,
      dotsOptions: {
        color: designs[i].dotsColor,
        type: designs[i].dotsOption,
      },
      qrOptions: {
        typeNumber: 0,
        errorCorrectionLevel: "H",
      },
      backgroundOptions: {
        color: designs[i].backgroundColor,
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 4,
        hideBackgroundDots: true,
      },
      cornersSquareOptions: {
        color: designs[i].cornerSquareColor,
        type: designs[i].cornerDotsOptions,
      },
      cornersDotOptions: {
        color: designs[i].cornerDotColor,
        type: designs[i].cornerSquareOptions,
      },
    });
    arr.push(qrCode1);
    qrCode1.append(style);
  }

  let layer = qs(".loading");

  let canvas = style.querySelectorAll("canvas");
  canvas.forEach((can) => {
    can.setAttribute("title", "Apply this style");
  });

  canvas.forEach((qrcode, i) => {
    qrcode.addEventListener("click", () => {
      let random = Math.floor(Math.random() * 2000);
      layer.classList.add("showBar");
      setTimeout(() => {
        layer.classList.remove("showBar");

        qrCode.update({
          ...arr[i]._options,
          type: "svg",
          width: 200,
          height: 200,
        });
      }, random);
    });
  });
}
