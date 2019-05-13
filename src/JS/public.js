


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
        messenger_code: "",
        now_wishlist: [],
        now_table: [],
        now_comment: [],

    }

    // 頁面顯示狀態

    var pageStatus = {
        initial_tab: 'course',
        now_tab: '',
        next_tab: '',                           // 若需暫停則暫存
        windows: {
            add_review: false,
            helper: false,
            not_login: false,
            add_review_success: false,
            add_review_give_up: false,
            edit_table_give_up: false,
            course_page: false,
            // 新的視窗加在這裡
        },
        table_locked: true,                     // 課表鎖定狀態
        nav_profile_dropdown: false,           // 個人選單下拉狀態
        loggedIn: false,
    }

    // 轉換目前頁面
    toTab( pageStatus.initial_tab );

    // 綁定點擊就複製的功能
    new Clipboard( "#helper_background .text_14" );

    // 開啟或關閉視窗
    // setWindow( 'add_review_success', 'open' );


    axios.get ( '/course/' )
        .then ( function ( response ) {
            course_db = response.data.courses;
            console.log ( '課程資料庫: 抓取資料成功！' ) ;
            getUserInfo ();
            // 將 course_db 放入
            var tmp = [];
            for (var i = 0; i < 200; i++) {
	            tmp.push(vue_course_item.course_data_db()[i]);
	        }
            vue_course_item.course_data = tmp.sort(function(a,b){return a-b});
	        for (var i in vue_course_item.course_data_db()) {
	            if (vue_course_item.course_data_db()[i].comment_num > 0) {
	                vue_course_item.course_with_comment.push(vue_course_item.course_data_db()[i]);
	            }
            }
        })
        .catch ( function ( error ) {
            console.log (  '課程資料庫:' + error ) ;
        });


    axios.get('/course/allDpmt')
        .then(function (response) {
            vue_courseFilter.dept = response.data;
            // 只要學院的代號，篩掉通識類
            for (var i in vue_courseFilter.dept) {
                if (!vue_courseFilter.dept[i].DepPrefix.match("A")) {
                    vue_register.depts.push(vue_courseFilter.dept[i].DepPrefix);
                }
            }
        })
        .catch(function (error) {
            console.log('axios error:' + error);
        });


    // Function ----------------------------------------------------------------


    // 切換顯示中頁面

    function toTab( tab ) {
        // 若未登入則無法進入頁面
        if ( tab == 'table' ) {
            if ( ! checkLoggedIn() ) {
                return 0 ;
            }
        }
        // 若課表正在編輯中
        if ( tab != 'table' && ! pageStatus.table_locked ) {
            pageStatus.next_tab = tab ;
            setWindow( 'edit_table_give_up', 'open' );
            return 0 ;
        }
        // 切換至目標頁面
        $( ".tab_div" ).hide();
        $( ".tab_div[name='" + tab + "']" ).show();
        pageStatus.now_tab = tab ;
        // 收起下拉選單
		pageStatus.nav_profile_dropdown = false;
    }


    // 開啟或關閉視窗

    function setWindow( window, status ) {
        // 若未登入則無法進入頁面
        if ( window == 'add_review' ) {
            if ( ! checkLoggedIn() ) {
                return 0 ;
            }
        }
        // status = open 開啟視窗, close 關閉視窗
        if ( status == 'open' ) { pageStatus.windows[ window ] = true ; }
        if ( status == 'close' ) { pageStatus.windows[ window ] = false ; }
    }


    // 設定通知訊息

    function setNotification( text, color ) {
        // color 預設為 'blue', 可填寫 'red' 或 'black'
        vue_notification.list.push( { text: text, status: 0, color: color } );
        var this_item = vue_notification.list[vue_notification.list.length-1];
        setTimeout( function(){ this_item.status = 1 ;  },   100 );
        setTimeout( function(){ this_item.status = 0 ;  },  1000 );
        setTimeout( function(){ this_item.status = -1 ; },  1900 );
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


    // 抓取登入資料

    function getUserInfo () {
        axios.get('/user/info').then(function(res){
            vue_loading.turnoff();
            pageStatus.loggedIn = true;
            userData.user_name = res.data.user.name;
            userData.user_id = res.data.user.id;
            userData.user_department = res.data.user.department;
            userData.user_grade = res.data.user.grade;
            userData.user_photo = "https://graph.facebook.com/" + res.data.user.fb_id + "/picture?type=normal";
            userData.user_email = res.data.user.email;
            toTab( pageStatus.initial_tab );
            setWindow ( 'not_login', 'close' );
            getWishlistTable();
            getUserComment();
        }).catch(function(err){
            vue_loading.turnoff();
            pageStatus.loggedIn = false;
            console.log(err.response.data);
        })
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
        if ( checkLoggedIn() ) {
            if ( ! userData.now_wishlist.find( function(i){ return i == target_id }) ){
                userData.now_wishlist.push( target_id );
                vue_wishlist.refresh();
                vue_courseFilter.refresh();
                setNotification ( '成功加入願望清單！', 'blue' );
                return wishlistUpload();
            }
            else {
                setNotification ( '此課程已在願望清單內！', 'red' );
            }
        }
    }


    // 課程移出願望清單

    function wishlistRemove ( target_id ) {
        if ( checkLoggedIn() ) {
            var index = userData.now_wishlist.indexOf( target_id );
            userData.now_wishlist.splice( index, 1 );
            vue_wishlist.wishlist_cont.splice( index, 1 );
            vue_courseFilter.wishlist_cont.splice( index, 1 );
            // setNotification ( '成功移出願望清單！' );
            return wishlistUpload();
        }
    }

    // 願望清單傳回資料庫

    function wishlistUpload () {
        axios.post('/post/setWish/'+ userData.user_id , {
            "now_wishlist": userData.now_wishlist
        })
        .then ( function ( response ) {
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
            console.log ( '更新課表: 更新成功！' ) ;
        })
        .catch ( function ( error ) {
            console.log (  '更新課表:' + error ) ;
        });
    }

    // 回傳使用者的心得數

    function getUserComment(){
        axios.get('/user/getHelperService').
        then(function(response){
            userData.now_comment = response.data.comment;
            userData.messenger_code = response.data.messenger_code;
        })
    }
