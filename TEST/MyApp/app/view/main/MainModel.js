Ext.define('MyApp.view.main.MainModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.main',
  requires: [
    'MyApp.store.Products'
  ],
  stores: {
    products: {
      type: 'products'
    }
  }
});
