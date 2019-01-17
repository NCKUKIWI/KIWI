


    // Component: wishlist-item

    Vue.component( 'wishlist-item', {
        data: function () {
            return {
                hover_now: false
            }
        },
        props: ['class_item'],
        template: [
            '<div v-if="class_item.isSeen" class="list_course_item" @mouseover="mouseoverItem" @mouseout="mouseoutItem" >',
                '<div class="list_course_item_left">',
                    '<p class="list_course_item_category text_20 text_white clickable" @click="deleteItem" :class="getClass()"> {{ class_item.category }} </p>',
                '</div>',
                '<div class="list_course_item_mid" @click="addToTable">',
                    '<p class="list_course_item_title text_16">{{ class_item.dept_id }}-{{ class_item.class_id }} {{ class_item.title }}</p>',
                    '<p class="list_course_item_description text_14 text_dark">{{ class_item.teacher }} — {{ class_item.time }}</p>',
                '</div>',
                '<div class="list_course_item_right" @click="addToTable">',
                    '<div class="list_course_item_button"></div>',
                '</div>',
            '</div>'
        ].join(''),
        methods: {
            getClass: function() {
                var class_context = this.class_item.dept_id ;
                return class_context;
            },
            addToTable: function () {
                if ( checkConflict ( this.class_item, vue_classtable ) ) {
                    vue_user_data.tableAdd( this.class_item.id );
                    vue_user_data.wishlistRemove( this.class_item.id );
                    vue_classtable.clearFilterCell();
                }
            },
            deleteItem: function () {
                console.log ( 'wishlist killed: ' +  vue_wishlist.wishlist_cont.indexOf( this.class_item ) + ' (' + this.class_item.title + ')' ); 
                vue_user_data.wishlistRemove( this.class_item.id );
            },
            mouseoverItem: function () {
                if ( checkConflict ( this.class_item, vue_classtable ) ) {
                    vue_classtable.refresh( this.class_item.id );
                }
            },
            mouseoutItem: function () {
                vue_classtable.refresh();
            }
        }
    })


    // Wishlist

    var vue_wishlist = new Vue({
        el: '#wishlist_in_table',
        data: {
            wishlist_cont: [],
            class_table_locked: true
        },
        methods: {
            refresh: function () {    
                this.wishlist_cont.length = 0;
                for ( var i = 0 ; i < vue_user_data.now_wishlist.length ; i ++ ) {
                    var class_item = getClassObject ( course_db, vue_user_data.now_wishlist[i] ) ;
                    class_item.isSeen = true;
                    this.wishlist_cont.push( class_item );
                }
                this.clearFilter() ;
            },
            clearFilter: function () {
                // 重新將所有 wishlist item 設為可見
                for ( var i = 0 ; i < this.wishlist_cont.length ; i ++ ) {
                    this.wishlist_cont[i].isSeen = true ;
                }
            },
            filterItemTIme: function ( filter_day, filter_time ) {
                // 篩選出不符合條件的 item 設為不可見
                filter_time = textTransTime( filter_time );
                for ( var i = 0 ; i < this.wishlist_cont.length ; i ++ ) {
                    var wishlist_item_day = getTimeObject(this.wishlist_cont[i])[0].day ;
                    var wishlist_item_start = getTimeObject(this.wishlist_cont[i])[0].start ;
                    wishlist_item_start = textTransTime( wishlist_item_start );
                    var wishlist_item_end = parseInt(wishlist_item_start) + getTimeObject(this.wishlist_cont[i])[0].hrs - 1 ;
                    if ( filter_day == wishlist_item_day && filter_time >= wishlist_item_start && filter_time <= wishlist_item_end ) {
                    }
                    else {
                        this.wishlist_cont[i].isSeen = false ;
                    }
                }
            },
            switchLockStatus: function () {
                this.class_table_locked = ! this.class_table_locked;
            }
        }
    })


    
    // Component: result-list-item

    Vue.component( 'result-list-item', {
        data: function () {
            return {
            }
        },
        props: ['class_item'],
        template: [
            '<div class="list_course_item"  @mouseover="mouseoverItem" @mouseout="mouseoutItem" >',
                '<div class="list_course_item_left">',
                    '<p class="list_course_item_category text_20 text_white" :class="getClass()"> {{ class_item.category }} </p>',
                '</div>',
                '<div class="list_course_item_mid" @click="addToTable">',
                    '<p class="list_course_item_title text_16">{{ class_item.dept_id }}-{{ class_item.class_id }} {{ class_item.title }}</p>',
                    '<p class="list_course_item_description text_14 text_dark">{{ class_item.teacher }} — {{ class_item.time }}</p>',
                '</div>',
                '<div class="list_course_item_right" @click="addToTable">',
                    '<div class="list_course_item_button"></div>',
                '</div>',
            '</div>'
        ].join(''),
        methods: {
            getClass: function() {
                var class_context = this.class_item.dept_id ;
                return class_context;
            },
            addToTable: function () {
                if ( checkConflict ( this.class_item, vue_classtable ) ) {
                    vue_user_data.tableAdd( this.class_item.id );
                    // todo: 按下加入後從清單裡消失( 像 wishlist 那樣)
                    vue_classtable.clearFilterCell();
                }
            },
            mouseoverItem: function () {
                if ( checkConflict ( this.class_item, vue_classtable ) ) {
                    vue_classtable.refresh( this.class_item.id );
                }
            },
            mouseoutItem: function () {
                vue_classtable.refresh();
            }
        }
    })


    // Quick Search

    var vue_quick_search = new Vue({
        el: '#quick_search',
        data: {
            keyword: '', 
            result_cont: [],
            filter_status: false,
            title_text: '快速添加',
            class_table_locked: true
        },
        computed: {
            result: function () {
    			this.result_cont = [];
                this.result_cont.length = 0;
                if ( this.keyword ) {
                    for ( var i = 0 ; i < course_db.length ; i ++ ) {           // todo: 讓已經在 table 或 wishlist 的課程不顯示
                        if ( course_db[i].課程名稱.match ( this.keyword ) || course_db[i].老師.match ( this.keyword ) ) {
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
            filterMode: function ( command, filter_day, filter_time ) {
                if ( command == 'on' ) {
                    this.keyword = '正在篩選：[' + textTransDay(filter_day) + ']' + filter_time ;
                    this.filter_status = true ;
                    this.title_text = '篩選時段';
                }
                else if ( command == 'off' ) {
                    this.keyword = '';
                    this.filter_status = false ;
                    this.title_text = '快速添加';
                }
            },
            clearFilter: function () {
                if ( this.filter_status ) {
                    this.filterMode( "off" );
                    vue_classtable.clearFilterCell();
                    vue_wishlist.clearFilter();
                }
            },
            switchLockStatus: function () {
                this.class_table_locked = ! this.class_table_locked;
            }
        }
    })


    // Component: class-table-cell

    Vue.component( 'class-table-cell', {
        data: function () {
            return {
            }
        },
        props: ['day','cell_data'],
        template: [
            '<div class="class_table_cont_cell class_cell" :style="getHeight()" @click="startFilterTIme" :class="getClass()" >',
                '<div class="class_table_cont_cell_button" @click="deleteItem"></div>',
                '<p class="class_table_cont_cell_id text_12" :class="[{ previewing: cell_data.ifPreview }, { rush: cell_data.ifRush }]"> {{ cell_data.cell_status_title }} </p>',
                '<p class="class_table_cont_cell_title text_16 text_bold"> {{ cell_data.cell_status_text }} </p>',
                '<p v-if="cell_data.status > 1" class="class_table_cont_cell_description text_14 text_dark"> {{ cell_data.class_item.teacher }} </p>',
            '</div>'
        ].join(''),
        created: function () {
        },
        methods: {
            getHeight: function() {
                var style = '';
                // 計算該課程要佔據幾格
                if ( this.cell_data.status > 0 ) {
                    style += 'height: ' + this.cell_data.status * ( 100 / 9 ) + '%';
                }
                else if ( this.cell_data.status < 0 ) {
                    style += 'display: none';
                }
                return style;
            },
            getClass: function() {
                var class_context = '';
                if ( this.cell_data.status > 0 ) {
                    class_context += 'occupied ';
                }
                if ( this.cell_data.ifFilterTime ) {
                    class_context += 'filtering ';
                }
                if ( this.cell_data.ifPreview ) {
                    class_context += 'previewing ';
                }
                if ( this.cell_data.ifRush ) {
                    class_context += 'rush ';
                }
                class_context += this.cell_data.class_item.dept_id ;
                return class_context;
            },
            deleteItem: function() {
                if ( this.cell_data.status > 0 ) {
                    vue_user_data.wishlistAdd( this.cell_data.class_item.id );
                    vue_user_data.tableRemove( this.cell_data.class_item.id );
                }
            },
            startFilterTIme: function() {
                if ( this.cell_data.status == 0 && ! vue_classtable.class_table_locked ) {
                    var filtering = vue_classtable.markFilterCell( this.day, this.cell_data.time );
                    if ( filtering ) {
                        vue_wishlist.clearFilter() ;
                        vue_wishlist.filterItemTIme( this.day, this.cell_data.time );
                    }
                    else {
                        vue_wishlist.clearFilter() ;
                    }
                }
            }
        }
    })


    // Class Table

    var vue_classtable = new Vue ({
        el: '#class_table',
        data: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            filtering_now: {
                day: null,
                time: null
            },
            class_table_locked: true
        },
        methods: {
            // 輸入課程 id、課程資料庫，將課程加入課表
            toTable: function ( target_id, course_db, ifPreview ) {
                var class_item = getClassObject ( course_db, target_id ); 
                var time_item = getTimeObject ( class_item );
                if ( checkConflict ( class_item, this ) ) {
                    // 完成填入課表
                    var day, start, hrs;
                    for ( var i = 0 ; i < time_item.length ; i ++ ) {
                        day = time_item[i].day;
                        start = time_item[i].start;
                        hrs = time_item[i].hrs;
                        for ( var j = 0 ; j < hrs ; j ++ ) {
                            // 在起始時段填入課程資訊
                            fill_cell = this[day].find( function ( item ) {
                                return item.time == start 
                            });
                            fill_cell.status = hrs ;
                            fill_cell.class_item = class_item;
                            fill_cell.cell_status_title = fill_cell.class_item.dept_id + '-' + fill_cell.class_item.class_id ;;
                            fill_cell.cell_status_text = fill_cell.class_item.title;
                            if ( ifPreview ) {
                                fill_cell.ifPreview = true;
                            }
                            // 將後續時段的 status 設定為 -1
                            for ( var k = 1 ; k < hrs ; k ++ ) {
                                fill_cell =  this[day].find( function ( item ) {
                                    return item.time == timeTransText( textTransTime(start) + k )
                                });
                                fill_cell.status = -1;
                                fill_cell.cell_status_title = null;
                                fill_cell.cell_status_text = null; 
                            }
                        }
                    }
                    return 1;
                }
                else {
                    return 0;
                }
            },
            refresh: function ( preview_id ) {
                var message = '目前課表課程：';
                for ( var i = 0 ; i < vue_user_data.now_table.length ; i ++ ) {
                    message += vue_user_data.now_table[i] + ' ' ;
                }
                console.log ( message );
                // 產生空白表格
                var day, time ;
                for ( var i = 1 ; i <= 5 ; i ++ ) {
                    day = dayTransText(i);
                    this[day].length = 0;
                    for ( var j = 1 ; j <= 15 ; j ++ ) {
                        time = timeTransText(j).toString();
                        this[day].push( { time: time, status: 0, class_item: '', ifFilterTime: false, cell_status_title: '篩選課程', cell_status_text:'選擇此時段' } ); 
                        // status： 1 以上 - 該課程佔據節次數、 0 - 該節次無課程、 (-1) - 該節次已被上方課程佔據
                    }
                }
                // 加入目前課表
                var target_id ;
                for ( var i = 0 ; i < vue_user_data.now_table.length ; i ++ ) {
                    target_id = vue_user_data.now_table[i];
                    this.toTable ( target_id, course_db );
                }
                // 加入預覽中課程（wishlist） 
                if ( preview_id ) {
                    this.toTable ( preview_id, course_db, true );
                }
                // 加入篩選中時段
                if ( this.filtering_now.day && this.filtering_now.time ) {
                    this.markFilterCell ( this.filtering_now.day , this.filtering_now.time );
                }
            },
            markFilterCell: function ( filter_day, filter_time ) {
                var filter_cell = this[filter_day].find( function ( item ) {
                    return item.time == filter_time
                });
                if ( filter_cell.ifFilterTime ) {
                    // 若點擊正在篩選中的格子則取消篩選狀態
                    this.clearFilterCell();
                    vue_quick_search.filterMode( 'off' );
                    return 0 ;
                }
                else {
                    // 若點擊非篩選中的格子則開始進行篩選
                    this.clearFilterCell();
                    filter_cell.ifFilterTime = true;
                    this.filtering_now.day = filter_day;
                    this.filtering_now.time = filter_time;
                    vue_quick_search.filterMode( 'on', filter_day, filter_time );
                    return 1 ;
                }
            },
            clearFilterCell: function () {
                var day, time, now_cell ;
                for ( var i = 1 ; i <= 5 ; i ++ ) {
                    day = dayTransText(i);
                    for ( var j = 1 ; j <= 15 ; j ++ ) {
                        time = timeTransText(j).toString();
                        now_cell = this[day].find( function ( item ) {
                            return item.time == time
                        });
                        now_cell.ifFilterTime = false;
                    }
                }
                this.filtering_now.day = null;
                this.filtering_now.time = null;
                vue_quick_search.keyword = null;
            },
            switchLockStatus: function () {
                this.class_table_locked = ! this.class_table_locked;
            }
        }
    }) 


    // Fixed Button

    var vue_fixed_button = new Vue({
        el: '#fixed_button_table',
        data: {
            class_table_locked: true
        },
        methods: {
            switchLockStatus: function () {                                // todo: 儲存與放棄功能
                this.class_table_locked = ! this.class_table_locked ;
                vue_wishlist.switchLockStatus();
                vue_quick_search.switchLockStatus();
                vue_classtable.switchLockStatus();
                if ( this.class_table_locked == true ) {
                    // 課表鎖定，進入儲存狀態
                    window.onbeforeunload = null;     
                }
                else {
                    // 課表未鎖定，進入編輯狀態
                    window.onbeforeunload = function(event){
                        event.returnValue = false;
                    }
                }
            }
        }
    })