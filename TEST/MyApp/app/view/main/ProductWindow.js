Ext.define('MyApp.view.main.ProductWindow', {
  extend: 'Ext.window.Window',
  controller: 'main',
  xtype: 'product-window',
  modal: true,
  width: 400,
  autoShow: true,
  items: [{
    xtype: 'form',
    bodyPadding: 15,
    defaults: {
      xtype: 'textfield',
      width: '100%'
    },
    items: [{
      fieldLabel: 'ID',
      name: 'id',
      readOnly: true
    },{
      fieldLabel: 'Название',
      name: 'name',
      readOnly: true
    },{
      fieldLabel: 'Цена',
      name: 'price',
      xtype: 'numberfield',
      minValue: 0,
      decimalPrecision: 2,
      allowDecimals: true,
      step: 0.01,
      validator: function(value) {
        return value >= 0 ? true : 'Цена не может быть отрицательной';
      }
    },{
      fieldLabel: 'Кол-во',
      name: 'quantity',
      xtype: 'numberfield',
      minValue: 0,
      allowDecimals: false,
      step: 1,
      allowBlank: false,
      validator: function(value) {
        return value >= 0 ? true : 'Количество не может быть отрицательным';
      },
      listeners: {
        afterrender: function(field) {
          field.clearInvalid();
        }
      }
    }],
    buttons: [{
      text: 'Отмена',
      handler: function() {
        this.up('window').close();
      }
    },{
      text: 'Сохранить',
      handler: 'onSaveClick'
    }]
  }]
});
