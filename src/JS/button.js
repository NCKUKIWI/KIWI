    // Fixed Button

    var vue_fixed_button = new Vue({
        el: '#fixed_button_table',
        data: {
			page_status: pageStatus,
        },
        methods: {
			majorBtnClicked: function() {
				if ( pageStatus.now_tab == 'table' ) {
					if ( pageStatus.table_locked ) {
						vue_classtable.tableStartEdit();
					}
					else {
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
						this.switchLockStatus();
					}
				}
				else {
				}
			},
            switchLockStatus: function () {
				pageStatus.table_locked = ! pageStatus.table_locked ;
				// 課表已鎖定狀態
                if ( pageStatus.table_locked == true ) {
					window.onbeforeunload = null;
					vue_quick_search.clearFilter();
					vue_classtable.refresh();
				}
				// 課表未鎖定狀態
                else {
                    window.onbeforeunload = function() {
                        return '課表尚未儲存。您要放棄目前變更並且離開此頁嗎？';
					}
                }
            }
        }
	})
	
