UI.registerHelper('isAdmin', function(context, options) {
  if (Meteor.user() && Meteor.user().profile && Meteor.user().admin) {
    return true;
  }
});

UI.registerHelper('checked', function(a, b) {
  if (a == b) {
    return "checked";
  }
});

UI.registerHelper('selected', function(a, b) {
  if (a == b) {
    return "selected";
  }
});
