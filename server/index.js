const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();
const controllers = require('./controllers');


app.use(bodyParser.json());

app.get(`/api/post`, controllers.read);
app.post(`/api/post`, controllers.create);
app.put(`/api/post/:id`, controllers.update);
app.delete(`/api/post/:id`, controllers.delete);

const port = 3001
app.listen(port,()=>{console.log(`Server listening on port ${port}`);});





