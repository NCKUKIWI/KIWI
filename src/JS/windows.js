

var vue_windows = new Vue({
	el: '#all_windows',
    data: {
		page_status: pageStatus,
	},
    methods: { 
        closeWindow: function( window ) {
            setWindow( window, 'close' );
        },
        oneMoreReview: function() {
            setWindow( 'add_review_success', 'close' );
            if ( checkLoggedIn() ) {
                setWindow( 'add_review', 'open' );
            }
        },
        giveUpReview: function() {
            vue_add_review.closeWindow();
            setWindow( 'add_review_give_up', 'close' );
        }
    }
})
