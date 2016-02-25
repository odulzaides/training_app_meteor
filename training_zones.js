if (Meteor.isClient) {
  // Top Navbar links

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
     var calculations = [

       {end_1:ftp *.56, end_2:ftp *.75, end_3:lthr *.80, end_4:lthr *.84}
     ];
    Template.table.helpers({table:calculations});

  });

//  TODO - Set up table template

};

//
//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    // code to run on server at startup
//  });
