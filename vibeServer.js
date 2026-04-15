const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

if (!CLAUDE_API_KEY) {
  console.warn('⚠️  No CLAUDE_API_KEY found. Using local vibe generation only.');
}

app.post('/api/vibe', async (req, res) => {
  const { city, temp, cloud, wind, precip, vibeName } = req.body;

  const prompt = `The city is ${city}. Current weather: ${temp}°C, ${cloud}% cloud cover, ${Math.round(wind)} km/h wind, ${precip}mm precipitation. The official vibe classification is "${vibeName}".

Write exactly 3 sentences describing this city's vibe in an absurd, over-the-top, unnecessarily philosophical way. Be dramatic and poetic. Reference the actual weather data somewhere. Use extremely niche internet culture references. Do NOT use quotation marks around the vibe name. Just write the 3 sentences directly.`;

  if (!CLAUDE_API_KEY) {
    return res.json({ success: true, vibe: "The vibes are mysteriously cosmic today. Truly transcendent." });
  }

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
    const vibeText = data.content?.[0]?.text || 'The vibes are mysteriously cosmic today. Truly transcendent.';
    res.json({ success: true, vibe: vibeText });
  } catch (error) {
    console.error('Vibe API error:', error.message);
    res.json({ success: true, vibe: 'The vibes are mysteriously cosmic today. Truly transcendent.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`☔ Vibe Checker running at http://localhost:${PORT}`);
});
