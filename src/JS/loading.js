
    var vue_loading = new Vue({
        el: '#loading_page',
        data: {
			loading_status: 2,
        },
        methods: {
            turnoff: function() {
                setTimeout( function(){ vue_loading.loading_status = 1 ; },   1000 );
                setTimeout( function(){ vue_loading.loading_status = 0 ;  },  2500 );
            }
        }
	})