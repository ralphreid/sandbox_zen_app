(function() {

  return {
    events: {
      'app.activated':'getInfo'
    },

    requests: {
      relatedInfoSettings: function(id){
        return {
          url: '/api/v2/users/' + id + '/related.json',
          type: 'GET',
          dataType: 'json'
        };
      }

    },

    getInfo: function() {
      var id = this.ticket().requester().id();
      var request = this.ajax('relatedInfoSettings', id);
    },

    showInfo: function() {
      this.switchTo('requester');
    }
  };

}());
