

var vue_windows = new Vue({
	el: '#all_windows',
    data: {
		page_status: pageStatus,
	},
    methods: { 
        closeWindow: function( window ) {
            setWindow( window, 'close' );
        }
    }
})
