if (Meteor.isClient) {
  // Top Navbar links
  $(function(){
  var nav_items = [
    {
      home: "Home",
      home_link: "index.html"
    },

    {
      features: "Features",
      features_link: "features.html"
    },
    {
      about: "About",
      about_link: "about.html"
    }
  ];
// top navbar template helper
  Template.nav.helpers({nav: nav_items});

//  TODO - Set up training object
// set up training zones calculations

  $("#button").click(function(){

    var ftp_value = $("#ftp").val();

    var lthr_value = $("#lthr").val();

  });
  });
};

//
//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    // code to run on server at startup
//  });
