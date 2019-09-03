  var vue_course_item = new Vue({
    el: '#course_item',
    data: {
      course_with_comment: [],
      course_data: [],
      course_data_db: function(){
      	return course_db;
      },
      course_by_depart: [],
      count_height: 1,
      count_index: 0,
      userData: userData
    },

    methods: {
      openCoursePage: function(id) {
        openPage(id);
        setWindow('course_page','open');
      //   var course_url = "/course/" + id;
      //   vue_nav_bar.mobile_status = 'course_page';
      //   $.ajax({
      //     type: "GET",
      //     url: course_url,
      //     success: function(response) {
      //       vue_courseContent.score_data = response;
      //       vue_courseContent.comment_data = response.comment;
      //       vue_courseContent.course_data = response.courseInfo;
      //       vue_courseContent.course_data.id = id;
      //       if(vue_courseContent.comment_data.length==0){
      //         $(".courseFeedback__msg--default").css("display","block");
      //       } else {
      //         $(".courseFeedback__msg--default").css("display","none");
      //       }
      //       setWindow('course_page','open');
      //     }
      //   });
      },
      setCourse: function(id){
        var chooseCourse_id = id;
        if (userData.now_wishlist.includes(chooseCourse_id)){
          wishlistRemove(chooseCourse_id);
        }
        else{
          wishlistAdd(chooseCourse_id);
        }

        vue_courseFilter.wishList = userData.now_wishlist;
      },
      handleScroll: function() {
        var list_height = $("#course_item").height();
        var scroll_height = $("#course_item").scrollTop();
        if(vue_courseFilter.comment_only==false && vue_courseFilter.filter_with_dpmt==false) {
          if(scroll_height >= list_height * this.count_height){
            for(var i = 200 + this.count_index*20; i< 200 + (this.count_index+1)*20;i++){
              vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
            }
            this.count_index++;
            this.count_height++;
          }
        }
      },
      course_circle: function(dept, dept_name) {
        var name = deptTransCat(dept, dept_name);
        return name;
      }
    },
    created: function() {
      document.getElementById("courseList").addEventListener('scroll', this.handleScroll, true);
      // $("#courseList").bind('scroll', function() {
      //   this.handleScroll();
      // });

    },
  });


  var vue_courseContent = new Vue ({
    el: '#courseContent',
    data: {
      // isShow: false,
      page_status: pageStatus,
      course_data: [],
      score_data: [],
      comment_data: [],
      userData: userData,
      open_reportList: false,
      nowIndex: null,
      thumbs: {
        up: 0,
        down: 0,
        clicked: false,
      },

    },
    methods: {
      hideContent: function() {
        setWindow('course_page', 'close');
        vue_courseContent.course_data = [];
        vue_courseContent.score_data = [];
        vue_courseContent.comment_data = [];
        //if click outside then hide
      },
      minusRate: function(rate_name) {
        var rate_input = rate_name;
        if(document.getElementById(rate_input).value>0){
            document.getElementById(rate_input).stepDown();
        }
      },
      addRate: function(rate_name) {
        var rate_input = rate_name;
        if(document.getElementById(rate_input).value<10){
            document.getElementById(rate_input).stepUp();
        }
      },
      submit_score: function(index) {
          $(".score_input").each(function() {
            $(".score_input").css("display","inline-block");
          });
          $(".score_span").each(function() {
            $(".score_span").css("display","none");
          });
          $(".arrow-left").each(function() {
            $(".arrow-left").css("display","inline-block");
          });
          $(".arrow-right").each(function() {
            $(".arrow-right").css("display","inline-block");
          });

          document.getElementById("score_input").innerHTML = "送出";

      },
      content_setWishlist: function(id) {
        var chooseCourse_id = id;
        if (userData.now_wishlist.includes(chooseCourse_id)){
          wishlistRemove(chooseCourse_id);
        }
        else{
          wishlistAdd(chooseCourse_id);
        }

        vue_courseFilter.wishList = userData.now_wishlist;
      },
      openOutline: function(dept,dept_serial) {
        let url = 'http://course-query.acad.ncku.edu.tw/crm/course_map/course.php?dept=' + dept + '&cono=' + dept_serial;
        window.open(url, '_blank');
      },
      openReviewWindow: function(){
        vue_courseContent.hideContent();
        setWindow( 'add_review', 'open' );
      },
      openReportWindow: function(){
        setWindow( 'report', 'open');
      },
      openAndmore: function(){
        setWindow( 'andmore', 'open');
      },
      report_list: function(index){
        vue_courseContent.nowIndex = index;
        this.open_reportList = true;
      },
      thumbs_up: function(index){
        console.log(this.comment_data[index].id);
        var postID = this.comment_data[index].id;
        console.log(this.userData.user_id);
        $.ajax({
          type: "POST",
          url: "/post/setPostLike",
          data: {
            "userId": 1,
            "postId": postID,
            "thumb": 1,
            "suck": 0,
          },
          success: function(response) {
            console.log("upppp");
            this.thumbs.up = 1;
            // $.ajax({
            //   type: "GET",
            //   url: "/post/setPostLike",
            //   data: {
            //     "userId": 1,
            //     "postId": postID,
            //     "thumb": 1,
            //     "suck": 0,
            //   },
            //   success: function(response) {
            //     console.log("upppp");
            //
            //   }
            // });
          }
        });
        // if(this.thumbs.up==0){
        //   this.thumbs.up = 1;
        // }


        // if(!vue_courseContent.thumbs.clicked){
        //   console.log(index);
        //   vue_courseContent.comment_data[index].thumbsup = 1;
        //   console.log(vue_courseContent.comment_data[index]);
        //   vue_courseContent.thumbs.clicked = true;
        // }
      },
      thumbs_down: function(index){
        console.log(index);
        if(!vue_courseContent.thumbs.clicked){
          vue_courseContent.thumbs.down++;
          vue_courseContent.thumbs.clicked = true;
        }
      },
    },
  });

  var vue_courseFilter = new Vue ({
    el: '#courseFilter',
    data: {
      keyword: '',
      dept: [],
      course_data: [],
      wishList: [],
      wishlist_cont: [],
      dept_dropdown: [],
      filter_by_dpmt: [],
      keyPrefix: '',
      comment_only: false,
      filter_with_dpmt: false,
      load_more_course: {
      },
      mobile_status: 'default'
    },
    methods: {
      comment_filter: function() {
        console.log("check");
        var cCheck = document.getElementById("commentCheck");
        if (cCheck.checked==true) {
          this.comment_only = true;

            if(this.filter_with_dpmt == true){
              vue_course_item.course_data = [];
              for(var i in this.filter_by_dpmt){
                if(this.filter_by_dpmt[i].comment_num>0){
                  vue_course_item.course_data.push(this.filter_by_dpmt[i]);
                }
              }
            } else {
              vue_course_item.course_data = [];
              vue_course_item.course_data = vue_course_item.course_with_comment;
            }
        } else {
          vue_course_item.course_data = [];
          vue_courseFilter.comment_only = false;
          for(var i=0;i<100;i++){
            vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
          }
          console.log(vue_course_item.course_data);
        }
      },
      deleteSearch:function(){
        this.keyword='';
      },
      result_click: function(resultName,index) {
        // var key = document.getElementById("dpmtFilter");
        this.keyword = resultName;
        var key_prefix = vue_courseFilter.dept_dropdown[index].prefix;
        this.keyPrefix = key_prefix;
        this.filter_by_dpmt = [];
        // console.log(key.value);
        // key.value = key_prefix + " " + vue_courseFilter.dept_dropdown[index].name;
        // console.log(key.value);
        if(this.keyword) {
          vue_course_item.course_data = [];
          if(vue_courseFilter.comment_only==true){
            for(var i in vue_course_item.course_with_comment){
              if(vue_course_item.course_with_comment[i].系號 == key_prefix){
                vue_course_item.course_data.push(vue_course_item.course_with_comment[i]);
              }
            }

          } else {
            for(var i in vue_course_item.course_data_db()) {
              if(vue_course_item.course_data_db()[i].系號 == key_prefix){
                vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
              }
            }
          }
        }
        // $(".search_result--course").css("display","none");
        $(".quick_search_dropdown--course").css("display","none");
      },
      refresh: function () {
        this.wishlist_cont.length = 0;
        for ( var i = 0 ; i < userData.now_wishlist.length ; i ++ ) {
            var class_item = getClassObject ( course_db, userData.now_wishlist[i] ) ;
            this.wishlist_cont.push( class_item );
        }
      },
      deleteItem: function ( id ) {
        wishlistRemove( id );
      },
      opentabletab: function() {
        toTab('table');
      },
      // handle_input: function($event) {
      //   if(!$event.data){
      //     this.filter_with_dpmt = false;
      //     vue_course_item.course_data = [];
      //     if(this.comment_only==true){
      //       vue_course_item.course_data = vue_course_item.course_with_comment;
      //     } else {
      //       for(var i=0;i<100;i++){
      //         vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
      //       }
      //     }
      //   }
      // },
      mobileNavStatus: function( status ) {
        if ( status == 'drop' ) {
          if ( this.mobile_status == 'drop' ) {
            this.mobile_status = 'default';
          }
          else {
            this.mobile_status = 'drop';
          }
        }
      }
    },
    computed: {
      search_result: function(index) {
        this.dept_dropdown = [];
        vue_course_item.course_data = [];
        if(vue_courseFilter.keyword.length<1){
          console.log("keyword < 1");
        }
        if( this.keyword !='' ) {
          // 自動完成、偵測空值變回全部
          // var key = document.getElementById("dpmtFilter");
          // key.value = this.keyPrefix + " " + vue_courseFilter.dept_dropdown[index].name;
          this.filter_with_dpmt = true;
          this.keyword = this.keyword.toUpperCase();
          for(var i in this.dept){
            if(this.dept[i].DepPrefix.match(this.keyword) || this.dept[i].DepName.match(this.keyword)) {
              var result_candidate = [];
              result_candidate.prefix = this.dept[i].DepPrefix;
              result_candidate.name = this.dept[i].DepName;
              this.dept_dropdown.push(result_candidate);
            }
          }
          if(this.comment_only==true){
            for(var i in vue_course_item.course_with_comment){
              if(vue_course_item.course_with_comment[i].系號 == this.keyPrefix){
                vue_course_item.course_data.push(vue_course_item.course_with_comment[i]);
              }
            }
          } else {
            for(var i in vue_course_item.course_data_db()) {
              if(vue_course_item.course_data_db()[i].系號 == this.keyPrefix){
                vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
              }
            }
          }


        }
        // if(document.getElementById("commentCheck").checked==true){
        //
        // }
        // else if (!this.keyword && vue_course_item.course_data_db().length != 0) {
        //   console.log("empty!!");
        //   vue_course_item.course_data = [];
        //   if (document.getElementById("commentCheck").checked==true) {
        //     vue_course_item.course_data = vue_course_item.course_with_comment;
        //   } else {
        //     for(var i=0;i<100;i++){
        //       vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
        //     }
        //   }
        // }
        return this.dept_dropdown;

      }
    },
    watch: {
      keyword: function(){
        if(this.keyword == ''){
          $(".quick_search_delete").css("display","none");
          this.filter_with_dpmt = false;
          vue_course_item.course_data = [];
          if(this.comment_only==true){
            vue_course_item.course_data = vue_course_item.course_with_comment;
          } else {
            for(var i=0;i<100;i++){
              vue_course_item.course_data.push(vue_course_item.course_data_db()[i]);
            }
          }
        } else {
          $(".quick_search_delete").css("display","inline-block");
        }
      }
    }
  });

  Vue.filter('roundto2', function(value) {
    value = Number(value);
    return value.toFixed(1);
  });

  var vue_courseDarkScreen = new Vue ({
    el: '#courseDarkScreen',
    data: {
      mobile_status: 'default'
    },
    methods: {
      mobileNavStatus: function( status ) {
        if ( status == 'drop' ) {
          if ( this.mobile_status == 'drop' ) {
            this.mobile_status = 'default';
          }
          else {
            this.mobile_status = 'drop';
          }
        }
      }
    }
  });
