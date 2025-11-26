# Notes

https://www.youtube.com/watch?v=BQmbuEClULY
AI SDK v5 Full Course - Beginner to Advanced

## Types of models

1. LLM - trained on text
2. Embedding models - convert text into vectors
3. Image models - generate or analize images
4. Multi-modal - Support multiple types of input & output

## Characteristics

- context window
- intelligence - how well it understands nuance or can follow complete intstructions
-

## Why is prompt engineering important?

### Good prompt engineering:

- ensures responses match your users' needs and knowledge level
- creates consistency, so similar questions get similar types of responses
- can actually reduce costs by encouraging more concise responses that use fewer tokens

Users never see any of this

## Prompt engineering techniques

1. **System prompts** shape how the AI behaves
   1. This is in addition to user & assistant prompts
2. Few-shot learning
   1. when system prompt isn't enough, we send model messages (system, user, assistant) to guide the model on what the conversation should look like

### Best practices

- Start simple & iterate
- Be specific & not overly restrictive
- Consider your audience
- Monitor costs
- Test edges cases (off-topic questions)
- Document what works & save for reference

## Structured data

See
- src/app/api/structured-data/schema.ts
- src/app/api/structured-data/route.ts
- src/app/ui/structured-data/page.tsx

- Allows exacting the shape of the retured data usig a schema
- Use cases
  - catalogs w/prices, descriptions, etc
  - Analysis reports with data points and conclusions
  - Task lists with priorities and due dates
  - Quiz questions with multiple choice options

### Generate Arrays & Enums

See
- structured-array Pokemon[] generator
- structured-enum text sentiment (enum options) analizer