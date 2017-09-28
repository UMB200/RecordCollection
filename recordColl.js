
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
    "Let It Rock", 
    "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
    "1999", 
    "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  //If 'value' is empty delete given property of that array from the album
  if(value ===""){
    delete collection[id][prop];
    //then return return collection to proceed further to avoid 'set' status of property
    return collection;
  }
  //check if property of collection is not "tracks"
  if(prop !=="tracks") {
    //set 'value' to property of that 'collection' 
    collection[id][prop] =value;
  }
  else {
    //check if property of an array 'collection' is empty create an empty array
    if(!collection[id].hasOwnProperty(prop)) collection[id].tracks =[];
    //then add value to 'collection' array to 'tracks' property
    collection[id].tracks.push(value);
  } 
  return collection;
}
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
