// Electron
const { app, Menu, shell } = require("electron");
const remoteMain = require("@electron/remote/main");// Retrieve the electron in page search module
const contextMenu = require('electron-context-menu');
const path = require("path");










app.on("web-contents-created", (e, contents) => {
   contextMenu({
      window: contents,
      showSaveImageAs: true,
      showInspectElement: true,


      


      // Customize the context menu the link 

     
      prepend: (_defaultActions, params) => [
        {
          role: "zoomIn"
      },
      {
          role: "zoomOut"
      },
      { role: "resetzoom" },
        {
          label: 'Rainbow',
          // Only show it when right-clicking images
          visible: params.mediaType === 'image',
          click: () => {
            console.log('Rainbow!');
          }

        },
          {
            label: 'atras  ',
            accelerator: 'CmdOrCtrl+Left',
            click: () => {
              contents.goBack();
            }
          },
          {
            label: 'adelante ',
            accelerator: 'CmdOrCtrl+Right',
            click: () => {
              contents.goForward();
            }
          },
          {
            //separador
            type: 'separator'
          },
          {
            label: 'recargar ',
            accelerator: 'CmdOrCtrl+R',
            click: () => {
              contents.reload();
            }
          
          },
          { role: "reload" },
          { role: "forcereload" },
          
          { role: "toggledevtools" },
          { type: "separator" },
         
          { type: "separator" },
              { role: "togglefullscreen" },
          //fullscreen
  

          {
            type: 'separator'
          },
         

          {
            label: 'imprimir ',
            accelerator: 'CmdOrCtrl+P',
            click: () => {
              contents.print();
            }
          },

          {
            label: 'imprimir seleccionado ',
            accelerator: 'CmdOrCtrl+Shift+P',
            click: () => {
              contents.printSelection();
            }

          },
          {
            type: 'separator'
          },
          {
            label: 'seleccionar todo ',
            accelerator: 'CmdOrCtrl+A',
            click: () => {
              contents.selectAll();
            }
          },
          {
            type: 'separator'
          },
          {
            role: 'minimize'
          },

          {
            label: 'mostrar menu',
            accelerator: 'CmdOrCtrl+M',
            click: () => {
              params.mediaType === 'text',
              //mostrar me\
             contents.downloadURL('https://www.google.com/');

             //solo los textos
              contents.downloadURL('https://www.google.com/', { saveAs: true });
             
              
            }
          
          
        }

          
      ]
  
   });
})





remoteMain.initialize();


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;
app.on("ready", () => {

  

  


    
  // Main window
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);
  remoteMain.enable(mainWindow.webContents);

  // Option 1: Uses Webtag and load a custom html file with external content
  mainWindow.loadURL(`file://${__dirname}/pageHome.html`);

  // Option 2: Load directly an URL if you don't need interface customization
  //mainWindow.loadURL("https://github.com");

  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // Display Dev Tools
  //mainWindow.openDevTools();

  // Menu (for standard keyboard shortcuts)
  const menu = require("./src/menu");
  const template = menu.createTemplate(app.name);
  const builtMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(builtMenu);

});

//testing context


// Quit when all windows are closed.
app.on("window-all-closed", () => {
  app.quit();
});
