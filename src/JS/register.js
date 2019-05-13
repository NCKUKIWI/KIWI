var vue_register = new Vue ({
  el: "#register__content",
  data: {
    registerBtn : {
      old_user_register: false,
      new_register: false,
      finish_register: false,
    },
    dept: {
      all_depts: [],
      dropdown: [],
      keyword: '',
      qualified: true,
    },
    email: {
      keyword: '',
      qualified: true,
    },
    grade: {
      all_grades: ["一","二","三","四","五","六"],
      selected: '',
    },

    grades: ["一","二","三","四","五","六"],
    grade_selected: "",
    depts: [],
    dept_dropdown: [],
    dept_keyword: '',
    dept_selected: "",
    email_keyword: '',
    dept_qualified: true,
    email_qualified: true,
  },
  methods: {
    new_user_login: function() {
        this.registerBtn.new_register = true;
        document.getElementById("enter_dept").disabled = false;
        document.getElementById("enter_grade").disabled = false;
        document.getElementById("enter_email").disabled = false;
        console.log(vue_register.depts);
        console.log(document.getElementById("enter_dept").disabled);
    },
    submit_data: function() {
      for(var i in vue_courseFilter.dept){
        if (vue_courseFilter.dept[i].DepPrefix == vue_register.dept_keyword.toUpperCase()){
          vue_register.dept_selected = vue_courseFilter.dept[i].DepName;
        }
      }
      axios.post('/user/update', {
        grade: vue_register.grade_selected,
        department: vue_register.dept_selected,
        email: vue_register.email_keyword
      })
      document.getElementById("register__right__content").style.display = "none";
      document.getElementById("register__right__submited").style.display = "flex";
    },
    old_user_login: function() {
      this.registerBtn.old_user_register = true;
      document.getElementById("enter_dept").disabled = false;
      document.getElementById("enter_grade").disabled = false;
      document.getElementById("enter_email").disabled = false;
      document.getElementById("register__block__par1").innerHTML = "請完成填寫資料";
      document.getElementById("register__block__par2").innerHTML = "感謝你使用NCKU HUB, 請填寫以下資料";
    },
    back_course_page: function(){
      getUserInfo ();
      toTab( 'course' );
    }
  },
  watch: {

  }
});

document.addEventListener("input", function() {
  if(document.getElementById("enter_dept").value.length==0 || document.getElementById("enter_grade").value.length==0
|| document.getElementById("enter_email").value.length==0){
    vue_register.registerBtn.finish_register = false;
  } else {
    if(!vue_register.email_keyword.match("@")) {
      vue_register.email_qualified = false;
    } else {
      vue_register.email_qualified = true;
    }
    for(var i in vue_register.depts) {
      if(vue_register.dept_keyword.toUpperCase().match(vue_register.depts[i])){
        vue_register.dept_qualified = true;
        break;
      } else {
        vue_register.dept_qualified = false;
      }
    }
  }

  if(document.getElementById("enter_dept").value.length!=0 && document.getElementById("enter_grade").value.length!=0
&& document.getElementById("enter_email").value.length!=0){
  if(vue_register.dept_qualified == true && vue_register.email_qualified == true && document.getElementById("enter_grade").value.length!=0){
    vue_register.registerBtn.finish_register = true;
  }
}
});
