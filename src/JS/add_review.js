

var vue_add_review = new Vue({
	el: '#add_review',
    data: {
		page_status: pageStatus,
		course_title: '',
		course_semester: '選擇學期',
		course_teacher: '選擇開課教師',
		course_review: '',
		course_rate: {
			gain: 8,
			sweet: 8,
			cold: 8
		},
		course_title_suggestion: [],
		course_title_filled: '',
		course_semester_suggestion: [],
		isChoosingSemester: false,
		course_teacher_suggestion: [],
		isChoosingTeacher: false,
		window_status: '您的心得不會自動儲存，請確認送出後再關閉視窗。'
	},
	watch: {
		course_title: function () {
			if ( this.course_title != this.course_title_filled ) {
				this.isChoosingSemester = false ;
				this.isChoosingTeacher = false ;
				this.course_title_filled = '';
				this.course_title_suggestion.length = 0;
				if ( this.course_title ) {
					for ( var i = 0 ; i < course_prev_db.length ; i ++ ) {
						if ( course_prev_db[i].課程名稱.match ( this.course_title ) ) {
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
		chooseSemester: function () {
			if ( this.isChoosingSemester ) {
				this.isChoosingSemester = false ;
			}
			else {
				this.isChoosingSemester = true ;
				this.isChoosingTeacher = false ;
				this.course_semester_suggestion.length = 0;
				for ( var i = 0 ; i < course_prev_db.length ; i ++ ) {
					if ( course_prev_db[i].課程名稱.match ( this.course_title ) ) {
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
					if ( course_prev_db[i].課程名稱.match ( this.course_title ) && course_prev_db[i].semester == this.course_semester ) {
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
							}
						}
						else {
							this.course_teacher_suggestion.push( course_prev_db[i].老師 );
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
		fillTeacher: function ( val ) {
			this.isChoosingTeacher = false ;
			this.course_teacher = val;
		},
		giveRate: function ( item, value ) {
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
			if ( command == 'no_save' ) {
				this.window_status = '您的心得不會自動儲存，請確認送出後再關閉視窗。'
			}
		},
		sendReview: function () {
			if ( this.course_title_filled && this.course_semester != '選擇學期' && this.course_teacher != '選擇開課教師' ) {
				// todo: 把它寫完～
			}
		},
		giveUpReview: function () {
			this.closeWindow();
			// todo: 清除自動儲存的內容
		},
		closeWindow: function () {
			setWindow( 'add_review', 'close' );
		},
	}
})
