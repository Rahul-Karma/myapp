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
  <link rel="stylesheet" type="text/css" href="components/rdash-ui/dist/css/rdash.min.css">
  <link rel="stylesheet" type="text/css" href="css/header.css">
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
  <!-- endbuild -->
  <!-- Custom Scripts -->
  <!--script type="text/javascript" src="js/dashboard.min.js"></script-->

  <script type="text/javascript" src="js/controllers/alert-ctrl.js"></script>
  <script type="text/javascript" src="js/controllers/master-ctrl.js"></script>
  <script type="text/javascript" src="js/services/translation-services.js"></script>
  <script type="text/javascript" src="js/directives/loading.js"></script>
  <script type="text/javascript" src="js/directives/widget.js"></script>
  <script type="text/javascript" src="js/directives/widget-body.js"></script>
  <script type="text/javascript" src="js/directives/widget-header.js"></script>
  <script type="text/javascript" src="js/directives/widget-footer.js"></script>
  <script type="text/javascript" src="js/module.js"></script>
  <script type="text/javascript" src="js/routes.js"></script>

</head>
<body ng-controller="MasterCtrl">
<!-- top nav start  -->
<nav class="navbar navbar-default nav-background nav-margin">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header" >
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
            <li><a href="#">Theme</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Subpage Templates</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Category</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Recent Site</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#"> Sites</a></li>
            <li><a href="#"> Events</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Create <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#/sites">Create Site</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Add Another User</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Customize Admin Dashboard</a></li>
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
         <div class="user pull-right">
              <div class="item dropdown">
                <a href="#" class="dropdown-toggle">
                  <img src="img/avatar.jpg">
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">
                    <sec:authentication property="principal.firstName" /> <sec:authentication property="principal.lastName" />
                  </li>
                  <li class="divider"></li>
                  <li class="link">
                    <a href="#">
                      <spring:message code="dashboard.headerbar.menu.profile"/>
                    </a>
                  </li>
                  <li class="link">
                    <a href="#">
                      Menu Item 
                      
                    </a>
                  </li>
                  <li class="link">
                    <a href="#">
                      Menu Item
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
      
                <ul class="dropdown-menu dropdown-menu-right" ng-controller="LanguageController">
                    <li class="dropdown-header">
                    <spring:message code="button.locale"/>
                  	</li>
  					<li><a href="" ng-click="changeLanguage('en')"> {{ 'locale.english' | translate}}</a></li>
  					<li><a href="" ng-click="changeLanguage('es')">{{ 'locale.spanish' | translate}}</a></li>
				</ul>
              </div>
            </div>
            </div>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<!-- top nav ends  -->

  <div id="page-wrapper" ng-class="{'open': toggle}" ng-cloak>
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <ul class="sidebar">
        <li class="sidebar-main">
          <a ng-click="toggleSidebar()">
            Actions
            <span class="menu-icon glyphicon glyphicon-transfer"></span>
          </a>
        </li>
        <li class="sidebar-title"><span>NAVIGATION</span></li>
        <li class="sidebar-list">
          <a href="#"> <spring:message code="dashboard.label"/> <span class="menu-icon fa fa-tachometer"></span></a>
        </li>
        <li class="sidebar-list">
          <a href="#/tables">Tables <span class="menu-icon fa fa-table"></span></a>
        </li>
      </ul>
      <div class="sidebar-footer">
        <div class="col-xs-4">
          <a href="https://github.com/rdash/rdash-angular" target="_blank">
            Github
          </a>
        </div>
        <div class="col-xs-4">
          <a href="https://github.com/rdash/rdash-angular/README.md" target="_blank">
            About
          </a>
        </div>
        <div class="col-xs-4">
          <a href="#">
            Support
          </a>
        </div>
      </div>
    </div>
    <!-- End Sidebar -->

    <div id="content-wrapper">
      <div class="page-content">

        <!-- Header Bar -->
        <div class="row header">
          <div class="col-xs-12">
            <%-- <div class="user pull-right">
              <div class="item dropdown">
                <a href="#" class="dropdown-toggle">
                  <img src="img/avatar.jpg">
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">
                    <sec:authentication property="principal.firstName" /> <sec:authentication property="principal.lastName" />
                  </li>
                  <li class="divider"></li>
                  <li class="link">
                    <a href="#">
                      <spring:message code="dashboard.headerbar.menu.profile"/>
                    </a>
                  </li>
                  <li class="link">
                    <a href="#">
                      Menu Item
                    </a>
                  </li>
                  <li class="link">
                    <a href="#">
                      Menu Item
                    </a>
                  </li>
                  <li class="divider"></li>
                  <li class="link">
                    <a href="/logout">
                      <spring:message code="dashboard.headerbar.menu.logout"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item dropdown">
               <a href="#" class="dropdown-toggle">
                  <i class="fa fa-bell-o"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">
                    <spring:message code="button.locale"/>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="/admin?locale=en"><spring:message code="locale.english"/></a>
                  </li>
                   <li>
                    <a href="/admin?locale=es"><spring:message code="locale.spanish"/></a>
                  </li>
                  <li>
                    <a href="/admin?locale=pt"><spring:message code="locale.portugese"/></a>
                  </li>
                </ul>
              </div>
            </div> --%>
            <div class="meta">
              <div class="page">
                 <spring:message code="dashboard.label"/>
              </div>
              <div class="breadcrumb-links">
                 <spring:message code="dashboard.label.home"/> /  <spring:message code="dashboard.label"/>
              </div>
            </div>
          </div>
        </div>
        <!-- End Header Bar -->

        <!-- Main Content -->
        <div ui-view></div>

      </div><!-- End Page Content -->
    </div><!-- End Content Wrapper -->
  </div><!-- End Page Wrapper -->
</body>
</html>