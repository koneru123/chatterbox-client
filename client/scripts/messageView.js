var MessageView = {

  render: _.template(
    "<div class='individualMessages'>" +
    "<span class='username'>" + "<%= username %>" + "</span>" +
    "<span class='text'>" + "<%= text %>" + "</span>" +
    "<span class='timeCreated'>" + "<%= createdAt %>" + "</span>" +
    "</div>"
  )
};