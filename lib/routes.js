Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('acts') && Meteor.subscribe('users');
  }
});


Router.map(function() {
    this.route('index', {
      path: '/',
      data: function() {

      }
    });
});
