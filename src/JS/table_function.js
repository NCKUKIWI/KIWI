

    // 輸入課程列表、查找代碼，輸出課程資訊物件(class_item)

    function getClassObject ( course_db, target_id ) {
        var course_item = course_db.find( function ( item ) {
            return item.id == target_id 
        });
        if ( course_item ) {   
            var class_id = course_item.選課序號 ;
            if ( ! class_id ) {
                class_id = '000' ;
            }
            return {
                id: target_id,
                category: deptTransCat( course_item.系號, course_item.系所名稱 ),
                dept_id: course_item.系號,
                class_id: class_id,
                title: course_item.課程名稱,
                teacher: course_item.老師,
                time: course_item.時間,
                credit: course_item.學分
            }
        }
        else {        
            return 0;
        }
    }


    // 輸入 class_item，輸出對應時間物件（time_item）

    function getTimeObject( class_item ) {
        // 正規表達式
        var re_chinese = /[\u4e00-\u9fa5]/g;
        var re_style1 = /\[[0-9]\][a-zA-Z0-9]~[a-zA-Z0-9]/;
        var re_style2 = /\[[0-9]\][a-zA-Z0-9]/;
        var re_day = /\[[0-9]\]/;
        var re_num = /[a-zA-Z0-9]/; 
        // 初始化文字
        var text = class_item.time.toString();
        // 刪掉所有多餘空格
        while (text.match(' ')) {
            text = text.replace(' ', '');
        }
        // 檢測是否出現中文
        if (text.match(re_chinese)) {
            console.log('getTime: 出現中文 ');
            return 0;
        }
        // 檢查是否為合理值
        if (!text.match(re_style2)) {
            console.log('getTime: 無效的時間 ');
            return 0;                                       // todo: return 0 的話應該要自動放到「其他」而非不顯示
        }
        // 將上課時間分段存入陣列
        var time_split = [];
        while (text != '') {
            if (text.match(re_style1)) {
                result = text.match(re_style1);
                text = text.replace(result[0], '');
                time_split.push(result[0]);
            } else if (text.match(re_style2)) {
                result = text.match(re_style2);
                text = text.replace(result[0], '');
                time_split.push(result[0]);
            }
        }
        // 將陣列文字轉成排課資訊
        var day, time, start, end, hrs;
        var time_item = [];
        for ( var i = 0 ; i < time_split.length ; i ++ ) {
            // 把字串切成「星期幾」和「上課節次」
            day = time_split[i].match(re_day).toString().match(re_num);
            time = time_split[i].replace('\[' + day + '\]', '');
            // 把節次切成「開始節次」和「持續時間」
            if (time.toString().match('~')) {
                start = time[0];
                end = time[2];
                hrs = textTransTime(end) - textTransTime(start) + 1;
            } else {
                start = time[0];
                hrs = 1;
            }
            // 把上課日轉成文字，以對應資料格式
            day = dayTransText(day);
            // 轉換為 time_item 
            time_item.push({
                day: day,
                start: start,
                hrs: hrs
            });
        }
        // console.log ( time_item );
        return time_item;
    }


    // 輸入 time_item, table_item，輸出檢查結果
    
    function checkConflict ( class_item, table_item ) {
        var time_item = getTimeObject ( class_item );
        var day, start, hrs;
        for ( var i = 0 ; i < time_item.length ; i ++ ) {
            day = time_item[i].day;
            start = time_item[i].start;
            hrs = time_item[i].hrs;
            for ( var j = 0 ; j < hrs ; j ++ ) {
                var check_cell = table_item[day].find( function ( item ) {
                    return item.time == timeTransText( textTransTime(start) + j )
                });
                if ( check_cell.status != 0 ) {
                    if ( check_cell.class_item.id == class_item.id ) {
                        if ( check_cell.ifPreview ) {
                            return 1 ;
                        }
                        else {
                            return 0 ;
                        }
                    }
                    else {
                        console.log ( 'checkConflict: 找到衝堂' );            // todo: 新增衝堂的正確反應
                        check_cell.cell_status_title = "時段衝堂";
                        check_cell.ifRush = true;
                        return 0 ;
                    }
                }                
            }
        }
        return 1;
    }


    // 上課時段：把「文字」轉成「真實時段順序」

    function textTransTime ( text ) {
        var realTime ;
        if ( text > 0 && text <= 4 ) {
            realTime = parseInt(text) ; 
        }
        else if ( text >= 5 && text <= 9 ) {
            realTime = parseInt(text) + 1 ;
        }
        else {
            switch ( text ) {
                case 'N':
                    realTime = 5;
                    break;
                case 'A':
                    realTime = 11;
                    break;
                case 'B':
                    realTime = 12;
                    break;
                case 'C':
                    realTime = 13;
                    break;
                case 'D':
                    realTime = 14;
                    break;
                default:
                    realTime = 'other_time';
            }
        }
        return realTime;
    }


    // 上課時段：把「真實時段順序」轉成「文字」

    function timeTransText ( text ) {
        var textTime ;
        if ( text > 0 && text <= 4 ) {
            textTime = parseInt(text) ; 
        }
        else if ( text >= 6 && text <= 10 ) {
            textTime = parseInt(text) - 1 ;
        }
        else {
            switch ( parseInt(text) ) {
                case 5:
                    textTime = 'N';
                    break;
                case 11:
                    textTime = 'A';
                    break;
                case 12:
                    textTime = 'B';
                    break;
                case 13:
                    textTime = 'C';
                    break;
                case 14:
                    textTime = 'D';
                    break;
                default:
                    textTime = 'other_time';
            }
        }
        return textTime;
    }


    // 上課日：把「數字」轉成「文字」

    function dayTransText ( text ) {
        var realDay ;
        switch ( parseInt(text) ) {
            case 1:
                realDay = "monday";
                break;
            case 2:
                realDay = "tuesday";
                break;
            case 3:
                realDay = "wednesday";
                break;
            case 4:
                realDay = "thursday";
                break;
            case 5:
                realDay = "friday";
                break;
            default: 
                realDay = 'other_day';
        }
        return realDay;
    }

    // 上課日：把「數字」轉成「文字」

    function textTransDay ( text ) {
        var numDay ;
        switch ( text ) {
            case "monday":
                numDay = 1;
                break;
            case "tuesday":
                numDay = 2;
                break;
            case "wednesday":
                numDay = 3;
                break;
            case "thursday":
                numDay = 4;
                break;
            case "friday":
                numDay = 5;
                break;
            default: 
                numDay = 'other_day';
        }
        return numDay;
    }


    // 課程類型：把「系號」轉成「課程類型」

    function deptTransCat ( deptID, deptName ) {
        var category ;
        switch ( deptID ) {
            case "A9":
                category = '通';
                break;
            case "A6":
                category = '服';
                break;
            case "A7":
                category = '國';
                break;
            case "A1":
                category = '外';
                break;
            case "A2":
                category = '體';
                break;
            default: 
                category = deptName.substring(0,1);
        }
        return category;
    }
