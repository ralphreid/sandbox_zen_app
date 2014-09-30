(function() {

  return {
    events: {
      'app.activated':'showInfo'
    },

    getInfo: function() {
      var id = this.ticket().requester().id();
    },

    showInfo: function() {
      this.switchTo('requester');
    }
  };

}());
