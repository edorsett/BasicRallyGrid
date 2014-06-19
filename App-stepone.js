var myApp = Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
        //Write app code here
        console.log("my first app");
        
   var myStore = Ext.create('Rally.data.wsapi.Store', {
    model: 'User Story',
    autoLoad: true,
    listeners: {
        load: function(store, data, success) {
            //process data
            console.log("got my data", myStore, data, success);
            
            var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: myStore,
            columnCfgs: [
            'FormattedID', 'Name', 'ScheduleState'
            ]
 });
 
		 console.log("my grid", myGrid);
		 this.add(myGrid);
        console.log("what is this?", this);
            
        },
        scope: this
    },
    fetch: ['FormattedID', 'Name', 'ScheduleState']
});     

    }
    
});
