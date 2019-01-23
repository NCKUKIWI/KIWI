var vue_register = new Vue ({
  el: "#register__content",
  data: {
    btn_clicked: false,
    finish_register: false,
    grades: ["大一","大二","大三","大四","大五","大六"],
    depts: [],
  },
  methods: {
    turnGrey: function() {
        this.btn_clicked = true;
        document.getElementById("enter_dept").disabled = false;
        document.getElementById("enter_grade").disabled = false;
        document.getElementById("enter_email").disabled = false;

        console.log(document.getElementById("enter_dept").disabled);
    },
    submit_data: function() {
      console.log("disappear");
      document.getElementById("register__right__content").style.display = "none";
      document.getElementById("register__right__submited").style.display = "flex";
    },
  },
  computed: {
    dept_result: function() {
      
    },
    grade_result: function() {

    }
  }
});

document.addEventListener("input", function() {
  if(document.getElementById("enter_dept").value.length!=0 && document.getElementById("enter_grade").value.length!=0
&& document.getElementById("enter_email").value.length!=0){
    vue_register.finish_register = true;
  } else if (document.getElementById("enter_dept").value.length==0 || document.getElementById("enter_grade").value.length==0
|| document.getElementById("enter_email").value.length==0) {
    vue_register.finish_register = false;
  }
});
