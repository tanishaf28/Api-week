const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

if (!CLAUDE_API_KEY) {
  console.warn('⚠️  Warning: CLAUDE_API_KEY environment variable not set. API roasts will fail.');
  console.warn('Set it with: export CLAUDE_API_KEY=your_key_here');
}

app.post('/api/roast', async (req, res) => {
  const { p1, p2 } = req.body;

  const prompt = `You are a savage but witty roast battle comedian at a Pokémon roast battle. You have the actual stats for two Pokémon. Write a roast battle between them.

POKÉMON 1: ${p1.name.toUpperCase()}
- Types: ${p1.types.join(", ")}
- HP: ${p1.stats.hp}, Attack: ${p1.stats.attack}, Defense: ${p1.stats.defense}, Speed: ${p1.stats.speed}
- Weight: ${p1.weight}kg, Height: ${p1.height}m
- Known moves: ${p1.moves.join(", ")}

POKÉMON 2: ${p2.name.toUpperCase()}
- Types: ${p2.types.join(", ")}
- HP: ${p2.stats.hp}, Attack: ${p2.stats.attack}, Defense: ${p2.stats.defense}, Speed: ${p2.stats.speed}  
- Weight: ${p2.weight}kg, Height: ${p2.height}m
- Known moves: ${p2.moves.join(", ")}

Write exactly this structure (use these exact headers):
ROAST OF ${p1.name.toUpperCase()}:
[2-3 sentences roasting ${p1.name} using its actual stats, types and abilities. Be brutally funny. Reference specific weak stats.]

ROAST OF ${p2.name.toUpperCase()}:
[2-3 sentences roasting ${p2.name} using its actual stats, types and abilities. Be brutally funny. Reference specific weak stats.]

VERDICT:
[1 sentence declaring which Pokémon got roasted harder and why. End with "Winner of the Shame Championship: [name]"]`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-1-20250805',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    const roastText = data.content?.[0]?.text || 'The roast was so legendary it broke the API.';
    res.json({ success: true, roast: roastText });
  } catch (error) {
    console.error('Roast error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Pokémon Roast Arena running at http://localhost:${PORT}`);
  console.log(`📝 Make sure CLAUDE_API_KEY is set in your environment!`);
});
