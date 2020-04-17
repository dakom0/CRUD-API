# Pokemon CRUD API

This API has the data of 150 pokemon. It consists of multiple objects which have a name and the url for more information about each Pokemon. It has search capabilities where you can search a Pokemon by ID or name.

---
# Getting started

There is a base url that displays the whole APi. In order to search for specific Pokemon, it will need certain parameters at the end. This is explained below. 


# Url and Paths

### GET

base url: 

This  allows you to search for Pokemon by their specific name. ex:

/"ID"

This  allows you to search for Pokemon by their specific name. ex:

/name/"name of Pokemon"



### POST

url: 

This method allows you to enter your very own Pokemon to this database.

Ex:

{
"name": "Pokemon name",
"url": "https://pokeapi.co/api/v2/pokemon-species/"ID

}

# Technologies used

1. Mongoose
2. express
3. node.js
4. JSON

# Examples

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