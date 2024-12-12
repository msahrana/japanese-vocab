const express = require("express");
const cors = require("cors");
const {MongoClient, ServerApiVersion, ObjectId} = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.crgl3kb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const usersCollection = client.db("BunpoMasterDB").collection("users");
    const lessonsCollection = client.db("BunpoMasterDB").collection("lessons");

    app.post("/user", async (req, res) => {
      const user = req.body;
      const query = {email: user?.email};
      const isExist = await usersCollection.findOne(query);
      if (isExist) {
        return res.send({message: "user already exists", insertedId: null});
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await usersCollection.findOne({email});
      res.send(result);
    });

    app.post("/lesson", async (req, res) => {
      const lesson = req.body;
      const result = await lessonsCollection.insertOne(lesson);
      res.send(result);
    });

    app.get("/lessons", async (req, res) => {
      const result = await lessonsCollection.find().toArray();
      res.send(result);
    });

    app.get("/lesson/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await lessonsCollection.findOne(query);
      res.send(result);
    });

    app.put("/lesson/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const lesson = req.body;
      const updateDoc = {
        $set: {...lesson},
      };
      const result = await lessonsCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete("/lesson/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await lessonsCollection.deleteOne(query);
      res.send(result);
    });

    await client.connect();
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Bunpo Master server is running");
});

app.listen(port, () => {
  console.log(`Bunpo Master server is running on port: ${port}`);
});
