// app/api/chat/route.ts
import { streamText, UIMessage, convertToModelMessages } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: openai("gpt-5-nano"),
      messages: [
        // {  system prompt example
        //   role: "system",
        //   // content:
        //   //   "You are a helpful coding assistant. Keep responses under 3 sentences and focus on practical examples.",
        //   content:
        //     "You are a friendly teach who explains concepts with simple analogies. Always relate concepts to everyday experiences.",
        // },
        { // few shot example, model messages (not UI messages)
          role: "system",
          content: "Convert user questions about React into code examples.",
        },
        {
          role: "user",
          content: "How to toggle a boolean?",
        },
        {
          // will guide the LLM to answer with code only
          role: "assistant",
          content: "const [isOpen, setIsOpen] = useState(false);\nconst toggle = () => setIsOpen(!isOpen);",
        },

        ...convertToModelMessages(messages),
      ],
    });

    result.usage.then((usage) => {
      console.log({
        messageCount: messages.length,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        totalTokens: usage.totalTokens,
      });
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error streaming chat completion:", error);
    return new Response("Failed to stream chat completion", { status: 500 });
  }
}