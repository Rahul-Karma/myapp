<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<div class="row header">
	<div class="col-xs-12">
		<div class="user pull-right">
			<div class="item dropdown">
				<a href="#" class="dropdown-toggle"> <img src="img/avatar.jpg">
				</a>
				<ul class="dropdown-menu dropdown-menu-right">
					<li class="dropdown-header"><sec:authentication
							property="principal.username" /></li>
					<li class="divider"></li>
					<li class="link"><a href="#"> <spring:message code="dashboard.headerbar.menu.profile"/> </a></li>
					<li class="link"><a href="#"> Menu Item </a></li>
					<li class="link"><a href="#"> Menu Item </a></li>
					<li class="divider"></li>
					<li class="link"><a href="/logout"> <spring:message code="dashboard.headerbar.menu.logout"/> </a></li>
				</ul>
			</div>
			<div class="item dropdown">
				<a href="#" class="dropdown-toggle"> <i class="fa fa-bell-o"></i>
				</a>
				<ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">
                    <spring:message code="button.locale"/>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#"><spring:message code="locale.english"/></a>
                  </li>
                   <li>
                    <a href="#"><spring:message code="locale.spanish"/></a>
                  </li>
                  <li>
                    <a href="#"><spring:message code="locale.portugese"/></a>
                  </li>
				</ul>
			</div>
		</div>
		<div class="meta">
			<div class="page">Dashboard</div>
			<div class="breadcrumb-links">Home / Dashboard</div>
		</div>
	</div>
</div>