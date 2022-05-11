


const getControlsHeight = () => {
  const controls = document.querySelector("#controls");
  if (controls) {
    return controls.offsetHeight;
  }
  return 0;
};

function calculateLayoutSize() {
  const webview = document.querySelector("webview");
  const windowWidth = document.documentElement.clientWidth;
  const windowHeight = document.documentElement.clientHeight;
  const controlsHeight = getControlsHeight();
  const webviewHeight = windowHeight - controlsHeight;

  webview.style.width = windowWidth + "px";
  webview.style.height = webviewHeight + "px";
}



const urlField = document.getElementById('url_field')
    urlField.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            let url = urlField.value;
            if (!urlField.value.startsWith("http://") &&
                !urlField.value.startsWith("https://")) {
                url = `https://www.google.com/search?q=${url}`
            }

            event.preventDefault();
            webview.src = url;
            urlField.value = url;
           
        }
      



    });


        //que la url se muestre en el campo de texto
      


  
   




    const back = document.getElementById("back");
    back.onclick = () => {
      webview.goBack();
    }

    const forward = document.getElementById("forward");
    forward.onclick = () => {
      webview.goForward();
    }

    const reload = document.getElementById("reload");
    reload.onclick = () => {
      webview.reload();
    }

window.onload = () => {
  calculateLayoutSize();
  homeButton();

};

window.onresize = calculateLayoutSize;
