


    // Data----------------------------------------------------------------

    // 本學期課程資料

    var course_db = [];


    // 過往課程資料

    var course_prev_db = [];

    axios.get ( '/course/allCoursePrev' )
        .then ( function ( response ) {
            course_prev_db = response.data;
        })
        .catch ( function ( error ) {
            console.log (  'axios error:' + error ) ;
        });



    // 使用者資料

    var userData = {
    	user_id: 0,
        user_name: '訪客貓咪',
        user_photo: 'dist/images/course/sad_hugecat.png',
        user_department: '無',
        user_grade: '無',
        user_email: '',
        now_wishlist: [],
        now_table: []
    }

    // 頁面顯示狀態

    var pageStatus = {
        initial_tab: 'course',
        now_tab: '',
        windows: {
            add_review: false,
            helper: false,
            not_login: false,
            add_review_success: false,
            add_review_give_up: false,
            // 新的視窗加在這裡
        },
        table_locked: true,                     // 課表鎖定狀態
        nav_profile_dropdown: false,           // 個人選單下拉狀態
        loggedIn: false,
    }

    // 轉換目前頁面
    toTab( pageStatus.initial_tab );

    // 開啟或關閉視窗
    // setWindow( 'not_login', 'open' );

    // 抓取登入資料
    axios.get('/user/info').then(function(res){
        if (res.data.user.department == '無' || res.data.user.grade == '無'){
            toTab('register');
            vue_register.old_user_login();
            return; // 登入後沒有填完資料的話還是停留在註冊頁
        }
        else if (res.data.user.department == 'new' || res.data.user.grade == 'new'){
            toTab('register');
            vue_register.new_user_login();
            return; // 登入後沒有填完資料的話還是停留在註冊頁
        }
        toTab( pageStatus.initial_tab );
        pageStatus.loggedIn = true;
        userData.user_name = res.data.user.name;
        userData.user_id = res.data.user.id;
        userData.user_department = res.data.user.department;
        userData.user_grade = res.data.user.grade;
        userData.user_photo = "http://graph.facebook.com/" + res.data.user.fb_id + "/picture?type=normal";
        userData.user_email = res.data.user.email;
        getWishlistTable();
    }).catch(function(err){
        console.log(err);
        pageStatus.loggedIn = false;
        console.log(err.response.data);
    })



    axios.get ( '/course/' )
        .then ( function ( response ) {
            course_db = response.data.courses;
            console.log ( '課程資料庫: 抓取資料成功！' ) ;
            // 檢查資料是否皆合格（看這裡）
            userData.now_wishlist = checkValid( userData.now_wishlist );
            userData.now_table = checkValid( userData.now_table );
            wishlistUpload();
            tableUpload();
            // 將 course_db 放入
	        for (var i = 0; i < 200; i++) {
	            vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
	        }
	        for (var i in vue_course_item.course_data_db()) {
	            if (vue_course_item.course_data_db()[i].comment_num > 0) {
	                vue_course_item.course_with_comment.push(vue_course_item.course_data_db()[i]);
	            }
            }
        })
        .catch ( function ( error ) {
            console.log (  '課程資料庫:' + error ) ;
        });


    axios.get ( '/course/allDpmt' )
        .then ( function ( response ) {
	        vue_courseFilter.dept = response.data;
          for(var i in vue_courseFilter.dept) {
            if (!vue_courseFilter.dept[i].DepPrefix.match("A")){
              vue_register.depts.push(vue_courseFilter.dept[i].DepPrefix);
            }
          }
        })
        .catch ( function ( error ) {
            console.log (  'axios error:' + error ) ;
        });


    // Function ----------------------------------------------------------------


    // 切換顯示中頁面

    function toTab( tab ) {
        // 切換頁面
        $( ".tab_div" ).hide();
        $( ".tab_div[name='" + tab + "']" ).show();
        pageStatus.now_tab = tab ;
        // 收起下拉選單
		pageStatus.nav_profile_dropdown = false;
    }


    // 開啟或關閉視窗

    function setWindow( window, status ) {
        // status = open 開啟視窗, close 關閉視窗
        if ( status == 'open' ) { pageStatus.windows[ window ] = true ; }
        if ( status == 'close' ) { pageStatus.windows[ window ] = false ; }
    }


    // 檢查是否已登入，並跳出登入提示框

    function checkLoggedIn () {
        if ( pageStatus.loggedIn ) {
            return 1;
        }
        else {
            setWindow( 'not_login', 'open' );
            return 0;
        }
    }



    // 取得使用者課表、願望清單資訊

    function getWishlistTable() {
        axios.get ( '/user/getList/' + userData.user_id )
            .then ( function ( response ) {
                console.log ( '願望清單及課表：抓取成功！' ) ;
                // 檢查資料是否皆合格
                userData.now_wishlist = checkValid( response.data.now_wishlist );
                userData.now_table = checkValid( response.data.now_table );
                wishlistUpload();
                tableUpload();
                vue_wishlist.refresh();
                vue_courseFilter.refresh();
                vue_classtable.initialize();
            })
            .catch ( function ( error ) {
                console.log (  '願望清單及課表: ' + error ) ;
            });
    }


    // 課程加入願望清單

    function wishlistAdd ( target_id ) {
        if ( ! userData.now_wishlist.find( function(i){ return i == target_id }) ){
            userData.now_wishlist.push( target_id );
            vue_wishlist.refresh();
            vue_courseFilter.refresh();
            return wishlistUpload();
        }
    }


    // 課程移出願望清單

    function wishlistRemove ( target_id ) {
        var index = userData.now_wishlist.indexOf( target_id );
        userData.now_wishlist.splice( index, 1 );
        vue_wishlist.wishlist_cont.splice( index, 1 );
        vue_courseFilter.wishlist_cont.splice( index, 1 );
        return wishlistUpload();
    }

    // 願望清單傳回資料庫

    function wishlistUpload () {
        axios.post('/post/setWish/'+ userData.user_id , {
            "now_wishlist": userData.now_wishlist
        })
        .then ( function ( response ) {
            // alert( '等等！有人在動清單！' );
            console.log ( '更新願望清單: 更新成功！' ) ;
        })
        .catch ( function ( error ) {
            console.log (  '更新願望清單:' + error ) ;
        });
    }


    // 課表傳回資料庫

    function tableUpload () {
        axios.post('/post/setTable/'+ userData.user_id , {
            "now_table": userData.now_table
        })
        .then ( function ( response ) {
            // alert( '等等！有人在動課表！' );
            console.log ( '更新課表: 更新成功！' ) ;
        })
        .catch ( function ( error ) {
            console.log (  '更新課表:' + error ) ;
        });
    }
