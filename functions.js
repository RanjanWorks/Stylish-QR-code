
let color = "#2a2aff";
let color2 = "#ff0000";
let color3 = "#2a2aff";
let color4 = "#ff0000";
let color5 = "#2a2aff";
let color6 = "#ff0000";
let data = "Ranjan";
let gradientType = "linear";
let style = id("style");
let selectGradient = all("#select-gradient");

let allhides = all(".hide");
const scrollableDiv = id("scroll");
let textinput = id("input_text");

selectGradient.forEach((select) => {
  select.addEventListener("change", (e) => {
    let controls = select.parentNode.parentNode.parentNode;
    let hideElement = controls.querySelectorAll(".hide");
    let hideColor = controls.querySelector("#hideColor");

    if (e.target.value == 2) {
      hideElement.forEach((element) => {
        element.style.display = "flex";
      });
      hideColor.style.display = "none";
    } else {
      hideElement.forEach((element) => {
        element.style.display = "none";
      });
      hideColor.style.display = "flex";
      checkActiveOfDot();
    }
  });
});

function checkActiveOfDot() {
  if (id("dots").classList.contains("active")) {
    resetDotsG();
  }
  if (id("corner-square").classList.contains("active")) {
    resetSquareG();
  }

  if (id("corner-dot").classList.contains("active")) {
    resetCornerG();
  }
}

function resetQR() {
  qrCode.update({
    width: 200,
    height: 200,
    type: "svg",
    image: null,
    data: "Ranjan",
    margin: 10,
    dotsOptions: {
      color: "black",
      type: "square",
      gradient: false,
    },
    qrOptions: {
      typeNumber: 0,
      errorCorrectionLevel: "H",
    },
    backgroundOptions: {
      color: "#fff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0,
    },
    cornersSquareOptions: {
      color: "black",
      type: "square",
      gradient: false,
    },
    cornersDotOptions: {
      color: "black",
      type: "square",
      gradient: false,
    },
  });
  resetSelect()
  resetInputs()
  resetUrlandfile()
}

function resetSelect() {
  const selecteds = all('select')
  selecteds.forEach(s => {
    s.value = s.options[0].value
  })

}
function resetInputs() {
  const inputElements = all('input')
  inputElements.forEach(e => {
    e.value = e.defaultValue
  })
}

function Height(e) {
  qrCode.update({
    height: e.value,
  });
}
function Width(e) {
  qrCode.update({
    width: e.value,
  });
}
function Margin(e) {
  qrCode.update({
    margin: e.value,
  });
}

function ClearImage() {
  qrCode.update({
    image: null,
  });
  resetUrlandfile()
}
function resetUrlandfile() {
  const inputs = all('input[type="url"], input[type="file"]');
  inputs.forEach(e => e.value = null)
}


let name1 = "Ranjan";
let extension1 = "png";
let mainQuality = 1000;

function updateName(e) {
  name1 = e.value;
}
function extension(e) {
  extension1 = e.value;
}

function updateurlImage(e) {
  qrCode.update({
    image: e.value,
  });
}

function updateQulity(e) {
  mainQuality = e.value;
}
function download() {
  const svg = document.querySelector('svg');
  const width = mainQuality;
  const height = mainQuality;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  const images = svg.querySelectorAll('image');
  const imagePromises = [];
  images.forEach((image) => {
    const p = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        const reader = new FileReader();
        reader.onloadend = function() {
          const base64data = reader.result;
          image.setAttribute('href', base64data);
          resolve();
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = reject;
      xhr.open('GET', image.getAttribute('href'));
      xhr.responseType = 'blob';
      xhr.send();
    });
    imagePromises.push(p);
  });

  Promise.all(imagePromises).then(() => {

    const svgUrl = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(svgUrl);
    img.onload = function() {
      ctx.drawImage(img, 0, 0, width, height);

      let quality = 1.0;
      let pngUrl = canvas.toDataURL(`image/${extension1}`, quality);
      while (pngUrl.length < 40000) {
        quality -= 0.05;
        pngUrl = canvas.toDataURL(`image/${extension1}`, quality);
      }

      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${name1}.${extension1}`;
      changeIcon()
      downloadLink.click();
    };
  });
}
function changeIcon(){
  let dwn = document.querySelector('#dwn')
  let dwn2 = document.querySelector('#dwn2')
 dwn.innerText = "downloading"
 dwn2.innerText = "downloading"
  setTimeout(()=>{
     dwn.innerText = "download"
 dwn2.innerText = "download"
  },2000)
}

function resetSquareG() {
  qrCode.update({
    cornersSquareOptions: {
      gradient: false,
    },
  });
}
function resetCornerG() {
  qrCode.update({
    cornersDotOptions: {
      gradient: false,
    },
  });
}

function updateAllColor(e) {
  let ccl = e.value;
  qrCode.update({
    dotsOptions: {
      color: ccl,
    },
    cornersSquareOptions: {
      color: ccl,
    },
    cornersDotOptions: {
      color: ccl,
    },
  });
}
function resetDotsG() {
  qrCode.update({
    dotsOptions: {
      gradient: false,
    },
  });
}

function updateBringFront(e) {
  if (e.checked) {
    qrCode.update({
      imageOptions: {
        hideBackgroundDots: false,
      },
    });
  } else {
    qrCode.update({
      imageOptions: {
        hideBackgroundDots: true,
      },
    });
  }
}

function ErrorCorrection(e) {
  qrCode.update({
    qrOptions: {
      errorCorrectionLevel: e.value,
    },
  });
}

function updateImageMargin(e) {
  qrCode.update({
    imageOptions: {
      margin: e.value,
    },
  });
}
function updateimageSize(e) {
  if (e.value > 0.5) {
    alert("image size should below 0.5");
  }
  qrCode.update({
    imageOptions: {
      imageSize: e.value,
    },
  });
}
let image;
let imageUrl;
function updateImage(e) {
  image = e.files[0];
  imageUrl = URL.createObjectURL(image);
  qrCode.update({
    image: imageUrl,
  });
}
function updateBackgroundColor(e) {
  qrCode.update({
    backgroundOptions: {
      color: e.value,
    },
  });
}

function updatecornerdotsRotation(e) {
  qrCode.update({
    cornersDotOptions: {
      gradient: {
        rotation: e.value,
      },
    },
  });
  updatecornertimeout();
}

function updatecornerdotsGtype(e) {
  qrCode.update({
    cornersDotOptions: {
      gradient: {
        type: e.value,
        colorStops: [
          { offset: 0, color: color5 },
          { offset: 1, color: color6 },
        ],
      },
    },
  });
}

function updatecornerdotsGtype1(e) {
  qrCode.update({
    cornersDotOptions: {
      gradient: {
        type: gradientType,
        colorStops: [
          { offset: 0, color: color5 },
          { offset: 1, color: color6 },
        ],
      },
    },
  });
}
function updatecornerdotsColor1(e) {
  color5 = e.value;
  qrCode.update({
    cornersDotOptions: {
      gradient: {
        colorStops: [{ offset: 1, color: color5 }],
      },
    },
  });
  updatecornertimeout();
}
function updatecornerdotsColor2(e) {
  color6 = e.value;
  qrCode.update({
    cornersDotOptions: {
      gradient: {
        colorStops: [{ offset: 0, color: color5 }],
      },
    },
  });
  updatecornertimeout();
}

function updateDotColor(e) {
  qrCode.update({
    cornersDotOptions: {
      color: e.value,
    },
  });
}
function updatedot(e) {
  qrCode.update({
    cornersDotOptions: {
      type: e.value,
    },
  });
}
function updateConrnerSquareGColor1(e) {
  color3 = e.value;
  qrCode.update({
    gradient: {
      colorStops: [{ offset: 0, color: color3 }],
    },
  });
  setGradientSquare();
}
function updateConrnerSquareGRoation(e) {
  qrCode.update({
    cornersSquareOptions: {
      gradient: {
        rotation: e.value,
      },
    },
  });
  setGradientSquare();
}
function updateConrnerSquareGColor2(e) {
  color4 = e.value;
  qrCode.update({
    gradient: {
      colorStops: [{ offset: 1, color: color4 }],
    },
  });
  setGradientSquare();
}

function updateConrnerSquareType(e) {
  qrCode.update({
    cornersSquareOptions: {
      type: e.value,
    },
  });
}
function updateConrnerSquareGtype(e) {
  qrCode.update({
    cornersSquareOptions: {
      gradient: {
        rotation: 180,
        type: e.value,
        colorStops: [
          { offset: 0, color: color },
          { offset: 1, color: color2 },
        ],
      },
    },
  });
}
function updateConrnerSquareGtype1() {
  qrCode.update({
    cornersSquareOptions: {
      gradient: {
        type: gradientType,
        colorStops: [
          { offset: 0, color: color3 },
          { offset: 1, color: color4 },
        ],
      },
    },
  });
}
function updateConrnerSquareColor(e) {
  qrCode.update({
    cornersSquareOptions: {
      color: e.value,
    },
  });
}

let info;
textinput.addEventListener("input", () => {
  info = textinput.value;
  qrCode.update({
    data: textinput.value,
  });
});

function updateDotsGradienttype(e) {
  gradientType = e.value;
  qrCode.update({
    dotsOptions: {
      gradient: {
        rotation: 180,
        type: e.value,
        colorStops: [
          { offset: 0, color: color },
          { offset: 1, color: color2 },
        ],
      },
    },
  });
  setGradientAfter();
}
function updateDotsGradienttype1() {
  qrCode.update({
    dotsOptions: {
      gradient: {
        type: gradientType,
        colorStops: [
          { offset: 0, color: color },
          { offset: 1, color: color2 },
        ],
      },
    },
  });
  document.getElementById("col1").value = color;
  document.getElementById("col2").value = color2;
}

function updateDotsGradientColor1(e) {
  color = e.value;
  qrCode.update({
    dotsOptions: {
      colorStops: [{ offset: 1, color: color }],
    },
  });
  setGradientAfter();
}
function updateDotsGradientColor2(e) {
  color2 = e.value;
  qrCode.update({
    dotsOptions: {
      colorStops: [{ offset: 0, color: color2 }, ,],
    },
  });
  setGradientAfter();
}
function updatecornertimeout() {
  setTimeout(() => {
    updatecornerdotsGtype1();
  }, 300);
}

function setGradientAfter() {
  setTimeout(() => {
    updateDotsGradienttype1();
  }, 100);
}
function setGradientSquare() {
  setTimeout(() => {
    updateConrnerSquareGtype1();
  }, 300);
}
function updateDotsRotation(e) {
  qrCode.update({
    dotsOptions: {
      gradient: {
        type: gradientType,
        rotation: e.value,
      },
    },
  });
  setGradientAfter();
}
function updateDotsOption(e) {
  qrCode.update({
    dotsOptions: {
      type: e.value,
    },
  });
}
function updateDotsOptionColor(e) {
  qrCode.update({
    dotsOptions: {
      color: e.value,
    },
  });
}

function resetQr() {
  qrCode.update({
    dotsOptions: {
      gradient: false,
    },
  });
}
function next() {
  scrollableDiv.scrollLeft += 100;
}
function prev() {
  scrollableDiv.scrollLeft -= 100;
}
function all(e) {
  return document.querySelectorAll(e);
}
function id(e) {
  return document.getElementById(e);
}
function qs(e) {
  return document.querySelector(e);
}

function DefaultHide() {
  allhides.forEach((s) => {
    s.style.display = "none";
  });
}

function handelmouseWheel() {
  scrollableDiv.addEventListener("wheel", function(event) {
    event.preventDefault();
    scrollableDiv.scrollLeft += event.deltaY;
  });
}

function handelTabs() {
  const tabs = all("[data-tabs]");
  const tabContents = all("[data-content]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      let target = document.querySelector(tab.dataset.tabs);
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      target.classList.add("active");
      tab.classList.add("active");
      checkActiveOfStyle();
    });
  });
}

function makeGradientdisplaynone() {
  allhides.forEach((s, i) => {
    s.style.display = "none";
  });
  dotscolor.forEach((d) => {
    d.style.display = "block";
  });
}
handelTabs();
handelmouseWheel();
DefaultHide();
