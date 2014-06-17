Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
        //Write app code here
        console.log("our first app");
        
        Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			listeners: {
				load: function(store, data, success) {
					//process data
					console.log("got data", store, data, success);
				}
			},
			fetch: ['Name', 'ScheduleState']
		});
    }
    
});
