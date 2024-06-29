const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// ===========MongoDB Start============

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rxr3v0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    const productCollection = client.db("GadgetsKinoo").collection("products");

    //add product in DB
    app.post("/products", async (req, res) => {
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    });
    // get product by user email
    app.get("/myproducts/:email", async (req, res) => {
      const result = await productCollection
        .find({ email: req.params.email })
        .toArray();
      res.send(result);
    });
    // get product by rating
    app.get("/populars", async (req, res) => {
      const result = await productCollection.aggregate([
        {
          $addFields: {
            ratingNum: { $toDouble: "$rating" }, // Convert rating string to double
          },
        },
        {
          $sort: { ratingNum: -1 }, // Sort by the converted ratingNum field in descending order
        },
        {
          $limit: 5, // Change the limit as needed
        },
      ]);
      res.send(result);
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

// ===========MongoDB End============

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(port, () => {
  console.log(`Your server is running at http://localhost:${port}`);
});
