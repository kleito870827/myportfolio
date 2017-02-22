
$("#link-tab-skill, #link-tab-worksExaples, #link-tab-aboutMe").click( function(){
  $("#img-start").css("background-image", "none");
  $(".progress").css("display", "block");
});

var cont = 0;

$("#nextRight").on("click", function(){
  jQuery.ajax("works.json",{
    dataType: "json",
    method: "GET",
    success: function(resp){
      if(cont < resp.length){
          $(".nameWork").html(resp[cont].name);
          $(".imgWork").attr("src", resp[cont].imgUrl);
          $(".pWork").html(resp[cont].description);
          cont++;
    }else{
      cont = 0;
      $(".nameWork").html(resp[cont].name);
      $(".imgWork").attr("src", resp[cont].imgUrl);
      $(".pWork").html(resp[cont].description);
      cont++;
    }

    },
    error: function(xhr) {
      console.log(xhr);
    }
  });
})

$("#nextLeft").on("click", function(){
  jQuery.ajax("works.json",{
    dataType: "json",
    method: "GET",
    success: function(resp){
      if(cont >= 0){
        if(cont == 0){
          $(".nameWork").html(resp[cont].name);
          $(".imgWork").attr("src", resp[cont].imgUrl);
          $(".pWork").html(resp[cont].description);
          cont = resp.length - 1;
        }else if(cont == resp.length){
          cont--;
          $(".nameWork").html(resp[cont].name);
          $(".imgWork").attr("src", resp[cont].imgUrl);
          $(".pWork").html(resp[cont].description);
          cont--;
        }else{
          $(".nameWork").html(resp[cont].name);
          $(".imgWork").attr("src", resp[cont].imgUrl);
          $(".pWork").html(resp[cont].description);
          cont--;
        }
    }else{
      cont = resp.length - 1;
      $(".nameWork").html(resp[cont].name);
      $(".imgWork").attr("src", resp[cont].imgUrl);
      $(".pWork").html(resp[cont].description);
      cont--;
    }

    },
    error: function(xhr) {
      console.log(xhr);
    }
  });
})
