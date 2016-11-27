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
  <!-- endbuild -->
  <!-- SCRIPTS -->
  <!-- build:js lib/js/main.min.js -->
  <script type="text/javascript" src="components/angular/angular.min.js"></script>
  <script type="text/javascript" src="components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
  <script type="text/javascript" src="components/angular-cookies/angular-cookies.min.js"></script>
  <script type="text/javascript" src="components/angular-ui-router/release/angular-ui-router.min.js"></script>
  <!-- endbuild -->
  <!-- Custom Scripts -->
  <!--script type="text/javascript" src="js/dashboard.min.js"></script-->
  <script type="text/javascript" src="js/controllers/alert-ctrl.js"></script>
  <script type="text/javascript" src="js/controllers/master-ctrl.js"></script>
  <script type="text/javascript" src="js/directives/loading.js"></script>
  <script type="text/javascript" src="js/directives/widget.js"></script>
  <script type="text/javascript" src="js/directives/widget-body.js"></script>
  <script type="text/javascript" src="js/directives/widget-header.js"></script>
  <script type="text/javascript" src="js/directives/widget-footer.js"></script>
  <script type="text/javascript" src="js/module.js"></script>
  <script type="text/javascript" src="js/routes.js"></script>
</head>
<body ng-controller="MasterCtrl">
  <div id="page-wrapper" ng-class="{'open': toggle}" ng-cloak>

    <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <ul class="sidebar">
        <li class="sidebar-main">
          <a ng-click="toggleSidebar()">
            Dashboard
            <span class="menu-icon glyphicon glyphicon-transfer"></span>
          </a>
        </li>
        <li class="sidebar-title"><span>NAVIGATION</span></li>
        <li class="sidebar-list">
          <a href="#">Dashboard <span class="menu-icon fa fa-tachometer"></span></a>
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
            <div class="user pull-right">
              <div class="item dropdown">
                <a href="#" class="dropdown-toggle">
                  <img src="img/avatar.jpg">
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">
                    Joe Bloggs
                  </li>
                  <li class="divider"></li>
                  <li class="link">
                    <a href="#">
                      Profile
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
                    <a href="#">
                      Logout
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
                    Notifications
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Server Down!</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="meta">
              <div class="page">
                Dashboard
              </div>
              <div class="breadcrumb-links">
                Home / Dashboard
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