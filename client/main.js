import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

$(function () {
    // Init page helpers (Slick Slider plugin)
    App.initHelpers('slick');
});


import './main.html';
import 'client/assets/js/core/jquery.min.js';  
import 'client/assets/js/core/jquery.slimscroll.min.js';
import 'client/assets/js/core/jquery.scrollLock.min.js';
import 'client/assets/js/core/jquery.appear.min.js';
import 'client/assets/js/core/jquery.countTo.min.js';
import 'client/assets/js/core/jquery.placeholder.min.js';
import 'client/assets/js/core/js.cookie.min.js';
import 'client/assets/js/core/bootstrap.min.js';
import 'client/assets/js/app.js';

// Page Plugins 
import 'client/assets/js/plugins/slick/slick.min.js';
import 'client/assets/js/plugins/chartjs/Chart.min.js';

// Page JS Code 
import 'client/assets/js/pages/base_pages_dashboard.js';



