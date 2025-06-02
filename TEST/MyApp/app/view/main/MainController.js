Ext.define('MyApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',
  requires: [
    'MyApp.view.main.ProductWindow'
  ],
  onProductsClick: function() {
    var tabPanel = this.lookupReference('mainTabs');
    tabPanel.add({
      title: 'Товары ' + (tabPanel.items.length + 1),
      closable: true,
      items: [{
        xtype: 'products-grid'
      }]
    }).show();
  },
  onLogoutClick: function() {
    this.getView().destroy();
    Ext.create('MyApp.view.login.Login');
  },
  onIdFilterEnter: function(field, e) {
    if (e.getKey() === e.ENTER) {
      var grid = field.up('grid'),
          store = grid.getStore(),
          value = field.getValue();
      store.removeFilter('idFilter');
      if (value) {
        store.addFilter({
          id: 'idFilter',
          property: 'id',
          value: value,
          exactMatch: true
        });
      }
    }
  },
  onDescFilterEnter: function(field, e) {
    if (e.getKey() === e.ENTER) {
      var grid = field.up('grid'),
          store = grid.getStore(),
          value = field.getValue();
      store.removeFilter('descFilter');
      if (value) {
        store.addFilter({
          id: 'descFilter',
          property: 'description',
          value: value,
          anyMatch: true,
          caseSensitive: false
        });
      }
    }
  },
  onProductNameClick: function(grid, cell, cellIndex, record) {
    if (cellIndex === 1) {
      Ext.create('MyApp.view.main.ProductWindow', {
        title: record.get('name')
      }).down('form').loadRecord(record);
    }
  },
  onSaveClick: function(btn) {
    const form = btn.up('form'),
          record = form.getRecord(),
          values = form.getValues(),
          changedFields = Object.keys(values).filter(key => 
            values[key] != record.get(key)
          );
    if (changedFields.length === 0) {
      Ext.Msg.alert('Информация', 'Нет изменений для сохранения');
      return;
    }
    Ext.Msg.show({
      title: 'Подтверждение',
      message: `Изменились поля: ${changedFields.join(', ')}. Сохранить изменения?`,
      buttons: Ext.Msg.YESNO,
      icon: Ext.Msg.QUESTION,
      fn: choice => {
        if (choice !== 'yes') return;        
        const changes = {};
              changedFields.forEach(field => changes[field] = values[field]);
              record.set(changes);            
        this.updateRelatedComponents(record);
        Ext.toast('Данные обновлены', 3000);
        btn.up('window').close();
      }
    });
  },
  updateRelatedComponents: function(record) {
    Ext.ComponentQuery.query('products-grid').forEach(grid => {
      const view = grid.getView();
      const node = view.getNode(record);            
      if (node) {
        view.refreshNode(record);
      }
    });
  }
});