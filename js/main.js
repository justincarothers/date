$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();

    var gender = $("input:radio[name=gender]:checked").val();
    var hair = $("input:radio[name=hair]:checked").val();
    var age = parseInt($("#age").val());
    var height = $("#height").val();


    if (gender === 'male') {
      $(".mainPage").hide();
      $(".malePage").show();

    } else if (hair === 'blonde' && age > 50 || height === 'tall') {

        $(".mainPage").hide();
        $(".yourDate").show();
        $(".yourDate").prepend("<h1>Scarlett</h1>");
        alert("You chose an older blonde lady with long legs.");
      } else {
        alert ("Please enter age")
      }
// alert (gender + hair + age + height);


});
});




// $(document).ready(function() {
//
//   $(".col-sm-4").click(function(){
//
//    var choice = $(this).attr('id'); // or var clickedBtnID = this.id
//    if (choice === 'turtle') {
//      $("#main").hide();
//      $(".turtlePage").show();
//    }
//    else if (choice === 'snake') {
//      $("#main").hide();
//      $(".snakePage").show();
//    }
//    else if (choice === 'insect')
//    {
//      $("#main").hide();
//      $(".insectPage").show();
//    }
//    else {
//      return;
//    }
//  });
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// //
// //
// // $(document).ready(function() {
// //
// //   var age = parseInt(prompt("How old arte you"));
// //
// //   if (age >= 18) {
// //     $("#intro").hide();
// //     $('#eighteen').show();
// //   } else {
// //     $('#notEighteen').show();
// //   };
// // });
// //   // $(".NO").click(function(){
