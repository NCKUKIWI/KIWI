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
                if ( pageStatus.table_locked == true ) {
					// 鎖定狀態，擅自關閉不會跳警告
                    window.onbeforeunload = null;
                }
                else {
					// 編輯狀態，擅自關閉會跳警告
                    window.onbeforeunload = function() {
                        return '課表尚未儲存。您要放棄目前變更並且離開此頁嗎？';
					}
                }
            }
        }
	})
	
