var MessageView = {

  render: _.template(
    "<div class='individualMessages'>" +
    "<div class='username'>" + "<%= username %>" + "</div>" +
    "<div class='text'>" + "<%= text %>" + "</div>" +
    "<div class='timeCreated'>" + "<%= createdAt %>" + "</div>" +
    "</div>"
  )
};