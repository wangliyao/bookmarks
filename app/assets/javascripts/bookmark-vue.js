function loadBookmarkVue() {
  if ($("#new_bookmark").length){
    new Vue({
      el: "#new_bookmark",
      data: {
        title: null,
        url: null,
        error: null,
        image: null,
        paragraph: null
      },

      methods: {
        urlChanged: function(){
          debugger;
          this.loadPage();
        },
        loadPage: function(){
          var _this = this;
          $.ajax({
             url: window.location.origin + "/crawl/" + _this.url,
             contentType: "application/json",
             dataType: "json"
          }).done(function(data){
             _this.title = data.title;
             _this.paragraph = data.paragraph;
             _this.image = data.image;
             _this,error = null;
          }).fail(function(data){
             _this.error = "Something went wrong."
          });
        }
      }
    });
  }
}
$(loadBookmarkVue);
$(document).on("turbolinks:load", loadBookmarkVue);