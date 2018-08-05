# Restaurant Review App

## About
This is the 6th Project created under Udacity's Front-End Web Developer Nanodegree. The task was to complete a _Restaurant Review App_.

## First Run
1. Clone the repository `$ git clone https://github.com/paulboulescu/mws-restaurant-stage-1-master.git`
2. In a terminal, check the version of Python you have: `$ python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `$ python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software
3. With your server running, visit the site: `http://localhost:8000`

## Description
This app is a restaurant guide, offering details about selected restaurants (open hours, address, ratings, reviews). An interactive map, as well as filtering tools (_neighbourhood_ and _cuisine_) are available.

## Features
* _Interactive Map_ - allows the user to selects a restaurant and get more details
* _Neighbourhood Dropdown_ - filters restaurants based on the neighbourhood in which it is located
* _Cuisine Dropdown_ - filters restaurants based on its cuisine
* _Image_ - each restaurant is listed with a descriptive image
* _Address_
* _Open Hours_
* _Reviews_
* _Ratings_

## Internal Dependencies
* _index.html_ - stores the HTML structure for the _Homepage_
* _restaurant.html_ - stores the HTML structure for the _Restaurant_ sections
* _css/styles.css_ - stores the CSS
* _data/restaurants.json_ - stores the database
* _img/*_ - stores the images
* _js/dbhelper.js_ - stores the JavaScript code for database interaction
* _js/main.js_ - stores the JavaScript code for _Homepage_
* _js/restaurant_info.js_ - stores the JavaScript code for _Restaurant_ sections
* _.gitattributes_ - sets the default behavior, in case people don't have `core.autocrlf set. \# https://help.github.com/articles/dealing-with-line-endings/ * text=auto`
* _CODEOWNERS_ - information about the authors of the initial code
* _.CONTRIBUTING.md_ - guideline for contributing to this project
* _sw.js_ - stores the JavaScript code for Service Worker
* _.README.md_ - this current document

## External Dependencies
* [leaflet.js](https://leafletjs.com/)
* [Mapbox](https://www.mapbox.com)

## Known Issues
There aren't any known issues.

## Use Example
The project can be used as it is, for learning purposes, or to develop other similar projects, based on its functionalities. 

## License
Please check [Starter Repository](https://github.com/udacity/mws-restaurant-stage-1) for License information.

## Contributing
For details about contributing, please check [CONTRIBUTING.md](CONTRIBUTING.md).
