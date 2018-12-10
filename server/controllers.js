
const axios =require('axios')

let id = 0;
let posts=[];

module.exports={

    create: (req, res)=>{
        axios
        .get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then(response => {
            console.log(response)
            posts.push({id: id, timeStamp: req.body.timeStamp, text: req.body.text, insult: response.data.insult});
        id++;
        res.status(200).send(posts)
        })
        console.log(req.body);
    },

    read: (req, res)=>{
        res.status(200).send(posts);
    },

    update: (req, res)=>{
        const{text}=req.body;
        const postIndex = posts.findIndex((post=>post.id == req.params.id));
        let post=posts[postIndex];

        posts[postIndex].text=req.body.text

        console.log(posts)
        res.status(200).send(posts);
    },

    delete: (req,res)=>{
        const deleteID = req.params.id;
        postIndex = posts.findIndex(post=>post.id == deleteID);
        console.log(deleteID, postIndex)
        posts.splice(postIndex, 1);
        res.status(200).send(posts);
    }
}

// axios
//     .get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
//     .then(response => {
//         console.log(response.data)
//     })