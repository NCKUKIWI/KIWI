

var vue_windows = new Vue({
	el: '#all_windows',
    data: {
		page_status: pageStatus,
	},
    methods: { 
        closeWindow: function( window ) {
            setWindow( window, 'close' );
            pageStatus.next_tab = '';
        },
        oneMoreReview: function() {
            setWindow( 'add_review_success', 'close' );
            setWindow( 'add_review', 'open' );
        },
        giveUpReview: function() {
            vue_add_review.closeWindow();
            setWindow( 'add_review_give_up', 'close' );
        },
        giveUpTable: function() {
            vue_fixed_button.minorBtnClicked();
            setWindow( 'edit_table_give_up', 'close' );
            toTab( pageStatus.next_tab );
            pageStatus.next_tab = '';
        }
    }
})
