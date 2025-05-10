$(document).ready(function () {
  // Jquery syntax

  // Cicks on all p elemets
  //   $("p").click(function () {
  //     console.log("you clicked on the text", this);
  //     // $('p').hide();
  //     $(this).hide();
  //   });

  //    $("p").dblclick(function () {
  //     console.log("you clicked on the text", this);
  //       $(this).hide();
  //   });

  //    $("p").mouseenter(function () {
  //     console.log("you clicked on the text", this);

  //       $(this).hide();
  //   });

  //On Method

  //  $('p').on('click', function() {
  //     console.log('Thansk for the on Click', this);
  //  });

  // $('p').on(
  //     {
  //         click:function(){
  //             console.log('Thansk For clicking', this);

  //         },
  //         mouseleave:function(){
  //             console.log("Mouseleave");

  //         }
  //     })

  // 3 Types of Selector
  // 1. Element Selector
  // 2 Id Selector
  // 3 Class Selector

  // Element Selector
  // $('p').click(function(){
  // });

  // ID Selector
  // $('#second').click();

  // Class Selector
  // $('.odd').click();

  //   $('#wiki').hide(1000, function(){
  //     console.log('the text has been hidden');

  //   })
  //    $('#wiki').show(2000, function(){
  //     console.log('the text has been shown');

  //   })

//   $("#butty").click(function () {
//     $("#wiki").slideToggle(1000);
//   });

// $('#wiki').animate({
//     opacity:0.3,
//     height:'150px',
//     width:'500'
// } , "slow")

$('#wiki').animate({opacity:0.3}, 4000);
$('#wiki').animate({opacity:0.9}, 5000);
$('#wiki').animate({width :'180px'}, 4000);


$('#ta').val ('setting it to myself');

$('#butty').click(function(){
    $('#wiki').addClass('new_wiki');
})


$('#wiki').css('background-color', 'red')
});
