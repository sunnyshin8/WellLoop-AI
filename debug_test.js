const fs = require('fs');
const path = require('path');

async function listModelsRaw() {
    console.log("Fetching models via RAW HTTP...");

    let apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        try {
            const envPath = path.join(process.cwd(), '.env.local');
            if (fs.existsSync(envPath)) {
                const envContent = fs.readFileSync(envPath, 'utf8');
                const match = envContent.match(/GEMINI_API_KEY=(.*)/);
                if (match && match[1]) {
                    apiKey = match[1].trim();
                }
            }
        } catch (e) {
            console.error("Error reading .env.local:", e);
        }
    }

    if (!apiKey) {
        console.error("ERROR: No GEMINI_API_KEY found.");
        return;
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            console.log("AVAILABLE MODELS:");
            data.models.forEach(m => console.log(m.name));
        } else {
            console.log("ERROR RESPONSE:", JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error("FETCH ERROR:", e);
    }
}

listModelsRaw();
