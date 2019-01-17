var vue_nav_bar = new Vue({
	el: '#navbar',
    data: {
		now_tab : '',
		search_keyword: '',
		result_cont: [],
		user_name: '訪客',
		user_department: '',
		user_grade: '',
	},
	created: function() {
		var initial_tab = 'course';
		this.change_tab( initial_tab );
	},
	computed: {
		result: function () {
			this.result_cont = [];
			this.result_cont.length = 0;
			if ( this.search_keyword ) {
				for ( var i = 0 ; i < course_db.length ; i ++ ) {           // todo: 讓已經在 table 或 wishlist 的課程不顯示
					if ( course_db[i].課程名稱.match ( this.search_keyword ) || course_db[i].老師.match ( this.search_keyword ) ) {
						var class_item = getClassObject ( course_db, course_db[i].id ) ;
						if ( getTimeObject ( class_item ) ) {
							this.result_cont.push( class_item );
						}
					}
				}
			}
			return ;
		}
	},
    methods: {
    	change_tab: function( tab ) {
			now_tab = tab ;
			// 切換頁面
    		$( ".change_tab" ).hide();
			$( ".change_tab[name='" + tab + "']" ).show();
			// 切換 Navbar 顯示
    		$( ".nav_link" ).removeClass( "on" );
			$( ".nav_link[name='" + tab + "']" ).addClass( "on" );
			// 取消個人選單顯示
			$( ".nav_link[name='profile']" ).removeClass( "on" );
			$( ".hub_navbar__profile__dropdown" ).removeClass( "on" );
		},
		switch_profile_window: function() {
			// todo: 切換用起來怪怪的，有空再調整一下？
			if ( now_tab != 'profile' ) {
				$( ".nav_link[name='profile']" ).toggleClass( "on" );
			}
			$( ".hub_navbar__profile__dropdown" ).toggleClass( "on" );
		},
		openCourse: function(id) {
			vue_courseContent.isShow = true;
			vue_course_item.openCoursePage(id);
		},
		logIn: function(){
			vue_nav_bar.user_name = vue_user_data.user_name;
		}
	}
})

	// methods: {
	// 	filterMode: function ( command, filter_day, filter_time ) {
	// 		if ( command == 'on' ) {
	// 			this.keyword = '正在篩選：[' + textTransDay(filter_day) + ']' + filter_time ;
	// 			this.filter_status = true ;
	// 			this.title_text = '篩選時段';
	// 		}
	// 		else if ( command == 'off' ) {
	// 			this.keyword = '';
	// 			this.filter_status = false ;
	// 			this.title_text = '快速添加';
	// 		}
	// 	},
	// 	clearFilter: function () {
	// 		if ( this.filter_status ) {
	// 			this.filterMode( "off" );
	// 			vue_classtable.clearFilterCell();
	// 			vue_wishlist.clearFilter();
	// 		}
	// 	},
	// 	switchLockStatus: function () {
	// 		this.class_table_locked = ! this.class_table_locked;
	// 	}
	// }
