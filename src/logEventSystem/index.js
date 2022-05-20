const RNFS = require('react-native-fs');

const writeLogSystem = async (keyLog, text) => {
    const logFile = await readLogSystem();
    const timeCurrent = new Date();
    const path = RNFS.DocumentDirectoryPath + 'logSystem.txt';
    RNFS.writeFile(path, `${logFile}\n[${timeCurrent}] ${keyLog}: ${text}\n`, 'utf8')
        .then(() => {
            // console.log("White File Success:", logFile);
        })
        .catch((err) => {
            console.log(err.message);
        });
}

const readLogSystem = async () => {
    const path = RNFS.DocumentDirectoryPath + 'logSystem.txt';
    let logFile = "";
    await RNFS.readFile(path, "utf8")
        .then((result) => {
            logFile = result;
        })
        .catch((err) => {
            console.log(err.message, err.code);
        });
    // console.log("Log file:", logFile);
    return logFile;
}

const removeFile = async (filepath) => {
    RNFS.exists(filepath)
        .then((result) => {
            if (result) {
                RNFS.unlink(filepath)
                    .then(() => {
                        console.log("Xóa thành công file csv.");
                    })
                    .catch(async (err) => {
                        console.log("Lỗi  xóa file", err);
                    });
            }
        })
        .catch((err) => {
            console.log("Lỗi  xóa file", err);
        });
};

const removeListFile = async (listFile) => {
    if (Array.isArray(listFile) && listFile.length > 0) {
        listFile.forEach((file) => {
            if (file && file.filepath) {
                RNFS.exists(filepath)
                    .then((result) => {
                        if (result) {
                            RNFS.unlink(filepath)
                                .then(() => { })
                                .catch(async (err) => { });
                        }
                    })
                    .catch((err) => { });
            }
        });
    }
};


export { writeLogSystem, readLogSystem, removeFile, removeListFile }