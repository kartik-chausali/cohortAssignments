const express = require('express')
const app = express();
const {card} = require('./db')
const {cardSchema} = require('./types')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/cards', async(req, res)=>{
    const response = await card.find({});
    res.send({cards:response});
})

app.post('/createCard', async(req, res)=>{
    const payload = req.body;
    const parsePayload = cardSchema.safeParse(payload)
    if(!parsePayload.success){
        res.status(411).json({mssg:"wrong inputs"})
    }
    const {name , description, int1, int2, int3, linkedinURL, twitterURL} = req.body;
    await card.create({
        name:name,
        description:description,
        int1:int1,
        int2:int2,
        int3:int3,
        linkedinURL:linkedinURL,
        twitterURL:twitterURL,
    })
    res.json({msg:"card created successfully"})
})

app.put('/update',(req, res)=>{
    
})

app.listen(3000);