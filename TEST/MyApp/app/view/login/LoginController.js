Ext.define('MyApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',
  onLoginClick: function() {
    var form = this.lookupReference('form');
    if (form.isValid()) {
      if (form.getValues().username === 'admin' && form.getValues().password === 'padmin') {
        this.getView().destroy();
        Ext.create('MyApp.view.main.Main');
      } else {
        Ext.Msg.alert('Ошибка', 'Неверные учетные данные');
      }
    }
  }
});