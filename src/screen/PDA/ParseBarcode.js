const regex = /[^A-Z0-9_\-/]/;

export const BarcodeDataType = {
    bill: "bill",
    postOffice: "po",
    truck: "truck",
    customer: "cs",
    box: "box",
    other: "other",
    tkhq: "TKHQ",
    phiendongtai: "phiendongtai"
};

const ParseBarcode = (input) => {
    if (typeof input === "string" && input?.length > 0) {
        if (input.startsWith("{")) {
            try {
                let parseData = JSON.parse(input);
                switch (parseData.type) {
                    case BarcodeDataType.truck:
                    case BarcodeDataType.postOffice:
                    case BarcodeDataType.customer:
                        return {
                            type: parseData.type,
                            data: parseData.value,
                            obj: parseData
                        };
                }
            } catch (err) {
                console.error(err);
                return null;
            }
        } else {
            const rxNum = /[^0-9]/;
            if (input?.length === 12 && !rxNum.test(input)) {
                if (input.startsWith("30")) {
                    let numberRandom = parseInt(input.slice(2, 10));
                    let numberCheck = parseInt(input.slice(10, 11));
                    if (numberRandom % 7 === numberCheck) {
                        return {
                            type: BarcodeDataType.tkhq,
                            data: input
                        };
                    }
                }
            }
            if (input?.length >= 22 && input.includes("-") && input.includes("/")) {
                return {
                    type: BarcodeDataType.phiendongtai,
                    data: input
                };
            }
            if (input?.length >= 5 && input?.length <= 25) {
                if (!regex.test(input)) {
                    return {
                        type: BarcodeDataType.bill,
                        data: input
                    };
                } if (input.startsWith("t_")) {
                    return {
                        type: BarcodeDataType.box,
                        data: input
                    };
                }
            } else if (input?.length <= 30) {
                return {
                    type: BarcodeDataType.other,
                    data: input
                }
            }
        }
    }

    return null;
}

export default ParseBarcode;