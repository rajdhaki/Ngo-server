import app from './app.js'
import dbConnection from './DB/db.js'
import dotenv from 'dotenv'
dotenv.config({
    path: './env'
})
const port = process.env.PORT || 4000


dbConnection().then(app.listen(
    port,()=>{
        console.log(`server running at ${port} port`)
    }
)).catch(e=> console.log("connection is faild !!",e))


// app.get("/", (rq, rs)=>{
//     rs.send("<h1> Hello Dosto</h1>");
// })

// app.get("/api/data", (rq,rs)=>{
//     const data = {
//         "status": "ok",
//         "totalResults": 10,
//         "articles": [
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Catherine Shu",
//         "title": "How Neara uses AI to protect utilities from extreme weather | TechCrunch",
//         "description": "Over the past few decades, extreme weather events have not only become more severe, but are also occurring more frequently. Neara is focused on enabling Over the past few decades, extreme weather events have not only become more severe, but are also occurring…",
//         "url": "https://techcrunch.com/2024/02/15/neara-ai/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/Flood-image-1.png?resize=1200,654",
//         "publishedAt": "2024-02-16T05:43:16Z",
//         "content": "Over the past few decades, extreme weather events have not only become more severe, but are also occurring more frequently. Neara is focused on enabling utility companies and energy providers to crea… [+7093 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Aria Alamalhodaei",
//         "title": "After rockets and spacecraft, Rocket Lab's next frontier could be applications | TechCrunch",
//         "description": "Rocket Lab is exploring possible applications for a satellite constellation that they would build, launch and operate in-house, similar to SpaceX’s",
//         "url": "https://techcrunch.com/2024/02/15/after-rockets-and-spacecraft-rocket-labs-next-frontier-could-be-applications/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/rocket-lab.jpeg?resize=1200,747",
//         "publishedAt": "2024-02-16T01:05:39Z",
//         "content": "Rocket Lab is exploring possible applications for a satellite constellation that they would build, launch and operate in-house, similar to SpaceXs Starlink business, as a way of generating recurring … [+2507 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Kyle Wiggers",
//         "title": "OpenAI's Sora video-generating model can render video games, too | TechCrunch",
//         "description": "OpenAI's new video-generating model, Sora, can render virtual worlds, too, according to the accompanying technical paper.",
//         "url": "https://techcrunch.com/2024/02/15/openais-sora-video-generating-model-can-render-video-games-too/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/Screenshot_2024-02-15_at_8.00.07-PM-transformed.png?resize=1200,676",
//         "publishedAt": "2024-02-16T01:04:16Z",
//         "content": "OpenAI’s new — and first! — video-generating model, Sora, can pull off some genuinely impressive cinematographic feats. But the model’s even more capable than OpenAI initially made it out to be, at l… [+1947 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Kyle Wiggers",
//         "title": "FTC seeks to modify rule to combat deepfakes | TechCrunch",
//         "description": "The FTC is seeking to modify an existing rule that would allow it to criminalize AI-powered efforts to impersonate.",
//         "url": "https://techcrunch.com/2024/02/15/ftc-seeks-to-modify-rule-to-combat-deepfakes/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1165990649.jpg?resize=1200,800",
//         "publishedAt": "2024-02-15T23:46:17Z",
//         "content": "Spurred by the growing threat of deepfakes, the FTC is seeking to modify an existing rule that bans the impersonation of businesses or government agencies to cover all consumers.\r\nThe revised rule — … [+2869 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Jacquelyn Melinek and Alex Wilhelm",
//         "title": "Coinbase cites stablecoins, Base as key 2024 priorities after crushing Q4 estimates | TechCrunch",
//         "description": "After disclosing better-than-expected financial results in its fourth quarter earnings report, U.S.-based Coinbase has big plans. The second largest",
//         "url": "https://techcrunch.com/2024/02/15/coinbase-cites-stablecoins-base-as-key-2024-priorities-after-crushing-q4-estimates/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1312540542.jpg?resize=1200,843",
//         "publishedAt": "2024-02-15T22:10:02Z",
//         "content": "After disclosing better-than-expected financial results in its fourth quarter earnings report, U.S.-based Coinbase has big plans.\r\nThe second largest crypto exchange told its investors that intends t… [+4149 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Brian Heater",
//         "title": "I read comics on Apple’s Vision Pro . . . It was fine | TechCrunch",
//         "description": "Few joys in this cold world can match cracking open a new comic on a lazy Sunday morning. Nothing to do, nowhere to be — just you, a mug of coffee and",
//         "url": "https://techcrunch.com/2024/02/15/i-read-comics-on-apples-vision-pro-it-was-fine/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/IMG_0056.jpeg?resize=1200,675",
//         "publishedAt": "2024-02-15T22:07:01Z",
//         "content": "Few joys in this cold world can match cracking open a new comic on a lazy Sunday morning. Nothing to do, nowhere to be just you, a mug of coffee and some sequential art. Not much has fundamentally ch… [+6298 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Kyle Wiggers",
//         "title": "This German nonprofit is building an open voice assistant that anyone can use | TechCrunch",
//         "description": "LAION, the German nonprofit behind a number of popular AI data sets, wants to develop an open voice assistant called BUD-E.",
//         "url": "https://techcrunch.com/2024/02/15/this-german-nonprofit-is-building-an-open-voice-assistant-that-anyone-can-use/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/10/voice-assistants.png?resize=1200,675",
//         "publishedAt": "2024-02-15T21:08:20Z",
//         "content": "There’s been many attempts at open source AI-powered voice assistants (see Rhasspy, Mycroft and Jasper, to name a few) — all established with the goal of creating privacy-preserving, offline experien… [+6334 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Devin Coldewey",
//         "title": "No 'GPT' trademark for OpenAI | TechCrunch",
//         "description": "The U.S. Patent and Trademark Office has denied OpenAI's attempt to trademark \"GPT,\" ruling that the term is \"merely descriptive\" and therefore unable to",
//         "url": "https://techcrunch.com/2024/02/15/no-gpt-trademark-for-openai/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1574154948-e1695647511123.jpg?resize=1200,676",
//         "publishedAt": "2024-02-15T21:05:25Z",
//         "content": "The U.S. Patent and Trademark Office has denied OpenAI’s attempt to trademark “GPT,” ruling that the term is “merely descriptive” and therefore unable to be registered. It’s a blow to OpenAI’s brandi… [+2419 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Amanda Silberling",
//         "title": "Lawmakers revise Kids Online Safety Act to address LGBTQ advocates' concerns | TechCrunch",
//         "description": "The Kids Online Safety Act (KOSA) is getting closer to becoming a law, which would make social platforms significantly more responsible for protecting",
//         "url": "https://techcrunch.com/2024/02/15/lawmakers-revise-kids-online-safety-act-to-address-lgbtq-advocates-concerns/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/congress-instagram.jpg?resize=1200,675",
//         "publishedAt": "2024-02-15T20:26:51Z",
//         "content": "The Kids Online Safety Act (KOSA) is getting closer to becoming a law, which would make social platforms significantly more responsible for protecting children who use their products. With 62 Senator… [+3973 chars]"
//         },
//         {
//         "source": {
//         "id": "techcrunch",
//         "name": "TechCrunch"
//         },
//         "author": "Kyle Wiggers",
//         "title": "OpenAI's newest model can generate videos -- and they look decent | TechCrunch",
//         "description": "OpenAI has been working on a video generation model. The results aren't perfect -- but they're among the better examples we've seen.",
//         "url": "https://techcrunch.com/2024/02/15/openais-newest-model-can-generate-videos-and-they-look-decent/",
//         "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-1778704897.jpg?resize=1200,675",
//         "publishedAt": "2024-02-15T19:36:25Z",
//         "content": "OpenAI, following in the footsteps of startups like Runway and tech giants like Google and Meta, is getting into video generation.\r\nOpenAI today unveiled Sora, a GenAI model that creates video from t… [+3569 chars]"
//         }
//         ]
//         }

//         rs.send(data)
//     })