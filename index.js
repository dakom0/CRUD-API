const app = require("express")();
const List = require("./models/List");
const bodyParser = require("body-parser");
app.use(bodyParser.json())


app.get('/lists', (req, res)=>{
    List.find({}).then(lists=>{
        res.json(lists);
    })

})

app.get('/lists/:num', (req, res)=>{
    List.find({url: "https://pokeapi.co/api/v2/pokemon-species/"+req.params.num+"/"}).then(list=>{
        res.json(list);
    })
    console.log(req.params.num)
})

app.get('/lists/name/:name', (req, res)=>{
    List.find({name: req.params.name}).then(lists=>{
        res.json(lists);
    })
})

app.post('/lists', (req, res)=>{
    console.log(req.body);
    List.create(req.body).then(list=>{
        res.json(list);
    })
})

app.put("/lists/:id", function (req, res) {
    List.findOneAndUpdate(
      { _id: req.params.id },req.body,{ new: true }).then(list => {
      res.json(list)
    })
  })

app.delete("/lists/:id", function (req, res) {
    List.findOneAndRemove({ _id: req.params.id })
      .then(list => {
        res.json(list)
      })
  })

app.listen(4000, ()=>{
    console.log("I'm on 4000")
})

