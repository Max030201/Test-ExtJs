Ext.application({
  extend: 'MyApp.Application',
  name: 'MyApp',
  launch: function() {
    Ext.create('MyApp.view.login.Login').show();
  }
});
