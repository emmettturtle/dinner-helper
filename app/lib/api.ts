import OpenAI from "openai";


export async function fetchImgAnalysis(imgUrl: string) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": "Analyze an image of food items to identify the types of food present and quantify the number of each item.\n\nThe model will be provided with an image containing different kinds of food items. You are expected to list the identifiable items present in the image and provide an approximate count for each type.\n\n# Steps\n\n1. **Object Detection**: \n   - Detect and identify all visible items in the image.\n   - Focus specifically on food items, ignoring any irrelevant objects that are not food.\n\n2. **Item Classification**:\n   - Classify each food item based on recognizable shapes, colors, and textures.\n   - If an item cannot be clearly identified, make a best guess and indicate uncertainty, if applicable.\n\n3. **Counting**:\n   - Count each type of identified food item.\n   - Group similar items and provide a sum for each category (e.g., \"apple: 3, banana: 5\").\n\n# Output Format\n\nUse JSON with the following structure:\n\n```json\n{\n  \"items\": [\n    {\n      \"name\": \"[item_name]\",\n      \"count\": [number_of_items]\n    },\n    {\n      \"name\": \"[another_item_name]\",\n      \"count\": [number_of_items]\n    }\n  ]\n}\n```\n- Items should be listed in alphabetical order.\n- If you are unsure about an item, describe it briefly and note `\"uncertain\": true`.\n\n# Examples\n\n### Example 1:\n**Input**: Image containing 3 apples, 5 bananas, and 1 loaf of bread.\n\n**Output**:\n```json\n{\n  \"items\": [\n    {\n      \"name\": \"apple\",\n      \"count\": 3\n    },\n    {\n      \"name\": \"banana\",\n      \"count\": 5\n    },\n    {\n      \"name\": \"bread\",\n      \"count\": 1\n    }\n  ]\n}\n```\n\n### Example 2:\n**Input**: Image containing 2 oranges, 1 bunch of grapes (estimated as 20 grapes), and 4 strawberries.\n\n**Output**:\n```json\n{\n  \"items\": [\n    {\n      \"name\": \"grape\",\n      \"count\": 20\n    },\n    {\n      \"name\": \"orange\",\n      \"count\": 2\n    },\n    {\n      \"name\": \"strawberry\",\n      \"count\": 4\n    }\n  ]\n}\n```\n\n# Notes\n\n- If items are partially obscured, make an approximate count and label it as `\"approximate\": true`.\n- If different counts of recognizable variants (e.g., green vs. red apples) are needed, list them as separate categories."
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "What are the items in this food image"
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": imgUrl
                        }
                    }
                ]
            }
            // {
            //     "role": "assistant",
            //     "content": [
            //         {
            //             "type": "text",
            //             "text": "The image shows various food items in a refrigerator. Here's a list of identifiable items:\n\n```json\n{\n  \"items\": [\n    {\n      \"name\": \"apple\",\n      \"count\": 3\n    },\n    {\n      \"name\": \"bell pepper\",\n      \"count\": 3\n    },\n    {\n      \"name\": \"bottle\",\n      \"count\": 5\n    },\n    {\n      \"name\": \"carrot\",\n      \"count\": 12\n    },\n    {\n      \"name\": \"donut\",\n      \"count\": 2\n    },\n    {\n      \"name\": \"egg carton\",\n      \"count\": 1\n    },\n    {\n      \"name\": \"grape\",\n      \"count\": 1\n    },\n    {\n      \"name\": \"lettuce\",\n      \"count\": 1\n    },\n    {\n      \"name\": \"orange\",\n      \"count\": 3\n    },\n    {\n      \"name\": \"pickle jar\",\n      \"count\": 1\n    },\n    {\n      \"name\": \"tomato\",\n      \"count\": 6\n    }\n  ]\n}\n```"
            //         }
            //     ]
            // }
        ],
        response_format: {
            "type": "text"
        },
        temperature: 1,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

    return response;
}