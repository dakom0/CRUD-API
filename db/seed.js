const Pokemon = require("../models/List");
const pokemonData = require("./pokemon.json")


Pokemon.deleteMany({}).then(()=>{
    Pokemon.create(pokemonData).then(lists=>{
        console.log(lists);
        process.exit();
    })
})