

var vue_add_review = new Vue({
	el: '#add_review',
    data: {
		page_status: pageStatus,
		course_title: '',
		course_semester: '選擇學期',
		course_teacher: '選擇開課教師',
		course_review: '',
		course_dept: '',
		course_rate: {
			gain: "",
			sweet: "",
			cold: ""
		},
		course_title_suggestion: [],
		course_title_filled: '',
		course_semester_suggestion: [],
		isChoosingSemester: false,
		course_teacher_suggestion: [],
		isChoosingTeacher: false,
		course_dept_suggestion: [],
		window_status: '心得最低需求 50 字，請填寫完畢後按下送出。'
	},
	watch: {
		course_title: function () {
			if ( this.course_title != this.course_title_filled ) {
				// 初始化
				this.isChoosingSemester = false ;
				this.isChoosingTeacher = false ;
				this.course_title_filled = '';
				this.course_title_suggestion.length = 0;
				if ( this.course_title ) {
					for ( var i = 0 ; i < course_prev_db.length ; i ++ ) {
						// 預先排除特殊符號影響正規表達式の判斷
						var text_to_check = course_prev_db[i].課程名稱 ;
						var text_to_find = this.course_title ;
						if ( getREValidText( text_to_find ) ) {
							text_to_check = getREValidText( text_to_check );
							text_to_find = getREValidText( text_to_find );
						}
						if ( String( text_to_check ).toUpperCase().match ( text_to_find.toUpperCase() )) {
							// 檢查本課程名稱是否已顯示在 dropdown
							if ( this.course_title_suggestion.length ) {
								var ifRepeated = false ;
								for ( var j = 0 ; j < this.course_title_suggestion.length ; j ++ ) {
									if ( course_prev_db[i].課程名稱 == this.course_title_suggestion[j] ) {
										ifRepeated = true ;
										break ;
									}
								}
								if ( ! ifRepeated ) {
									this.course_title_suggestion.push( course_prev_db[i].課程名稱 );
								}
							}
							else {
								this.course_title_suggestion.push( course_prev_db[i].課程名稱 );
							}
						}
					}
					this.course_title_suggestion.sort();
				}
			}
		}
	},
    methods: {
		clearFilled: function() {
			this.course_title = '';
			this.course_semester = '選擇學期';
			this.course_teacher = '選擇開課教師';
			this.course_review = '';
			this.course_rate.gain = '';
			this.course_rate.sweet = '';
			this.course_rate.cold = '';
			this.course_dept = '';
			this.course_title_suggestion.length = 0;
			this.course_title_filled = '';
			this.course_semester_suggestion.length = 0;
			this.isChoosingSemester = false;
			this.course_teacher_suggestion.length = 0;
			this.course_dept_suggestion.length = 0;
			this.isChoosingTeacher = false;
			console.log( "清乾淨啦～" );
		},
		chooseSemester: function () {
			if ( this.isChoosingSemester ) {
				this.isChoosingSemester = false ;
			}
			else {
				this.isChoosingSemester = true ;
				this.isChoosingTeacher = false ;
				this.course_semester_suggestion.length = 0;
				for ( var i = 0 ; i < course_prev_db.length ; i ++ ) {
					// 預先排除特殊符號影響正規表達式の判斷
					var text_to_check = course_prev_db[i].課程名稱 ;
					var text_to_find = this.course_title ;
					if ( getREValidText( text_to_find ) ) {
						text_to_check = getREValidText( text_to_check );
						text_to_find = getREValidText( text_to_find );
					}
					if ( String( text_to_check ).toUpperCase().match ( text_to_find.toUpperCase() )) {
						if ( this.course_semester_suggestion.length ) {
							var ifRepeated = false ;
							for ( var j = 0 ; j < this.course_semester_suggestion.length ; j ++ ) {
								if ( course_prev_db[i].semester == this.course_semester_suggestion[j] ) {
									ifRepeated = true ;
									break ;
								}
							}
							if ( ! ifRepeated ) {
								this.course_semester_suggestion.push( course_prev_db[i].semester );
							}
						}
						else {
							this.course_semester_suggestion.push( course_prev_db[i].semester );
						}
					}
				}
				this.course_semester_suggestion.sort();
				this.course_semester_suggestion.reverse();
			}
		},
		chooseTeacher: function () {
			if ( this.isChoosingTeacher ) {
				this.isChoosingTeacher = false ;
			}
			else {
				this.isChoosingTeacher = true ;
				this.isChoosingSemester = false ;
				this.course_teacher_suggestion.length = 0;
				for ( var i = 0 ; i < course_prev_db.length ; i ++ ) {
					// 預先排除特殊符號影響正規表達式の判斷
					var text_to_check = course_prev_db[i].課程名稱 ;
					var text_to_find = this.course_title ;
					if ( getREValidText( text_to_find ) ) {
						text_to_check = getREValidText( text_to_check );
						text_to_find = getREValidText( text_to_find );
					}
					if ( String( text_to_check ).toUpperCase().match ( text_to_find.toUpperCase() ) && course_prev_db[i].semester == this.course_semester ) {
						if ( this.course_teacher_suggestion.length ) {
							var ifRepeated = false ;
							for ( var j = 0 ; j < this.course_teacher_suggestion.length ; j ++ ) {
								if ( course_prev_db[i].老師 == this.course_teacher_suggestion[j] ) {
									ifRepeated = true ;
									break ;
								}
							}
							if ( ! ifRepeated ) {
								this.course_teacher_suggestion.push( course_prev_db[i].老師 );
								this.course_dept_suggestion.push( course_prev_db[i].系號 );
							}
						}
						else {
							this.course_teacher_suggestion.push( course_prev_db[i].老師 );
							this.course_dept_suggestion.push( course_prev_db[i].系號 );
						}
					}
				}
				this.course_teacher_suggestion.sort();
			}
		},
		fillTitle: function ( val ) {
			this.course_title = val;
			this.course_title_filled = val;
			this.course_semester = '選擇學期';
			this.course_teacher = '選擇開課教師';
		},
		fillSemester: function ( val ) {
			this.isChoosingSemester = false ;
			if ( val != this.course_semester ) {
				this.course_semester = val;
				this.course_teacher = '選擇開課教師';
			}
		},
		fillTeacher: function ( val, index ) {
			this.isChoosingTeacher = false ;
			this.course_teacher = val;
			this.course_dept = this.course_dept_suggestion[index];
		},
		giveRate: function ( item, value ) {
			if(this.course_rate[item] == "") this.course_rate[item] = 5;
			value =  parseInt( value );
			if ( this.course_title_filled && this.course_semester != '選擇學期' && this.course_teacher != '選擇開課教師' ) {
				if ( !( value > 0 && this.course_rate[item] == 10 ) && !( value < 0 && this.course_rate[item] == 1 ) ) {
					this.course_rate[item] += value ;
				}
			}
		},
		closeDropdowns: function () {
			this.isChoosingSemester = false;
			this.isChoosingTeacher = false;
		},
		changeStatus: function ( command ) {
			if ( command == 'gain' ) {
				this.window_status = '可填 1-10 分，高分表示該課程「上課收穫很多」。'
			}
			if ( command == 'sweet' ) {
				this.window_status = '可填 1-10 分，高分表示該課程「上課給分較高」。'
			}
			if ( command == 'cold' ) {
				this.window_status = '可填 1-10 分，高分表示該課程「上課較為輕鬆」。'
			}
			if ( command == 'default' ) {
				this.window_status = '心得最低需求 50 字，請填寫完畢後按下送出。'
			}
		},
		sendReview: function () {
			if ( this.course_title_filled && this.course_semester != '選擇學期' && this.course_teacher != '選擇開課教師' ) {
				axios.post('/post/create/' , {
					'course_name': this.course_title,
					'teacher': this.course_teacher,
					'semester': this.course_semester,
					'comment': this.course_review,
					'sweet': this.course_rate.sweet,
					'cold': this.course_rate.cold,
					'got': this.course_rate.gain,
					'catalog': this.course_dept
				})
				.then ( function ( response ) {
					if(response.data == 'success'){
						setWindow( 'add_review_success', 'open' );
						vue_add_review.closeWindow();
					}else{
						setNotification ( response.data[0].msg, 'red' );
					}
				})
				.catch ( function ( error ) {
					console.log (  '送出心得: ' + error ) ;
				});
			}
		},
		giveUpReview: function () {
			if ( this.course_title_filled && this.course_semester != '選擇學期' && this.course_teacher != '選擇開課教師' ) {
				setWindow( 'add_review_give_up', 'open' );
			}
			else {
				this.closeWindow();
			}
		},
		closeWindow: function () {
			setWindow( 'add_review', 'close' );
			this.clearFilled();
		},
	}
})
