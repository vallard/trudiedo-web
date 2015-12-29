(function(){
  var app = angular.module('trudiedo', []);
  app.filter('escape', function() {
    return window.encodeURIComponent;
  }); 
  app.controller('DosController', function() {
    this.dos = dos;   
    this.theNewDo = {};
    this.tagArray = [];
    for (var i=0;i< dos.length; i++){
      this.tagArray[i] = ""; 
    }

    this.newDo = function(theNewDo){
      theNewDo.date = Date.now();
      theNewDo.tags = [];
      this.dos.push(theNewDo);
      this.theNewDo = {};
    };

    this.addTag = function(index, newTag) {
      // check for duplicate tags as we don't allow this. 
      for (var i=0;this.dos[index].tags.length; i++){
        if(newTag === this.dos[index].tags[i]){
          this.tagArray[index] = "";
          return; 
        } 
      }
      this.dos[index].tags.push(newTag);
      this.tagArray[index] = "";
    };
  });

  var dos = [{
    text: 'milk', 
    date: 'Jan 02 2015',
    tags: [
      'trader joes',
      'costco'
    ]
  }, {
    text: 'shower towel hanger', 
    date: 'June 03 2015',
    tags : [
      'val dos',
      'home depot'
    ]
  }];

})();
