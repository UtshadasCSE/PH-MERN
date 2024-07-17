const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

// ======MongoDB Start======

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
    /*
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    */
    const jobCollection = client.db("JobfinderBD").collection("jobs");
    const bidCollection = client.db("JobfinderBD").collection("bids");
    // JWT Generate
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "none",
        })
        .send({ success: true });
    });
    // clear cokkeis
    app.get("/logout", (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: false,
          sameSite: "none",
          maxAge: 0,
        })
        .send({ success: true });
    });
    // save a jobs in db
    app.post("/jobs", async (req, res) => {
      const jobData = req.body;
      const result = await jobCollection.insertOne(jobData);
      res.send(result);
    });
    // get all jobs data from the db
    app.get("/jobs", async (req, res) => {
      const result = await jobCollection.find().toArray();
      res.send(result);
    });

    // get jobs by user
    app.get("/my-jobs/:email", async (req, res) => {
      const token = req.cookies?.token;
      console.log(token);
      const email = req.params.email;
      const query = { buyer_email: email };
      const result = await jobCollection.find(query).toArray();
      res.send(result);
    });

    // get single job data from db using id
    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const result = await jobCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });
    // store the bidData in the DB
    app.post("/bids", async (req, res) => {
      const bidData = req.body;
      // check if data already in db
      const query = {
        email: bidData.email,
        jobId: bidData.jobId,
      };
      // const alreadyApplied = await bidCollection.findOne(query);
      // if (alreadyApplied) {
      //   return res.status(400).send("Already applied this job!");
      // }
      const result = await bidCollection.insertOne(bidData);
      res.send(result);
    });
    // update job data to the database
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updatedData,
        },
      };
      const result = await jobCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });
    // delete job from db
    app.delete("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const result = await jobCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });
    // get bids by user email from db
    app.get("/my-bids/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await bidCollection.find(query).toArray();
      res.send(result);
    });
    // get all bid request data by buyer email from db
    app.get("/bid-requests/:email", async (req, res) => {
      const email = req.params.email;
      const query = { buyer_email: email };
      const result = await bidCollection.find(query).toArray();
      res.send(result);
    });
    // update bid status
    app.patch("/bid/:id", async (req, res) => {
      const id = req.params.id;
      const status = req.body;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: status,
      };
      const result = await bidCollection.updateOne(query, updateDoc);
      res.send(result);
    });
    // get jobs by count for pagination
    app.get("/jobs-count", async (req, res) => {
      const count = await jobCollection.countDocuments();
      res.send({ count });
    });
    /*
    // Send a ping to confirm a successful connection
    */
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

// ======MongoDB End========
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Your server is running at http://localhost:${port}`);
});
