// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  
  initialize: function(e){
  var that = this;
  //console.log('SQthat:', that)
  this.set(this.model);

  this.on('add', this.playFirst);
  this.on('ended', function(){
    this.remove(this.at(0))
  } )    //that = [];
   // console.log('thisqueue: ', this)
    //this.playFirst()
  },
  
  playFirst: function () {
// if a song is by itself, just play it or else do nothing
  // console.log('e: ', e)

  }


//   play: function () {
// // play that song that I am clicking on
//   this.trigger('play', this);
//   }



});

