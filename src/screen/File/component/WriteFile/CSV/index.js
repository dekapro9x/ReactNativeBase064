 //Lưu lại file CSV:
 handleDataFileCSV = async (dataSaveCSV) => {
    let path = RNFS.DocumentDirectoryPath + "/dataScannerQRCode.csv";
    await RNFS.writeFile(path, dataSaveCSV, "utf8")
      .then((success) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };