<?php
    /*
     *  Powder Nest
     *  Copyright (C) 2018 Powder Nest <info@powdernest.com> - All Rights Reserved.
     *
     *  This file is proprietary and confidential.
     *
     *  This file is property of Respondint Services LLC and is not meant to be distributed or duplicated, privately or publicly. 
     *  Unauthorized distributing, duplicating, or using of this file, via any medium, is strictly prohibited and is 
     *  in violation of Article 1, Section 1, Clause 8 of the United States Constitution and will be pursued.
     *
     *  If you have authorized access to this code, please note it may contain private, important, and sensitive information
     *  that can never be shared or copied under any circumstances.
     *
     *  This code is not licensed with the GNU Affero General Public License <http://www.gnu.org/licenses/agpl-3.0.html> 
     *  or the MIT License <http://opensource.org/licenses/MIT>.
     */

    /*if(isset($_POST['contact'])) {
      $name = $_POST['first-name'] . ' ' . $_POST['last-name'];
      $email = $_POST['email'];
      $message = $_POST['message'];
      mail("info@powdernest.com", "Contact Test", $message);
    }*/
    function compress($buffer) {
        $buffer = str_replace(array("\r\r\r", "\r\r", "\r\n", "\n\r", "\n\n\n", "\n\n"), "\n", $buffer);
        $buffer = str_replace(array("\t\t\t", "\t\t", "\t\n", "\n\t"), "\t", $buffer);
        $buffer = str_replace(array("\r\n", "\r", "\n", "\t", '    ', '    '), '', $buffer);
        $buffer = str_replace(" &nbsp;", "&nbsp;", $buffer);
        $buffer = str_replace("&nbsp; ", "&nbsp;", $buffer);
        return $buffer;
    }
    ob_start("compress");
?>
<!doctype html>
<html class="no-js" lang="">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Powder Nest</title>
  <meta name="description" content="The ultimate storage container. Air-tight silicone seal provides a superior protection.">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="mask-icon" href="safari-pinned-tab.svg" color="#000000">
  <meta name="apple-mobile-web-app-title" content="Powder Nest">
  <meta name="application-name" content="Powder Nest">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#ffffff">

  <meta name="google-site-verification" content="rpcu-Wsrmc2x7qtCKzwdk02z_0HdAaIcuJCtskKQzdI" />

  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:400,600,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" integrity="sha384-eYUmD1FFkORGrJdmrD37Z5LUEElTzF32+UI3jkzt7C1vpmUGo5KOVvb3Z5LeZHky" crossorigin="anonymous">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" integrity="sha384-vQPhfJdJkfTCHP7ouiqoAojjcDFuU346yP8z/pRpSn0xsWOfkMd+DkNmxns9jy4l" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw" crossorigin="anonymous">

  <link rel="stylesheet" href="/css/style.css?v=3">
</head>
<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
  <div id="sidebar">
    <div class="ui huge vertical text text-center menu w-100">
      <a class="item" id="closeSidebar"><i class="material-icons center">close</i></a>
      <a class="item pt-3 pb-3" id="mobileDesign" href="#design">
        Design
      </a>
      <a class="item pt-3 pb-3" id="mobileConstruction" href="#construction">
        Construction
      </a>
      <a class="item pt-3 pb-3" id="mobileFeatures" href="#features">
        Features
      </a>
      <a class="item pt-3 pb-3" id="mobileContact" href="#contact">
        Contact
      </a>
    </div>
  </div>
  <div id="pusher">
    <nav class="ui massive main top fixed text menu">
      <div class="container d-none d-lg-flex">
          <a class="item" id="home" href="https://powdernest.com">
            <img class="ui medium logo image img-fluid" src="/images/logo.svg">
          </a>
          <a class="item" id="design" href="#design">Design</a>
          <a class="item" id="construction" href="#construction">Construction</a>
          <a class="item" id="features" href="#features">Features</a>
          <a class="item" id="contact" href="#contact">Contact</a>
      </div>
      <div class="container centered d-lg-none">
        <div class="center">
          <img class="ui medium logo image img-fluid mt-1 mx-auto d-inline-block" src="/images/logo.svg" id="mobileHome">
          <a id="openSidebar"><i class="material-icons center">menu</i></a>
        </div>
      </div>
    </nav>
    
    <div id="wrapper" class="container-fluid pl-0 pr-0">
      <div class="mouse"><span>SCROLL TO<br>SEE IT IN<br>ACTION</span></div>
      <section class="first jumbotron flex centered">
        <div class="container center">
          <h1 class="display-3 text-center font-weight-bold mb-5 pb-5 animated main">The Ultimate Storage Container</h1>
          <h2 class="text-left font-weight-light animated hidden sub">Clean and Compact</h2>
          <h2 class="text-left font-weight-light animated hidden sub">Holds Up to 600 Grams</h2>
          <h2 class="text-left font-weight-light animated hidden sub">Removable Divider</h2>
          <h2 class="text-left font-weight-light animated hidden sub">Convenient Leveler</h2>
          <h2 class="text-left font-weight-light animated hidden sub">Hygenic Scoop Storage</h2>
          <h2 class="text-left font-weight-light animated hidden sub">Completely Disassemblable</h2>
          <div class="powdernest">
            <img src="images/placeholder.min.png" class="ui large image img-fluid mx-auto invisible" id="placeholder">
            <img src="images/actual-container.min.png" class="ui large image img-fluid mx-auto top" onmouseover="toggleUnlocked(this);" onmouseout="toggleLocked(this);">
            <img src="images/actual-empty-container-bottom.min.png" class="ui large image img-fluid mx-auto base">
            <img src="images/actual-separator.min.png?v=3" class="ui large image img-fluid mx-auto separator">
            <img src="images/actual-spoon.min.png?v=3" class="ui image img-fluid mx-auto spoon">
            <img src="images/actual-empty-container-top.min.png" class="ui large image img-fluid mx-auto opening">
            <img src="images/bpa-free-label.svg" class="ui small image img-fluid bpa-free-label rounded-circle animated second zoomIn">
          </div>
        </div>
      </section>
      <!--<section class="second jumbotron flex">
        <div class="container">
          <h2 class="display-4 font-weight font-weight-normal">Design</h2>
        </div>--
      </section>
      <section class="third jumbotron flex">
        <--<div class="container">
          <h2 class="display-4 font-weight font-weight-normal">Construction</h2>
        </div>--
      </section>-->
      <section class="second jumbotron flex centered">
        <div class="container center">
          <div class="row">
            <div class="col-12 col-lg-8 order-2 order-lg-1">
              <h1 class="display-2 font-weight-normal features">Simplicty<br>Strength<br>Safety</h1>
              <h2 class="display-4 font-weight-light mt-5 features">Freezer Safe<br>Heat Resistant<br>Microwave Safe<br>Dishwasher Safe<br>Maximize Shelf Life<br>Moisture and Humidity Control</h2>
            </div>
            <div class="col-12 col-lg-4 order-1 order-lg-2 mt-5 pt-5">
              <img src="images/actual-in-use.min.png?v=2" class="ui large image img-fluid mt-5 mb-5 mx-auto">
            </div>
          </div>
        </div>
      </section>
      <section class="third jumbotron flex centered">
        <div class="container center pt-5 pb-5">
          <div class="row">
            <div class="col-12 col-lg-8 order-2 order-lg-1">
              <h1 class="display-3 font-weight font-weight-normal mb-5 text-center text-lg-left">Interested in wholesale?</h1>
              <h1 class="display-4 font-weight font-weight-light mt-5 mb-5 text-center text-lg-left">Contact Us</h1>
              <!--<form class="ui huge form" name="contact" method="post">
                <div class="two fields pr-3 pl-3">
                  <input type="text" name="first-name" placeholder="First Name" class="mr-5">
                  <input type="text" name="last-name" placeholder="Last Name">
                </div>
                <div class="field">
                  <input type="text" name="email" placeholder="Email Address">
                </div>
                <div class="field">
                  <label>Message</label>
                  <textarea></textarea>
                </div>
                <input type="submit" value="Send" class="ui huge green button">
              </form>-->
                <a href="mailto:info@powdernest.com" class="ui huge green button">Send us an Email</a>
            </div>
            <div class="col-12 col-lg-4 order-1 order-lg-2">
              <img src="images/box.min.png" class="ui large image img-fluid  pt-5 pb-5 mx-auto">
            </div>
        </div>
      </section>
      <footer class="sixth jumbotron centered ui inverted segment rounded-0">
        <div class="center">
          Copyright &copy; 2018 Powder Nest. All Rights Reserved.
        </div>
      </footer>
    </div>
  </div>
  <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha384-bPV3mA2eo3edoq56VzcPBmG1N1QVUfjYMxVIJPPzyFJyFZ8GFfN7Npt06Zr23qts" crossorigin="anonymous"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.js" integrity="sha384-d0+ufSr6Y7eU5V6E8Bt1AioIn4ParGkr0AwQ5RZD/S2mTaiEXMV78mqaYKMLE2qv" crossorigin="anonymous"></script>
  <script src="/js/main.js"></script>
  <script async src="//www.googletagmanager.com/gtag/js?id=UA-120029659-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-120029659-1');
  </script>
</body>

</html>
