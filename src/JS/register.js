var vue_register = new Vue ({
  el: "#register__content",
  data: {
    old_user_register: false,
    btn_clicked: false,
    finish_register: false,
    grades: ["大一","大二","大三","大四","大五","大六"],
    grade_selected: "",
    depts: [],
    dept_dropdown: [],
    dept_keyword: '',
    email_keyword: '',
    dept_qualified: true,
    email_qualified: true,
  },
  methods: {
    new_user_login: function() {
        this.btn_clicked = true;
        document.getElementById("enter_dept").disabled = false;
        document.getElementById("enter_grade").disabled = false;
        document.getElementById("enter_email").disabled = false;
        console.log(vue_register.depts);
        console.log(document.getElementById("enter_dept").disabled);
    },
    submit_data: function() {
      document.getElementById("register__right__content").style.display = "none";
      document.getElementById("register__right__submited").style.display = "flex";
    },
    old_user_login: function() {
      this.old_user_register = true;
      document.getElementById("enter_dept").disabled = false;
      document.getElementById("enter_grade").disabled = false;
      document.getElementById("enter_email").disabled = false;
      document.getElementById("register__block__par1").innerHTML = "已使用過NCKU HUB？";
      document.getElementById("register__block__par2").innerHTML = "請完成基本資料的填寫";
    }
  },
  watch: {
    
  }
});

document.addEventListener("input", function() {
  if(document.getElementById("enter_dept").value.length==0 || document.getElementById("enter_grade").value==0
|| document.getElementById("enter_email").value.length==0){
    vue_register.finish_register = false;
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

  if(document.getElementById("enter_dept").value.length!=0 && document.getElementById("enter_grade").value!=0
&& document.getElementById("enter_email").value.length!=0){
  if(vue_register.dept_qualified == true && vue_register.email_qualified == true && document.getElementById("enter_grade")!=0){
    vue_register.finish_register = true;
  }
}
});
