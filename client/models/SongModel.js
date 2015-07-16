// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
  //this.url = url,
    //console.log(e.title);
    // debugger;
    //this.set( { 'title': e } );  
  // this.title = tit
    // this.set( { artist: "this.artist"} );
  // this.artist = artist,
  //  this.set('artist');
  },
  defaults: {
    "title": "",
    "artist": "",
    "url": ""
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function () {
  	this.trigger('enqueue', this);
  },

  dequeue: function () {
  	this.trigger('dequeue', this);
  },

  ended: function () {
  	this.trigger('ended', this);
  }

});


 