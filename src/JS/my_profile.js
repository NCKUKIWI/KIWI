var vue_my_profile = new Vue({
  el: "#my_profile",
  data() {
    return {
      user_data: userData,
      edit_profile: false,
      new_name: userData.user_name,
      new_dept: userData.user_department,
      new_email: userData.user_email,
      new_grade: userData.user_grade,
    }
  },
  methods: {
    addReview: function() {
      setWindow( 'add_review', 'open' );
    },
    giveUpChangeProfile: function() {
      this.new_name = userData.user_name;
      this.new_dept = userData.user_department;
      this.new_email = userData.user_email;
      this.new_grade = userData.user_grade;
      this.edit_profile = false;
    },
    openEditWindow: function() {
      this.edit_profile = true;
    },
    closeEditWindow: function() {
      if( this.new_name !== userData.user_name || 
          this.new_dept !== userData.user_department ||
          this.new_email !== userData.user_email || 
          this.new_grade !== userData.user_grade ){
          setWindow( 'change_profile_give_up', 'open');
      }else{
        this.edit_profile = false;
      }
    },
    changeUserProfile: function() { 
      if(this.new_email !== this.user_data.user_email){
        setWindow( 'change_email_confirm', 'open');
      }else{
        this.sendChangeRequest();
      }
    },
    sendChangeRequest: function() {
      console.log("送出變更請求！")
      this.edit_profile = false;
      this.user_data.user_name = this.new_name;
      this.user_data.user_department = this.new_dept;
      this.user_data.user_email = this.new_email;
      this.user_data.user_grade = this.new_grade;
    }
  },
})