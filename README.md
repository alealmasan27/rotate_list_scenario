# Simple React with TypeScript extension

The app contains a search field, and a list of five elements underneath. 

Per default the list should show: A, B, C, D, E. Every second the elements should rotate by one position. For example, after one second it will look like: B, C, D, E, A. After another second it will look like: C, D, E, A, B and so on. 

When the user types into the search field, query the apple music API(https://itunes.apple.com/search?term=searchTerm). The output contains a list with songs. Each song
has a property "collectionName" (the album). Sort all albums alphabetically and take the first five. E.g.“A Moon Shaped Pool“, „In Rainbows“, “Kid A”, “OK Computer”, “Pablo Honey”.
The list should keep rotating with a 1 second interval and the new albums should be added from bottom to top.
Items from previous searches should not appear again, but only the current search term items should be rotated.

# How it works?
Before starting the application, you need to run the following command: `npm install`. After, you can run `npm start`
