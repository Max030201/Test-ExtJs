Ext.define('MyApp.model.Product', {
  extend: 'MyApp.model.Base',
  fields: [
    {name: 'id', type: 'int'},
    {name: 'name', type: 'string'},
    {name: 'description', type: 'string'},
    {name: 'price', type: 'float'},
    {name: 'quantity', type: 'int'}
  ]
});