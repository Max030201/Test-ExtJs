Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.container.Viewport',
  xtype: 'app-main',
  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',
    'Ext.panel.Panel',
    'MyApp.view.main.MainController',
    'MyApp.view.main.MainModel',
  ],
  controller: 'main',
  viewModel: 'main',
  layout: 'border',
  items: [{
    region: 'north',
    xtype: 'panel',
    height: 80,
    border: false,
    title: 'Интерфейс администратора', 
    titleAlign: 'center', 
    bodyStyle: {
      'background-color': '#f0f0f0'
    },
    items: [{
      xtype: 'toolbar',
      dock: 'top',
      items: [{
        text: 'Товары',
        handler: 'onProductsClick'
      },{
        text: 'Выход',
        handler: 'onLogoutClick'
      }]
    }]
  },{
    region: 'center',
    xtype: 'tabpanel',
    reference: 'mainTabs'
  }]
});