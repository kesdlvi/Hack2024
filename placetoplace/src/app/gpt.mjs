import OpenAI from 'openai';

let responses = []

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

async function gptTrip(country) {
  const itinerary  = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `"Itinerary": "Give the itinerary for a trip in ${country} "`},
      // { role: 'user', content: `"Basic Information": "Give the Basic Information about ${country} "`}
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(itinerary.choices[0].message.content)
  responses.push(itinerary.choices[0].message.content)
  
  const info = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `" Information": "Give some cultural information about ${country} "`}
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(info.choices[0].message.content)
  responses.push(info.choices[0].message.content)

  const suggest = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `" Suggestions": "Give some suggestions for sustainable travel to and while in ${country} "`}
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(suggest.choices[0].message.content)
  responses.push(suggest.choices[0].message.content)
  return responses
}

export default gptTrip;