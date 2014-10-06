(function() {

  return {
    events: {
      'app.activated':'getInfo'
    },

    requests: {

      requestInfoSettings: function(id) {
        return {
          url:'/api/v2/users/' + id + '/related.json',
          type:'GET',
          dataType: 'json'
        };
      }

    },

    getInfo: function() {
      var id = this.ticket().requester().id();
      console.log(id);
      var request = this.ajax('requestInfoSettings', id);
      request.done(this.showInfo);
      request.fail(this.showError);
    },

    showInfo: function(data) {
      this.switchTo('requester', data);
    },

    showError: function() {
      this.switchTo('error');
    }
  };

}());
