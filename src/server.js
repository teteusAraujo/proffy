const proffys = [
    {
        name: "Mateus Araújo",
        avatar: "https://avatars2.githubusercontent.com/u/60048274?s=460&u=a7f56af7dbe7d6338401d5b256fba528d8f0400b&v=4" ,
        whatsapp: "88977656705" ,
        bio:" Estudante de Ciência da Computação. Como eu não sabia que era impossível. Fui lá e fiz." ,
        subject: "Matemática",
        cost: "80",
        weekday:[0] ,
        time_from: [720],
        time_two: [1220]
        },
    {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4 " ,
    whatsapp: "88977656705" ,
    bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
    subject: "Química",
    cost: "20",
    weekday:[0] ,
    time_from: [720],
    time_two: [1220]
    }

    

]

const subjects = [
   
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domiingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "sexta-feira",
    "sabado"
]

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data= req.query
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        proffys.push(dados)

        return res.redirect("/study")
    }
  
    return res.render("give-classes.html", {subjects, weekdays})
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
