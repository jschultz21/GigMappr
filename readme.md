# GigMappr

GigMappr is an Angular on Rails Application that allows users to search and explore upcoming concerts occurring in their city.

## Planning

All planning and wireframing was done on Friday. Please see photos included in planning folder. Tools used for planning: whiteboard, Trello. The team created a list of desired features to implement, and sorted them by priority allowing us to make incremental progress and add new features once we completed the MVP. 

## Unsolved Issues
Add to Calendar button on concert show pages
Google Places

## Setup instructions
Api is run through Ruby on Rails app. The Angular app is hosted on Bitballon here: http://gig-mappr.bitballoon.com, as gh-pages does not support node modules. The API is in a Rails app that is deployed on Heroku here: https://gigmappr.herokuapp.com/.

## Technology
BandsInTown API used to seed database with 1000 unique concerts sorted by soonest date. We chose to pre-seed the database with API data so that users would be allowed to submit new events.
Google Maps API to render maps with venue locations
Rails version 5.0
Two factories: Concert and Comment
$state, $stateParams, $scope, $location

### Ruby on Rails gems
* httparty - used to convert API data from its url
* figaro - used to conceal API key information
* rack-cors - used to allow for cross-origin-resource-sharing between the rails and angular portions of the application
