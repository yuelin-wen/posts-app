import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

// /api/prompt/new

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json()

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })
        await newPrompt.save()

        return new Prompt(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response('Failed to create new prompt', { status: 400 })
    }

}
