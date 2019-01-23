    // Fixed Button

    var vue_fixed_button = new Vue({
        el: '#fixed_button_table',
        data: {
			page_status: pageStatus,
        },
        methods: {
			majorBtnClicked: function() {
				if ( pageStatus.now_tab == 'table' ) {
					if ( ! pageStatus.table_locked ) {
						vue_classtable.tableConfirm();
					}
					this.switchLockStatus();
				}
				else {
					if ( ! pageStatus.windows.add_review ) {
						setWindow( 'add_review', 'open' );
					}
				}
			},
			minorBtnClicked: function() {
				if ( pageStatus.now_tab == 'table' ) {
					if ( ! pageStatus.table_locked ) {
						vue_classtable.tableGiveUp();
					}
					this.switchLockStatus();
				}
				else {
				}
			},
            switchLockStatus: function () {
                pageStatus.table_locked = ! pageStatus.table_locked ;
                if ( pageStatus.table_locked == true ) {
                    // 課表鎖定，進入儲存狀態
                    window.onbeforeunload = null;     
                }
                else {
                    // 課表未鎖定，進入編輯狀態
                    window.onbeforeunload = function(event){
                        event.returnValue = false;
                    }
                }
            }
        }
	})
	
