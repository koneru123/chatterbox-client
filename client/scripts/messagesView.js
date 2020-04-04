var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {
    console.log('message view data: ', data);
  },

  render: function(data) {
    var html = '';
    for (var i = 0; i < data.results.length; i++) {
      html += MessageView.render(data.results[i]);
    }
    $('#chat').append(html);
  }

};