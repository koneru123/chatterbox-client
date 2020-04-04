var Messages = {
  messages: [],
  iterateSingleMessage: function(data) {
    var html = '';
    //for (var i = 0; i < data.results.length; i++) {
    html += MessageView.render(data);
    $(html).appendTo('#chats');
    //}
  },
  iterateMessages: function(data) {
    var html = '';
    for (var i = 0; i < data.results.length; i++) {
      if (!data.results[i].username || !data.results[i].text || (data.results[i].text.includes('<audio controls autoplay loop>')) || (data.results[i].text.includes('<alert>'))) {
        return;
      }
      html += MessageView.render(data.results[i]);
      $('#chats').append(html);
    }
  }
};