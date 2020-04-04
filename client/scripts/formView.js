var FormView = {

  $form: $('form'),

  initialize: function(data) {

    //console.log('priya', data);
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    debugger;
    // Stop the browser from submitting the form
    var inputMessage = {
      'text' : $('#message').val(),
      'username': App.username,
      'roomname': 'mainroom'
    };

    Parse.create(inputMessage);
    //App.fetch();
    //Messages.iterateSingleMessage(inputMessage);

    event.preventDefault();

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};