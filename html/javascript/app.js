(function(){
  var app = angular.module('trudiedo', []);
  app.filter('escape', function() {
    return window.encodeURIComponent;
  }); 
  app.controller('DosController', [ '$http', function($http) {
    // the list of dos
    var dos = this;
    dos.dos = [];
    $http.get('http://192.168.99.100:8080/v1/todos').success(function(data) {
      console.log("got the todos")
      dos.dos = data;
    });

    // place holder for new do.
    this.theNewDo = {};
    // array of new tags for all the dos. 
    this.tagArray = [];
    // initialize the array of tags. 
    for (var i=0;i< dos.length; i++){
      this.tagArray.push(""); 
    }

    // create a new do
    this.newDo = function(theNewDo){
      theNewDo.createdAt = Date.now();
      theNewDo.tags = [];
      this.dos.push(theNewDo);
      this.theNewDo = {};
      this.tagArray.push("");
    };

    // when new tag is added to do
    this.addTag = function(index, newTag) {
      // check for duplicate tags as we don't allow this. 
      //console.log(index);
      //console.log(this.dos[index].tags.length);
      if (this.dos[index].tags == null){
        this.dos[index].tags = [];
      }
      for (var i=0; i < this.dos[index].tags.length; i++){
        //console.log("checking");
        if(newTag === this.dos[index].tags[i]){
          this.tagArray[index] = "";
          return; 
        } 
      }
      this.dos[index].tags.push(newTag);
      this.tagArray[index] = "";
    };

    // when check box is checked.
    this.doCheck = function(index, completed){
      //console.log(completed);
      this.dos[index].completed = complete;
    };

    // Update Do
    this.updateDo = function(index, text) {
      this.dos[index].text = text;
    };


  }]);

  var dos = [{
    id: 2,
    text: 'milk', 
    createdAt: 'Jan 02 2015',
    completed: false,
    tags: [
      'trader joes',
      'costco'
    ]
  }, {
    id: 1,
    text: 'shower towel hanger', 
    createdAt: 'June 03 2015',
    completed: true,
    tags : [
      'val dos',
      'home depot'
    ]
  }];

})();
