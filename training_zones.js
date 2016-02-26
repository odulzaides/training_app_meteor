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

    Template.input_fields.onCreated(function () {
        rd = new ReactiveDict('myDict');
        rd.set('calculations', []);
    });

    //Template.input_fields.helpers({
    //    'table': function () {
    //        return rd.get('calculations'); // will return your array. when ever data changes, helper will change automatically.
    //    }
    //});

    Template.input_fields.events({
        'click #inputForm': function (e) {
            // create variables for user FTP and LTHR values
            var ftp_value = $("#ftp").val();
            var lthr_value = $("#lthr").val();

            // Calculation of training zones for power and heart rate.
            var calculations = [

                {end_1: ftp_value * .56},
                {end_2: ftp_value * .75},
                {end_3: lthr_value * .80},
                {end_4: lthr_value * .90},
                {tempo_1: ftp_value * .76},
                {tempo_2: ftp_value * .85},
                {tempo_3: lthr_value * .91},
                {tempo_4: lthr_value * .95},
                {ss_1: ftp_value * .86},
                {ss_2: ftp_value * .95},
                {ss_3: lthr_value * .96},
                {ss_4: lthr_value * .99},
                {threshold_1: ftp_value * .96},
                {threshold_2: ftp_value * 1.05},
                {threshold_3: lthr_value * 1},
                {threshold_4: lthr_value * 1.02},
                {vo2_1: ftp_value * 1.06},
                {vo2_2: ftp_value * 1.20},
                {vo2_3: lthr_value * 1.03},
                {vo2_4: lthr_value * 1.06},
                {anaerobic_1: ftp_value * 1.21},
                {anaerobic_2: ftp_value * 1.50},
                {anaerobic_3: "Over"},
                {anaerobic_4: lthr_value * 1.06},
                {np_2: ftp_value * 1.51}

            ];

            rd.set('calculations', calculations);
        }

    });
    Template.input_fields.helpers({
        'table': function () {
            return rd.get('calculations'); // will return your array. when ever data changes, helper will change automatically.
        }
    });

}
//
//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    // code to run on server at startup
//  });
