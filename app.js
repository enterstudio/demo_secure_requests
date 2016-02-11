(function() {

  return {
  	
  	requests: {   
    
      get: function() {
        return {
          url: 'http://requestb.in/pz5ou8pz?example={{setting.example}}',
          type: 'GET',
          dataType: 'json',
          secure: true,
	        headers: {
	          'X-Setting' : '{{setting.example}}'
	        }
        };
      },
    
      put: function() {
        return {
          url: 'http://requestb.in/pz5ou8pz',
          type: 'PUT',
          dataType: 'json',
          secure: true,
          data: JSON.stringify({
            "username" : '{{setting.username}}',
            "password" : '{{setting.password}}',
            "example"  : '{{setting.example}}'
          })
        };
      },
    
      post: function() {
        return {
          url: 'http://requestb.in/pz5ou8pz',
          type: 'POST',
          dataType: 'json',
          secure: true,
          data: JSON.stringify({
            "username" : '{{setting.username}}',
            "password" : '{{setting.password}}',
            "example"  : '{{setting.example}}'
          })
        };
      }

  	},

    events: {
    	
      // Framework events
      'app.activated' 		:'init',
      
      // DOM events
      'click .get'	  		:'handleClickGet',
      'click .put'	  		:'handleClickPut',
      'click .post'	      :'handleClickPost',
      'click .toggle-app' :'toggleAppContainer', // hide/show app container
      'click .home'				:'init'
    
    },

    init: function() {
    	this.switchTo('home');
    },

    handleClickGet: function() {
    	this.switchTo('loading');
    	services.notify('Making GET request');
      this.ajax('get')
        .done(function(data){
          services.notify('GET request completed!');
          this.switchTo('response', {
            get : true,
            response : '(done) Status: ' + data.status + ' ' + data.statusText
          });
          console.log('Response below:');
          console.log(data);
        })
        .fail(function(data){
          services.notify('GET request failed.');
          this.switchTo('response', {
            get : true,
            response : '(fail) Status: ' + data.status + ' ' + data.statusText
          });
          console.log('Response below:');
          console.log(data);
        });
    },
    
    handleClickPut: function() {
    	this.switchTo('loading');
    	services.notify('Making PUT request');
      this.ajax('put')
        .done(function(data){
          services.notify('PUT request completed!');
          this.switchTo('response', {
            put : true,
            response : '(done) Status: ' + data.status + ' ' + data.statusText
          });
          console.log('Response below:');
          console.log(data);
        })
        .fail(function(data){
          services.notify('PUT request failed.');
          this.switchTo('response', {
            put : true,
            response : '(fail) Status: ' + data.status + ' ' + data.statusText
          });
          console.log('Response below:');
          console.log(data);
        });
    },
    
    handleClickPost: function() {
    	this.switchTo('loading');
    	services.notify('Making POST request');
      this.ajax('post')
        .done(function(data){
          services.notify('POST request completed!');
          this.switchTo('response', {
            post : true,
            response : '(done) Status: ' + data.status + ' ' + data.statusText
          });
          console.log('Response below:');
          console.log(data);
        })
        .fail(function(data){
          services.notify('POST request failed.');
          this.switchTo('response', {
            post : true,
            response : '(fail) Status: ' + data.status + ' ' + data.statusText
          });
          console.log('Response below:');
          console.log(data);
        });
    },

  	toggleAppContainer: function() {
  		var $container = this.$('.app-container'),
  		$icon = this.$('.toggle-app i');
  		if ($container.is(':visible')){
  			$container.hide();
  			$icon.prop('class', 'icon-plus');
  		} else {
  			$container.show();
  			$icon.prop('class', 'icon-minus');
  		}
  	}

  };

}());