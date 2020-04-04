var Messages = {
  messages: [],
  iterateMessages: function(data) {
    var html = '';
    for (var i = 0; i < data.results.length; i++) {
      html += MessageView.render(data.results[i]);
      $('#chats').append(html);
    }
  }
};