<!doctype html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<html lang="en" ng-app="givenow">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Give Now Home Page</title>
  <!-- STYLES -->
  <!-- build:css lib/css/main.min.css -->
  <link rel="stylesheet" type="text/css" href="components/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="components/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="components/giveco-ui/dist/css/giveco.min.css">
  <link rel="stylesheet" type="text/css" href="components/css/header.css">
  <link rel="stylesheet" type="text/css" href="components/css/formElements.css">

  <!-- endbuild -->
  <!-- SCRIPTS -->
  <!-- build:js lib/js/main.min.js -->
  
  <script type="text/javascript" src="components/angular/angular.min.js"></script>
  <script type="text/javascript" src="components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
  <script type="text/javascript" src="components/angular-cookies/angular-cookies.min.js"></script>
  <script type="text/javascript" src="components/angular-ui-router/release/angular-ui-router.min.js"></script>
  <script type="text/javascript" src="components/angular-translate/angular-translate.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.7.2/angular-translate.js"></script> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate-interpolation-messageformat/2.7.2/angular-translate-interpolation-messageformat.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate-storage-cookie/2.7.2/angular-translate-storage-cookie.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate-storage-local/2.7.2/angular-translate-storage-local.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate-loader-url/2.7.2/angular-translate-loader-url.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate-loader-static-files/2.7.2/angular-translate-loader-static-files.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate-handler-log/2.7.2/angular-translate-handler-log.js"></script>
    <script type="text/javascript"  src="components/angular-resource/angular-resource.js"></script>
    <script type="text/javascript"  src="//cdn.ckeditor.com/4.5.8/standard-all/ckeditor.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/ngstorage/0.3.6/ngStorage.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular-sanitize.js"></script>
  
  <!-- endbuild -->
  <!-- Custom Scripts -->
  <!--script type="text/javascript" src="js/dashboard.min.js"></script-->
  <script type="text/javascript" src="components/js/app.js"></script>
  <script type="text/javascript" src="components/js/controllers/alert-ctrl.js"></script>
  <script type="text/javascript" src="components/js/controllers/master-ctrl.js"></script>
  <script type="text/javascript" src="components/js/services/translation-services.js"></script>
  <script type="text/javascript" src="components/js/services/user-services.js"></script>
  <script type="text/javascript" src="components/js/services/site-services.js"></script>
  <script type="text/javascript" src="components/js/services/sitetheme-services.js"></script>
  <script type="text/javascript" src="components/js/services/media-services.js"></script>
  <script type="text/javascript" src="components/js/directives/dirPagination.js"></script>
  <script type="text/javascript" src="components/js/directives/loading.js"></script>
  <script type="text/javascript" src="components/js/directives/widget.js"></script>
  <script type="text/javascript" src="components/js/directives/widget-body.js"></script>
  <script type="text/javascript" src="components/js/directives/widget-header.js"></script>
  <script type="text/javascript" src="components/js/directives/widget-footer.js"></script>
  <script type="text/javascript" src="components/js/module.js"></script>
  <script type="text/javascript" src="components/js/routes.js"></script>
  <script type="text/javascript" src="components/js/underscore.js"></script>
  <script type="text/javascript" src="components/js/services/blog-services.js"></script>
  <script type="text/javascript" src="components/js/services/pagetemplate-services.js"></script>
  <script type="text/javascript" src="components/js/services/sitetemplate-services.js"></script>
</head>
<body ng-controller="MasterCtrl">
<!-- top nav start  -->
<nav class="navbar navbar-default nav-background nav-margin">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Giveco</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Dashboard<span class="sr-only">(current)</span></a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Setup <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#/manage/sitetheme">Theme</a></li>
            <li><a href="#/manage/sitetemplate">Templates</a></li>
            <li><a href="#/manage/pagetemplate">Page Templates</a></li>
            <li><a href="#/setup/media">Media</a></li>
            <li><a href="#/setup/category">Category</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Recent Site</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#/manage/site"> Sites</a></li>
            <li><a href="#/events"> Events</a></li>
            <li><a href="#/manage/blog"> Blogs</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Create <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#/createsite">Create Site</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#/manage/user">Add Another User</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#/manage/dashboard">Customize Dashboard</a></li>
          </ul>
        </li>
      </ul>
      <!-- <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form> -->
      <!-- <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul> -->
      <div class="row header">
         <div class="user pull-right" ng-controller="LanguageController">
              <div class="item dropdown">
                <a href="#" class="dropdown-toggle">
                  <img src="components/img/avatar.jpg">
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">
                    <%-- <sec:authentication property="principal.firstName" /> <sec:authentication property="principal.lastName" /> --%>
                  </li>
                  <li class="divider"></li>
                  <li class="link">
                    <a href="#/profile">
                       {{ 'dashboard.headerbar.menu.profile' | translate}}
                    </a>
                  </li>
                  <li class="divider"></li>
                  <li class="link">
                    <a href="/logout">
                      {{ 'dashboard.headerbar.menu.logout' | translate}}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item dropdown">
               <a href="#" class="dropdown-toggle">
                  <i class="glyphicon glyphicon-flag"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" >
                  <li class="dropdown-header">
						{{ 'button.locale' | translate}}
                  </li>
                  <li class="divider"></li>
                  <li><a href="" ng-click="changeLanguage('en')"> {{ 'locale.english' | translate}}</a></li>
  				  <li><a href="" ng-click="changeLanguage('es')">{{ 'locale.spanish' | translate}}</a></li>
  				  <li><a href="" ng-click="changeLanguage('pt')">{{ 'locale.portugese' | translate}}</a></li>
                </ul>
              </div>
            </div>
            </div>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<!-- top nav ends  -->
<div ui-view></div>
</body>
</html>
