export async function fetchApiMethodGet(URL) {
    console.log("URL", URL);
    try {
        const headerFetch = {
            method: "GET",
            headers: {
            },
        };
        const response = await Promise.race([fetch(URL, headerFetch), new Promise((resolve, reject) => { }),
        ]);
        return { res: response };
    } catch (error) {
        console.log("error", error);
    }
}