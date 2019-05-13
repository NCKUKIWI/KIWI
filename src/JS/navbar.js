

var vue_nav_bar = new Vue({
	el: '#navbar',
    data: {
		search_keyword: '',
		result_cont: [],
		user_data: userData,
		page_status: pageStatus,
		mobile_status: 'default'
	},
	computed: {
		result: function () {
			this.result_cont = [];
      this.result_cont.length = 0;
      var text_to_find = search_format( this.search_keyword );
      if ( text_to_find ) {
        for ( var i = 0 ; i < course_db.length ; i ++ ) {
          var text_to_check_1 = search_format( course_db[i].課程名稱 );
          var text_to_check_2 = search_format( course_db[i].老師 );
          if ( text_to_check_1.match( text_to_find ) || text_to_check_2.match( text_to_find ) ) {
            var class_item = getClassObject ( course_db, course_db[i].id ) ;
            this.result_cont.push( class_item );
          }
        }
      }
      return ;
			// this.result_cont = [];
			// this.result_cont.length = 0;
			// if ( this.search_keyword ) {
			// 	for ( var i = 0 ; i < course_db.length ; i ++ ) {
			// 		// 預先排除特殊符號影響正規表達式の判斷
			// 		var text_to_check_1 = course_db[i].課程名稱 ;
			// 		var text_to_check_2 = course_db[i].老師 ;
			// 		var text_to_find = this.search_keyword ;
			// 		if ( getREValidText( text_to_find ) ) {
			// 			text_to_check_1 = getREValidText( text_to_check_1 );
			// 			text_to_check_2 = getREValidText( text_to_check_2 );
			// 			text_to_find = getREValidText( text_to_find );
			// 		}
			// 		if ( String( text_to_check_1 ).toUpperCase().match( text_to_find.toUpperCase() ) || String( text_to_check_2 ).match( text_to_find ) ) {
			// 			var class_item = getClassObject ( course_db, course_db[i].id ) ;
			// 				this.result_cont.push( class_item );
			// 		}
			// 	}
			// }
			// return ;
		}
	},
    methods: {
		switchTo: function ( tab ) {
			toTab( tab );
		},
		switchProfileWindow: function() {
			pageStatus.nav_profile_dropdown = ! pageStatus.nav_profile_dropdown;
		},
		openCourse: function(id) {
			vue_course_item.openCoursePage(id);
			vue_nav_bar.search_keyword = "";
		},
		logIn: function(){
			vue_nav_bar.user_name = userData.user_name;
		},
		open_helper: function() {
			setWindow('helper','open');
			getUserComment();
			// document.getElementById("helper_background").style.display = "block";
		},
		mobileNavStatus: function( status ) {
			if ( status == 'search') {
				this.mobile_status = 'search';
			}
			if ( status == 'drop' ) {
				vue_courseFilter.mobileNavStatus( 'drop' );
				vue_courseDarkScreen.mobileNavStatus( 'drop' );
				if ( this.mobile_status == 'drop' ) {
					this.mobile_status = 'default';
				}
				else {
					this.mobile_status = 'drop';
				}
			}
		}
	}
})
