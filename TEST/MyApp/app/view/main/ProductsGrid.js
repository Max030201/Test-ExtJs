Ext.define('MyApp.view.main.ProductsGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'products-grid',
  requires: [
    'MyApp.store.Products',
  ],
  bind: '{products}',
  columns: [{
    text: 'ID',
    dataIndex: 'id',
    width: 50
  },{
    text: 'Название',
    dataIndex: 'name',
    flex: 1,
    renderer: function(value) {
      return '<span style="color:blue;cursor:pointer">' + value + '</span>';
    }
  },{
    text: 'Описание',
    dataIndex: 'description',
    flex: 2
  },{
    text: 'Цена',
    dataIndex: 'price', 
    renderer: Ext.util.Format.numberRenderer('0.00')
  },{
    text: 'Кол-во',
    dataIndex: 'quantity',
    renderer: function(value, meta) {
      if (value === 0) meta.style = 'background-color:#FFCCCC';
      return value;
    }
  }],
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [{
      xtype: 'textfield',
      fieldLabel: 'Фильтр по ID',
      listeners: {
        specialkey: 'onIdFilterEnter'
      }
    },{
      xtype: 'textfield',
      fieldLabel: 'Фильтр по описанию',
      listeners: {
        specialkey: 'onDescFilterEnter'
      }
    }]
  }],
  listeners: {
    cellclick: 'onProductNameClick'
  }
});