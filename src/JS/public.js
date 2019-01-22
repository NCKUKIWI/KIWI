


    // Data----------------------------------------------------------------

    // 課程資料

    var course_db = [];

    // 使用者資料

    var userData = {
    	user_id: 0,
        user_name: '訪客貓咪',
        user_photo: 'dist/images/course/sad_hugecat.png',        // todo: 取得正確圖片
        user_department: '無',
        user_grade: '無',
        credit_count: 9,                                    // todo: 讓他可以用計算ㄉ
        now_wishlist: [],
        now_table: []
    }

    // 頁面顯示狀態

    var pageStatus = {
        initial_tab: 'course',
        now_tab: '',
        table_locked: true,
        loggedIn: false,
    }

    changeTab( pageStatus.initial_tab );

    


    axios.get ( '/course/' )
        .then ( function ( response ) {
            course_db = response.data.courses;
            console.log ( '課程資料庫: 抓取資料成功！' ) ;
            if(response.data.user_data !== undefined) {
                // 取得使用者資料               // todo: 之後要往外移  
                pageStatus.loggedIn = true;  
            	userData.user_name = response.data.user_data[0].name;
                userData.user_id = response.data.user_data[0].id;
                userData.user_department = response.data.user_data[0].department;
                userData.user_grade = response.data.user_data[0].grade;
                userData.user_photo = "http://graph.facebook.com/" + response.data.user_data[0].fb_id + "/picture?type=normal";
                getWishlistTable();
            }
            // 將 course_db 放入
	        for (var i = 0; i < 200; i++) {
	            vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
	        }
	        for (var i in vue_course_item.course_data_db()) {
	            if (vue_course_item.course_data_db()[i].comment_num > 0) {
	                vue_course_item.course_with_comment.push(vue_course_item.course_data_db()[i]);
	            }
            }
            // todo: 每次登入都要重新開始
        })
        .catch ( function ( error ) {
            console.log (  '課程資料庫:' + error ) ;
        });


    axios.get ( '/course/allDpmt' )
        .then ( function ( response ) {
	        vue_courseFilter.dept = response.data;
        })
        .catch ( function ( error ) {
            console.log (  'axios error:' + error ) ;
        });


    // Function ----------------------------------------------------------------


    // 切換顯示中頁面

    function changeTab( tab ) {
        pageStatus.now_tab = tab ;
        // 切換頁面
        $( ".tab_div" ).hide();
        $( ".tab_div[name='" + tab + "']" ).show();
        // 切換 Navbar 顯示
        $( ".nav_link" ).removeClass( "on" );
        $( ".nav_link[name='" + tab + "']" ).addClass( "on" );
        // 取消個人選單顯示
        $( ".nav_link[name='profile']" ).removeClass( "on" );
        $( ".hub_navbar__profile__dropdown" ).removeClass( "on" );
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
                vue_wishlist.refresh();                     // todo: 遇到值改變直接 refresh
                vue_courseFilter.refresh();
                vue_classtable.initialize();
            })
            .catch ( function ( error ) {
                console.log (  '願望清單及課表: ' + error ) ;
            });
    }


    // 課程加入願望清單

    function wishlistAdd ( target_id ) {
        userData.now_wishlist.push( target_id );
        vue_wishlist.refresh();
        vue_courseFilter.refresh();
        return wishlistUpload();
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