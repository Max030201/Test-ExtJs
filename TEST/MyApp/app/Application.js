Ext.define('MyApp.Application', {
  extend: 'Ext.app.Application',
  name: 'MyApp',
  requires: [
    'Ext.plugin.Viewport',
    'MyApp.store.Products'
  ],
  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true
    }
  },
  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
