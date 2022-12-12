const functions = require("firebase-functions");
const { OpenAIApi, Configuration } = require("openai");
const cors = require("cors");
const express = require("express");
const Requsts = require("./database");
// const { admin } = require("firebase-admin");
//  admin.initializeApp();
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ data: "SuperKent2.0" });
});

const configuration = new Configuration({
  apiKey: "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",
});
const openAi = new OpenAIApi(configuration);

app.post("/addToDB", async (req, res) => {
  const toAdd = req.body;
  await Requsts.add({ toAdd });
  res.send({ mes: "success" });
});

app.post("/story", (req, res) => {
  const { text1, text2, text3, text4 } = req.body;
  console.log(text1);

  openAi
    .createCompletion({
      prompt: `Write an essay for a man who wants to get to MBA in 
      Oxford becouse of: ${text1}
      -And immediately after MBA he wants this job: ${text2}
      -His professional purpose: ${text3}
      -10 years after MBA he wants: ${text4}`,
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 856,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => res.status(200).send(response.data.choices[0].text));

  // const essay = response.data.choices[0].text;
  // res.status(200).send(essay);
  // res.send({shima:'suuupeer'})
});

exports.essayCreator = functions.https.onRequest(app);
