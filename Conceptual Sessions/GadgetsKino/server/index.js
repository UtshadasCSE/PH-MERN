const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const cartctCollection = client.db("GadgetsKinoo").collection("carts");

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
    app.get("/products", async (req, res) => {
      const result = await productCollection
        .find()
        .sort({ rating: -1 })
        .limit(10)
        .toArray();
      res.send(result);
    });
    // show details one
    app.get("/details/:id", async (req, res) => {
      const id = req.params.id;
      const result = await productCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });
    // store cart data in db
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartctCollection.insertOne(cartItem);
      res.send(result);
    });
    // show cart using user email
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const result = await cartctCollection.find({ email: email }).toArray();
      res.send(result);
    });
    // delete item from db using id
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const result = await productCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });
    // update data using id
    app.get("/update/:id", async (req, res) => {
      const id = req.params.id;
      const result = await productCollection
        .find({ _id: new ObjectId(id) })
        .toArray();
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
