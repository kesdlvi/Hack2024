import OpenAI from 'openai';



const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

async function continentGpt(continent) {
  const country  = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `"Give me a country in ${continent} "`},
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(country.choices[0].message.content)
  return country.choices[0].message.content
 
}

export default continentGpt;