Ext.define('MyApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',
  requires: [
    'MyApp.view.login.LoginController'
  ],
  controller: 'login',
  title: 'Авторизация',
  closable: false,
  width: 400,
  autoShow: true,
  items: {
    xtype: 'form',
    reference: 'form',
    bodyPadding: 15,
    items: [{
      xtype: 'textfield',
      name: 'username',
      fieldLabel: 'Логин',
      allowBlank: false
    },{
      xtype: 'textfield',
      name: 'password',
      inputType: 'password',
      fieldLabel: 'Пароль',
      allowBlank: false
    }],
    buttons: [{
      text: 'Вход',
      formBind: true,
      handler: 'onLoginClick'
    }]
  }
});