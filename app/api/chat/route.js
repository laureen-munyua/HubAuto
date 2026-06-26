export async function POST(req) {
  try {
    const { messages } = await req.json();

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: "You are HubAuto's friendly car dealership assistant. Help users with questions about buying cars, features, pricing, financing, test drives, and servicing. Keep answers concise and helpful.",
        messages,
      }),
    });

    const data = await res.json();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response.";

    return Response.json({ reply });
  } catch (error) {
    return Response.json({ reply: "Something went wrong." }, { status: 500 });
  }
}