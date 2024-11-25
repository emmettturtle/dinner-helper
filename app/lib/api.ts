'use server';

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const prompt = `
    Analyze a given image of food items to detect what food items are present and determine how many of each item are in the image.

    If no food items are detected in the image, provide an appropriate error message. Respond using JSON data in all cases.

    # Steps

    1. **Image Analysis**: Examine the provided image for different food items.
    2. **Object Identification**: Identify which types of food are present.
    3. **Count Detection**: Determine the quantity of each identified food item.
    4. **Construct Response**: Generate a JSON response containing the identified food items and their counts, or an error message if no items are detected.

    # Output Format

    - The response should always be in JSON format containing the following possible keys:
    - \`"items"\`: A list of food items present in the image, each represented as an object with the item's name and quantity.
        - Example:
        \`\`\`json
        {
            "items": [
            { "name": "apple", "quantity": 3 },
            { "name": "banana", "quantity": 2 }
            ]
        }
        \`\`\`
    - If no items are found, provide an error message:
        \`\`\`json
        {
        "error": "No food items detected"
        }
        \`\`\`

    # Examples

    ### Example 1 (Image has food items):

    **Input**: (an image containing 3 apples and 2 bananas)

    **Output**:
    \`\`\`json
    {
    "items": [
        { "name": "apple", "quantity": 3 },
        { "name": "banana", "quantity": 2 }
    ]
    }
    \`\`\`

    ### Example 2 (Image has no food items):

    **Input**: (an image with no identifiable food items)

    **Output**:
    \`\`\`json
    {
    "error": "No food items detected"
    }
    \`\`\`

    # Notes

    - Ensure the detected food items are commonly recognizable foods.
    - In cases where a food item cannot be accurately identified, do not include it in the output rather than providing false information.
    - All responses should be clear, accurate, and utilize standard JSON formatting without additional wrappers or explanations.
`;

export async function fetchImgAnalysis(imgUrl: string) {

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                "role": "system",
                "content": [
                {
                    "type": "text",
                    "text": prompt
                }
                ]
            },
            {
                "role": "user",
                "content": [
                {
                    "type": "text",
                    "text": "What food items are in this image?"
                },
                {
                    "type": "image_url",
                    "image_url": {
                    "url": imgUrl
                    }
                }
                ]
            }
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

    const content = response.choices[0].message?.content;

    // console.log(content)

    // Parsing Response to give us a raw JSON object
    if (content) {
        try {
            const cleanedContent = content.replace(/```json|```/g, '').trim();
            // console.log(cleanedContent)
            const jsonResponse = JSON.parse(cleanedContent);
            console.log(jsonResponse);
            return jsonResponse;
        } catch (error) {
            console.error("Failed to parse JSON response:", error);
            throw new Error("Failed to parse JSON response");
        }
    } else {
        throw new Error("No content in response");
    }
}