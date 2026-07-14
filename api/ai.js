export default function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Only POST requests allowed"
        });
    }


    const prompt = req.body.prompt || "";

    let text = prompt.toLowerCase();


    let result = {
        type: "cube",
        color: "white",
        size: 3
    };


    if (text.includes("drzewo")) {

        result = {
            type: "tree",
            color: "green",
            size: 5
        };

    }


    else if (text.includes("dom")) {

        result = {
            type: "house",
            color: "white",
            size: 5
        };

    }


    else if (text.includes("wieża") || text.includes("wieza")) {

        result = {
            type: "tower",
            color: "gray",
            size: 10
        };

    }


    return res.status(200).json(result);

}
