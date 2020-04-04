var App = {

  $spinner: $('.spinner img'),

  username: 'TestApp',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // this call initialize method is formView which handles form submittion
    FormView.initialize();

    // currently it is an empty function
    RoomsView.initialize();

    // This is also an empty function for now
    MessagesView.initialize(App.fetch());

    // Fetch initial batch of messages
    App.startSpinner();

    // invokes fetch method
    // to the fetch method it is passing stopspinner method as callback
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      console.log('app.js', data);
      console.log(data.results[0].username);
      console.log(data.results[0].text);
      console.log(data.results[0].createdAt);
      Messages.iterateMessages(data);

      callback();
      return data;
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  // stopspinner method invokes JQuery fadeout method, which hides the matched elements by fading them to transparent.
  // The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.
  //
  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
