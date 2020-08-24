const proffys = [
    {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4 " ,
    whatsapp: "88977656705" ,
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
    subject: "Química",
    cost: "20",
    weekday:[0] ,
    time_from: [720],
    time_two: [1220]
    },

    {
        name: "Mateus Araújo",
        avatar: "https://avatars2.githubusercontent.com/u/60048274?s=460&u=a7f56af7dbe7d6338401d5b256fba528d8f0400b&v=4" ,
        whatsapp: "88977656705" ,
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
        subject: "Química",
        cost: "90",
        weekday:[0] ,
        time_from: [720],
        time_two: [1220]
        }

]

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    return res.render("study.html", {proffys})
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}

const express= require('express')
const server = express()
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
