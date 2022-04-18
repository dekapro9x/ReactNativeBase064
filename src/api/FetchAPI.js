export async function fetchApiMethodGet(URL) {
    try {
        const headerFetch = {
            method: "GET",
            headers: {
            },
        };
        const response = await Promise.race([fetch(URL, headerFetch), new Promise((resolve, reject) => {}),
        ]);
            return { res: response, code: response.status };
    } catch (error) {
       
    }
}