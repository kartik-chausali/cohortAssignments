const zod = require('zod')

const cardSchema = zod.object({
    name:zod.string(),
    description:zod.string(),
    int1:zod.string(),
    int2:zod.string(),
    int3:zod.string(),
    linkedinURL:zod.string(),
    twitterURL:zod.string(),
})

module.exports={
    cardSchema:cardSchema
}