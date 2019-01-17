


    /*
        函數：
            1. 課程加入願望清單：  vue_user_data.wishlistAdd( id );
            2. 課程移出願望清單：  vue_user_data.wishlistRemove( id );
            3. 課程加入課表：       vue_user_data.tableAdd( id );
            4. 課程移出課表：       vue_user_data.tableRemove( id );

        注意：
            1. 任何需要用到 ajax 內容的 function 都必須寫在 ajax 完成後，否則會出錯。

    */



    // Get Course Data

    var course_db = [];
    var user_id = '5';                                       // todo: 從登錄狀態取得


    axios.get ( '/course/' )
        .then ( function ( response ) {
            course_db = response.data.courses;
            console.log ( '課程資料庫: 抓取資料成功！' ) ;
            if(response.data.user_data !== undefined) {
            	console.log(response.data.user_data[0]);
            	console.log(response.data.user_data[0].name);
            	vue_user_data.user_name = response.data.user_data[0].name;
            	vue_nav_bar.logIn();
            }
            vue_user_data.getData( user_id );                 // todo: 每次登入都要重新開始
            // vue_course_item.refresh();
        })
        .catch ( function ( error ) {
            console.log (  '課程資料庫:' + error ) ;
        });






    // User Data

    var vue_user_data = new Vue ({
        el: '#user_data',
        data: {
            user_name: '',
            user_photo: 'dist/images/table/profile.png',        // todo: 取得正確圖片
            credit_count: 9,                                    // todo: 讓他可以用計算ㄉ
            now_wishlist: [],
            now_table: [],
        },
        methods: {
            getData: function( user_id ) {
                var user_data = {} ;
                axios.get ( '/user/getList/'+ user_id )
                    .then ( function ( response ) {
                        user_data = response.data ;
                        console.log ( '使用者資料: 抓取資料成功！' ) ;
                        vue_user_data.fillData( user_data ) ;
                    })
                    .catch ( function ( error ) {
                        console.log (  '使用者資料:' + error ) ;
                    });
            },
            fillData: function ( user_data ) {
                // 初始化用資料
                this.user_name = user_data.name;
                // this.user_photo = user_data.photo;          // todo: 取得圖片
                // this.credit_count = 0;                      // todo 計算學分數

                // 篩選合格且不重複者填入願望清單
                this.now_wishlist.length = 0;           // todo: 篩選完成後把 this.now_wishlist 存回資料庫
                for ( var i = 0 ; i < user_data.now_wishlist.length ; i ++ ) {
                    if ( getClassObject ( course_db, user_data.now_wishlist[i] ) ) {
                        var ifRepeated = this.now_wishlist.find( function ( item ) {
                            return item == user_data.now_wishlist[i]
                        });
                        if ( !ifRepeated ) {
                            this.now_wishlist.push( user_data.now_wishlist[i] );
                        }
                    }
                }
                vue_wishlist.refresh();
                vue_courseFilter.refresh();

                // 篩選合格且不重複者填入課表
                this.now_table.length = 0;                  // todo: 篩選完成後把 this.now_table 存回資料庫
                for ( var i = 0 ; i < user_data.now_table.length ; i ++ ) {
                    if ( getClassObject ( course_db, user_data.now_table[i] ) ) {
                        var ifRepeated = this.now_table.find( function ( item ) {
                            return item == user_data.now_table[i]
                        });
                        if ( !ifRepeated ) {
                            this.now_table.push( user_data.now_table[i] );
                        }
                    }
                }
                vue_classtable.refresh();

            },
            wishlistAdd: function ( target_id ) {
                this.now_wishlist.push( target_id );
                vue_wishlist.refresh();
                vue_courseFilter.refresh();
            },
            wishlistRemove: function ( target_id ) {
                var index = this.now_wishlist.indexOf( target_id );
                console.log( 'kill wishlist: ' + index );
                this.now_wishlist.splice( index, 1 );
                vue_wishlist.wishlist_cont.splice( index, 1 );
                vue_courseFilter.wishlist_cont.splice( index, 1 );
            },
            tableAdd: function ( target_id ) {
                this.now_table.push( target_id );
                vue_classtable.refresh();
            },
            tableRemove: function ( target_id ) {
                var index = vue_user_data.now_table.indexOf( target_id );
                vue_user_data.now_table.splice( index, 1 );
                vue_classtable.refresh();
            },
            wishlistUpdate: function() {
                axios.post('/post/setWish/5', {
                    "now_wishlist": [ 43081, 4021, 43021, 42973, 42971, 42969, 42968 ]        // todo
                })
                .then ( function ( response ) {
                    console.log ( response ) ;
                    console.log ( '更新願望清單: 更新成功！' ) ;
                })
                .catch ( function ( error ) {
                    console.log (  '更新願望清單:' + error ) ;
                });
            }
        }
    })
