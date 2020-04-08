const { dialog } = require("electron");

const showOpenFile = (mainWindow) => {
  dialog
    .showOpenDialog(
      mainWindow,
      {
        properties: ["openFile"],
        filters: [
          {
            name: "모든 이미지 파일",
            extensions: [
              "bmp",
              "jpg",
              "jpeg",
              "jpe",
              "gif",
              "tif",
              "tiff",
              "png",
            ],
          },
          {
            name: "BITMAP 파일",
            extensions: ["bmp"],
          },
          {
            name: "JPEG 파일",
            extensions: ["jpg", "jpeg", "jpe"],
          },
          {
            name: "GIF 파일",
            extensions: ["gif"],
          },
          {
            name: "TIF 파일",
            extensions: ["tif", "tiff"],
          },
          {
            name: "PNG 파일",
            extensions: ["png"],
          },
        ],
      }
      // (filenames) => {
      //   console.log("ddddd");
      // }
    )
    .then((filenames) => {
      console.log(filenames.filePaths[0]);
      //shell.showItemInFolder(filenames.filePaths[0]);

      mainWindow.webContents.send("HmessagePrint", filenames.filePaths[0]);
    });

  // if (!files) return;
  // const file = files[0];
  //const fileContent = fs.readFileSync(file).toString();
  // console.log(file);
};
const showOpenDirectory = (mainWindow) => {
  dialog
    .showOpenDialog(mainWindow, {
      properties: ["openDirectory"],
    })
    .then((result) => {
      console.log(result.canceled);
      console.log(result.filePaths);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  showOpenFile: showOpenFile,
  showOpenDirectory: showOpenDirectory,
};
