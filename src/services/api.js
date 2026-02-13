export const getAdvice = async (problem) => {
  try {
    if (!window.puter) {
      throw new Error('Puter.js not loaded');
    }

    const prompt = `You are a supportive, empathetic life coach. Someone is struggling with this:

"${problem}"

Provide 2-3 helpful, practical pieces of advice. Each piece should be:
- 2-3 sentences long
- Actionable and specific
- Encouraging and supportive
- Easy to understand

Format: Return a simple list with each piece of advice on a new line, numbered 1., 2., 3.`;

    const response = await window.puter.ai.chat(prompt);
    
    console.log('Puter AI Response:', response);

    // Extract text from response
    let text = '';
    if (typeof response === 'string') {
      text = response;
    } else if (response.message && response.message.content) {
      text = response.message.content;
    } else if (response.content) {
      text = response.content;
    } else {
      text = JSON.stringify(response);
    }

    // Parse the numbered list
    const lines = text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .filter(line => /^\d+\./.test(line)) // Only lines starting with numbers
      .map(line => line.replace(/^\d+\.\s*/, '').trim()); // Remove numbering

    // If no numbered lines, split by newlines
    const adviceArray = lines.length > 0 
      ? lines.slice(0, 3)
      : text.split('\n').filter(l => l.trim()).slice(0, 3);

    return { advice: adviceArray.length > 0 ? adviceArray : [text] };
  } catch (error) {
    console.error('Error getting advice:', error);
    throw new Error(error.message || 'Failed to get advice');
  }
};
