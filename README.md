# Movielist Challenge

Movielist is a new indie film company that aims to provide better relationships with small creators.

Their product is _Movielist_, a platform in which people can generate and share filmographies for their favourite directors providing them with visibility.

## Current Status

The CEO of _Movielist_ hired you to develop the initial version of his product. Its worth mentioning that she does not have any technical background.

However, she has a clear vision on how the product should behave, so she provided a list of functional requirements.

### Requirements
* Each user will have a **unique** id, and he will authenticate using a **non-empty name** and a **password**.
* Each user will be able to save a list of movies. Each movie will have a **director** and **title**, and each list will be defined by a **unique** id and a name.
* The system have to allow the following actions
    * Create a new list with a given name (auto-generate the **unique** id)
    * Get the users lists
    * Get an individual list for the user
    * Add films to a given list (based on the generated id)
    * Remove films from a given list (based on the generated id)
    * All endpoints have to be secured with Basic Auth (using name & password) 
* You should ensure that the password is strong enough

## What are we looking for?

* **A well-designed solution and architecture** Avoid duplication, extract re-usable code
where makes sense. We want to see that you can create an easy-to-maintain codebase.
* **Storage** We do not need a full fledged database rollout, its ok to save your data on memory for now. _However_ we are looking for an architecture that allows us to add a database as easy as possible.
* **Testing** Try to create tests covering the main functionalities of your code. Feel free to create both unit tests and functional tests and use the frameworks of your choosing.
* **Documentation** The CEO has a non-tech background so try to explain your decisions, as well as any other technical requirement (how to run the API, external dependencies, etc ...).
* **Typescript** implemetation is a bonus

* **Git** Use a control source platform of your choosing.

* **Solution delivery** Push your changes into a git repo. We will download it and execute it. We'll value best practices (branches based on features, pr to develop and master branch, etc.)