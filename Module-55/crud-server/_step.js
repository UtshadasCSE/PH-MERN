/*
---------------------------
MongoDB Connection
---------------------------
1.create an account 
2.create a user with password
3.whitelist IP address
4.database > connect > driver >node >view full code 
----------------------------------
*** Create POST ***
1.app.post('/users',async(req,res)=>{})
2.make the function async to use await inside it
3.now go to MongoDB crud in searchbar
4.make sure you use express.json() MIDLLEWARE
5.access data from the body
Client ->
a.create fetch
2.add second parameter as an object
3provide method :"POST",
4.add headers:{
    "content-type":"application/json"
}
5.body:JSON.stringfy(ex)
***Read MANY***
1.create a cursor =userCollection.find()
2.const result = await cursor.toArray()
*** DELETE ***
1.create app.delete('/user/:id',async(req,res)=>{})
2.const query ={_id:new ObjectId(id)}
*/
