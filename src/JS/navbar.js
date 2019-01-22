var vue_nav_bar = new Vue({
	el: '#navbar',
    data: {
		now_tab : '',
		search_keyword: '',
		result_cont: [],
		user_data: userData,
	},
	created: function() {
		var initial_tab = 'register';
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
    		$( ".tab_div" ).hide();
			$( ".tab_div[name='" + tab + "']" ).show();
			// 切換 Navbar 顯示
    		$( ".nav_link" ).removeClass( "on" );
			$( ".nav_link[name='" + tab + "']" ).addClass( "on" );
			// 取消個人選單顯示
			$( ".nav_link[name='profile']" ).removeClass( "on" );
			$( ".hub_navbar__profile__dropdown" ).removeClass( "on" );
		},
		switch_profile_window: function() {
			// todo: 寫起來怪怪的，有空再調整一下？
			if ( now_tab != 'profile' ) {
				$( ".nav_link[name='profile']" ).toggleClass( "on" );
			}
			$( ".hub_navbar__profile__dropdown" ).toggleClass( "on" );
		},
		openCourse: function(id) {
			vue_courseContent.isShow = true;
			vue_course_item.openCoursePage(id);
			vue_nav_bar.search_keyword = "";
		},
		logIn: function(){
			vue_nav_bar.user_name = userData.user_name;
		},
		open_helper: function() {
			// document.getElementById("helper_background").style.display = "block";
		}
	}
})
