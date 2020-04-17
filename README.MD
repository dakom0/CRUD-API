# Pokemon CRUD API

This API has the data of 150 pokemon. It consists of multiple objects which have a name and the url for more information about each Pokemon. It has full CRUD capabilities where you can search, update delete and even create a Pokemon.

---
# Getting started

There is a base url that displays the whole APi. In order to search for specific Pokemon, it will need certain parameters at the end. This is explained below. 


# Url and Paths

### GET

base url: https://dakom1-crud-api.herokuapp.com/lists

This  allows you to search for Pokemon by their Pokedex number. 

Ex:

/"Dex-Number"

This  allows you to search for Pokemon by their specific name. 

Ex:

/name/"name of Pokemon"



### POST

url: https://dakom1-crud-api.herokuapp.com/lists/

This method allows you to create your very own Pokemon to this database.

Ex:

{
"name": "Pokemon name",

}

### UPDATE

url: "https://dakom1-crud-api.herokuapp.com/lists/"ID

This method allows you to edit a Pokemon in this database.

Ex:

{
"name": "Pokemon name"

}

### DELETE

url: "https://dakom1-crud-api.herokuapp.com/lists/"ID

This method allows you to delete a Pokemon from the database.


# Technologies used

1. Mongoose
2. express
3. node.js
4. JSON

# Examples

https://dakom1-crud-api.herokuapp.com/lists/150

will return

```
[
  {
    "_id": "5e986279ba1fc778e75fd4ef",
    "name": "mewtwo",
    "url": "https://pokeapi.co/api/v2/pokemon-species/150/",
    "__v": 0
  }
]
```
https://dakom1-crud-api.herokuapp.com/lists/name/bulbasaur

will return

```
[
  {
    "_id": "5e986279ba1fc778e75fd45a",
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon-species/1/",
    "__v": 0
  }
]
```