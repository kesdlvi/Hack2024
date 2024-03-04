import OpenAI from 'openai';


let responses = []

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

async function gptTrip(country, tripTime) {
  const itinerary  = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `"Itinerary": "Give the itinerary for a trip in ${country} for ${tripTime} than a week. "`},
      // { role: 'user', content: `"Basic Information": "Give the Basic Information about ${country} "`}
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(itinerary.choices[0].message.content)
  responses.push(itinerary.choices[0].message.content)
  
  const info = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `" Information": "Give some cultural information about ${country}. Make it 3 numbered bullet points"`}
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(info.choices[0].message.content)
  responses.push(info.choices[0].message.content)

  const suggest = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `" Suggestions": "Give some 3 suggestions for sustainable travel to and while in ${country}. In numbered Bullet point format."`}
    ],
    model: "gpt-3.5-turbo",
  });
  const food = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `" Suggestions": "Give me 3 food recommendations in ${country}. In numbered bullet point format"`}
    ],
    model: "gpt-3.5-turbo",
  });
  responses.push(suggest.choices[0].message.content)
  responses.push(food.choices[0].message.content)
  return responses
}

export default gptTrip;