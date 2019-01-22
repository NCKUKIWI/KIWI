

var vue_nav_bar = new Vue({
	el: '#navbar',
    data: {
		search_keyword: '',
		result_cont: [],
		user_data: userData,
	},
	computed: {
		result: function () {
			this.result_cont = [];
			this.result_cont.length = 0;
			if ( this.search_keyword ) {
				for ( var i = 0 ; i < course_db.length ; i ++ ) {           // todo: 讓已經在 table 或 wishlist 的課程不顯示(或做標記)
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
		switchTo: function ( tab ) {
			changeTab( tab );
		},
		switchProfileWindow: function() {
			if ( pageStatus.now_tab != 'profile' ) {
				$( ".nav_link[name='profile']" ).toggleClass( "on" );
			}
			$( ".hub_navbar__profile__dropdown" ).toggleClass( "on" );
		},
		openCourse: function(id) {
			vue_nav_bar.change_tab('course');
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
