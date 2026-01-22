require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "KaliGupta",
  "id": 130894573,
  "node_id": "U_kgDOB81K7Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/130894573?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/KaliGupta",
  "html_url": "https://github.com/KaliGupta",
  "followers_url": "https://api.github.com/users/KaliGupta/followers",
  "following_url": "https://api.github.com/users/KaliGupta/following{/other_user}",
  "gists_url": "https://api.github.com/users/KaliGupta/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/KaliGupta/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/KaliGupta/subscriptions",
  "organizations_url": "https://api.github.com/users/KaliGupta/orgs",
  "repos_url": "https://api.github.com/users/KaliGupta/repos",
  "events_url": "https://api.github.com/users/KaliGupta/events{/privacy}",
  "received_events_url": "https://api.github.com/users/KaliGupta/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kali Gupta",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Final year Btech student || Front-End Developer\r\n",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-04-16T07:58:38Z",
  "updated_at": "2025-07-29T12:11:36Z"
}

app.get('/github', (req,res)=>{
  res.json(githubData)
})
app.get('/',(req,res)=>{
  res.send("hii")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login first</h1>')
})

app.get('/signup',(req,res)=>{
    res.send("<h2>Signup Page</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`app is running on ${port}`)
})

