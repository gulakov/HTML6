//ANALYTICS
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-45764194-3', 'auto');
ga('send', 'pageview');


//ACE EDITOR
var editor = ace.edit("before");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");

var editor = ace.edit("after");
editor.setTheme("ace/theme/monokai");
// editor.getSession().setMode("ace/mode/javascript");



// AUTOCOMPLETE

AutoComplete({ Url: "libs/search",
  EmptyMessage: "No libraries found" },
  "#search-libs");




// EMAIL INVITE
$("#email").change(function(){

  $.get("/email_submit", {email: email.value }, function(){

    alert('Your email <b>'+ email.value +
      '</b> was subscribed to updates.', "success", null, true)

  })

}).keydown(function(e){
  if(e.which==13)
    $(this).blur()
})
