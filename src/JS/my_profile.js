var vue_my_profile__left = new Vue({
  el: "#my_profile__left",
  data() {
    return {
      user_data: userData,
    }
  },
  methods: {

  },
})

var vue_my_profile__right = new Vue({
  el: "#my_profile__right",
  data() {
    return {
      user_data: userData,
    }
  },
  methods: {
    addReview: function(){
      setWindow( 'add_review', 'open' );
    }
  },
})