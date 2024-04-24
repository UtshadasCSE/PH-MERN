const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();

const port = process.env.PORT || 3000;

// middlewire
app.use(cors());
app.use(express.json());

//mongoDB connection code
const uri =
  "mongodb+srv://utshadas567:N83nf1hvV8cu2ziC@cluster0.jeztbls.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("userDB");
    const usersCollection = database.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await usersCollection.findOne(query);
      res.send(user);
    });
    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const result = await usersCollection.updateOne(
        filter,
        updatedUser,
        options
      );
      res.send(result);
    });
    app.post("/users", async (req, res) => {
      const user = req.body;
      // Insert the defined document into the "haiku" collection
      const result = await usersCollection.insertOne(user);
      res.send(result);
      // Print the ID of the inserted document
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
      console.log("Please delete from database:", id);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Your server running at http://localhost:${port}`);
});
