import { embed, embedMany } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return Response.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Check if we're dealing with multiple texts
    if (Array.isArray(body.texts)) {
      if (body.texts.length === 0) {
        return Response.json(
          { error: "texts array cannot be empty" },
          { status: 400 }
        );
      }

      const { values, embeddings, usage } = await embedMany({
        model: openai.textEmbeddingModel("text-embedding-3-small"), // 1536 dims
        values: body.texts,
        maxParallelCalls: 5,
      });

      return Response.json({
        values,
        embeddings,
        usage,
        count: embeddings.length,
        dimensions: embeddings[0]?.length,
      });
    }

    // Single text embedding (our existing code)
    const { text } = body;

    if (!text || typeof text !== "string") {
      return Response.json(
        { error: "text field is required and must be a string" },
        { status: 400 }
      );
    }

    const { value, embedding, usage } = await embed({
      model: openai.textEmbeddingModel("text-embedding-3-small"),
      value: text,
    });

    return Response.json({
      value,
      embedding,
      usage,
      dimensions: embedding.length,
    });
  } catch (error) {
    console.error("Error generating embedding:", error);
    return Response.json(
      { error: "Failed to generate embedding" },
      { status: 500 }
    );
  }
}
