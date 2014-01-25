<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>
<link href="../CSS/normalize.css" rel="stylesheet" type="text/css" />
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->

<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title>FoodZone</title>
<meta name="description" content="Food Zone donde encuentras el local y el plato que quieres comer.">
<meta name="keywords" content="">

<!-- Mobile viewport -->
<meta name="viewport" content="width=device-width; initial-scale=1.0">

<link rel="shortcut icon" href="images/favicon.ico"  type="image/x-icon" />

<!-- CSS-->
<!-- Google web fonts. You can get your own bundle at http://www.google.com/fonts. Don't forget to update the CSS accordingly!-->
<link href='http://fonts.googleapis.com/css?family=Droid+Serif|Ubuntu' rel='stylesheet' type='text/css'>
<link href="../CSS/basic-style.css" rel="stylesheet" type="text/css" />
<link href="../CSS/estilo01.css" rel="stylesheet" type="text/css" />
<link href="../CSS/EstiloIndex.css" rel="stylesheet" type="text/css" />

<!-- end CSS-->
    
<!-- JS-->
<script src="../js/libs/modernizr-2.6.2.min.js"></script>
<script src="js/cargarArchivos.js"></script>
<script src="../js/scriptNavigation.js"></script>
<script 
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAn1VT66c9YP05wsQ05_rEv6z6mqi04r2o&sensor=true">
</script>
<!-- end JS-->


</head>

<body id="home">
<!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

  
<!-- header area -->
    <header class="wrapper clearfix">
		       
        <div id="banner">        
        	<div id="logo">
                <a href="basic.html">
                    <img src="../images/logo-peque.jpg" alt="Logo Llevame a comer!"/>
                    <h2 id="sloganTexto">
				            Encuentra donde comer lo que quieres comer!
			        </h2>
                </a>
            </div> 
        </div>
        
        <!-- main navigation -->
        <nav id="topnav" role="navigation">
        <div class="menu-toggle">Menu</div>  
        	<ul class="srt-menu" id="menu-main-navigation">
            <li class="current"><a href="basic.html">Inicio</a></li>
            <li><a href="basic-internal.html">Internal page demo</a></li>
			<li><a class="general" href="#">Locales por Tipo</a>
                <ul id="listaLocalTipo">
                </ul>
            </li>
            <li><a class="general" href="#">Locales por Zona</a>
                <ul id="listaLocalZona">
                </ul>
                </li>
                <li><a class="admin" href="#">Administrar Usuarios</a></li>
                <li><a class="adminLocal" href="#">Administrar Local</a></li>
                <li><a class="usuario" href="#">Favoritos</a></li>
                <li><a class="usuario" href="#">Quiero Comer YA!</a></li>
                <li ><a href="#" class="general" id="InicioSesion">Iniciar sesi&oacute;n</a>
                    <ul>
                        <li>
                            <div class="loginform" id="divLogin">
            <form action="/ideas?destination=ideas" accept-charset="UTF-8" method="post" id="user-login-form">
                <div>
                    <div class="login-error"></div>
                    <div class="form-item" id="edit-name-wrapper">
                        <label for="edit-name">Usuario: <span class="form-required" title="This field is required.">*</span></label>
                        <input type="text" maxlength="60" name="name" id="edit-name" size="15" value="" class="form-text required error">
                    </div>
                    <div class="form-item" id="edit-pass-wrapper">
                        <label for="edit-pass">Contraseña: <span class="form-required" title="This field is required.">*</span></label>
                        <input type="password" name="pass" id="edit-pass" maxlength="60" size="15" class="form-text required error">
                    </div>
                    <input type="submit" name="op" id="btnIniciarSesion" value="Iniciar Sesion" class="form-submit">

                </div>
            </form>
                                <ul>
                            <li><a href="/usuario/registro.html" title="Create a new user account." class="gi-user-register">Registrarse</a></li>
                            <li class="last"><a href="/usuario/contrasena.html" title="Request new password via e-mail.">Olvid&oacute; su clave</a></li>
                        </ul>
        </div>
                        </li>
                    </ul>
                </li>
                <li ><a href="#" class="general" id="cierroSesion" style="display: none">Cerrar sesi&oacute;n</a></li>
		</ul>     
		</nav><!-- end main navigation -->
  
    </header><!-- end header -->
 
    
 
<!-- hero area (the grey one with a slider -->
    <section id="hero" class="clearfix">    
    <!-- responsive FlexSlider image slideshow -->
    <div class="wrapper">
        <div class="grid_5 alpha">
            <form id="frmBusqueda" name="frm" action="/searchresults.html" method="get">
                <h3 class="tituloBusqueda">
                    <img class="search-box-title-icon" width="24" height="23" alt="" src="http://q-ec.bstatic.com/static/img/affiliate_base/sb_border_gradient/13cf80cf601748203235e25e69935667e09d112a.png"></img>
                    Buscar locales
                </h3>
                <div class="contenedorOpcionBusqueda">
                <label class="labelBusqueda">Ubicaci&oacute;n/Zona:</label> 
                <select id="selectZona">
	            </select>
                </div>
                <div class="contenedorOpcionBusqueda">
                <label class="labelBusqueda">Tipo de Local</label>
                <select id="selectTipo">
	            </select>
                </div>
                <div class="contenedorOpcionBusqueda">
                <label class="labelBusqueda">Fecha desde:</label>
                <input id="dateDesde" class="inputDate" type="date" required/>
                </div>
                <div class="contenedorOpcionBusqueda">
                <label class="labelBusqueda">Fecha hasta</label>
                <input id="dateHasta" class="inputDate" type="date" required/>
                </div>
                <div class="contenedorOpcionBusqueda">
                <input id="btnBuscar" type="button" value="Buscar"/>
                </div>
            </form>
        </div>
        <div class="grid_7 omega rightfloat">
                <div class="flexslider">
                    <ul class="slides">
                        <li>
                            <img src="../images/basic-pic1.jpg" />
                            <p class="flex-caption">Love Brazil !!! Sea view from Rio de Janeiro fort.</p>
                        </li>
                        <li>
                            <a href="http://www.prowebdesign.ro"><img src="../images/basic-pic2.jpg" /></a>
                            <p class="flex-caption">El Arco Cabo Mexico. This image is wrapped in a link.</p>
                        </li>
                        <li>
                            <img src="../images/basic-pic3.jpg" />
                            <p class="flex-caption">Arches National Park, Utah, Usa.</p>
                        </li>
                        <li>
                            <img src="../images/basic-pic4.jpg" />
                            <p class="flex-caption">Morocco desert.</p>
                        </li>
                    </ul>
                  </div>
                </div><!-- FlexSlider -->
        </div>
    </section><!-- end hero area -->





<!-- main content area -->   
<div id="main" class="wrapper">
    
    
<!-- content area -->    
	<!--todo el contenido-->
	<section id="content" class="wide-content">

	</section><!-- #end content area -->   

  </div><!-- #end div #main .wrapper -->
<!-- footer area -->    
<footer>
	<div id="colophon" class="wrapper clearfix">
    	Proyecto de Desarrollo de Aplicaciones Web <br>
			Desarrollado por: 
			<ul>
				<li> Iv&aacute;n Aveiga</li>
				<li> Diana Panchana</li>
				<li> Ver&oacute;nica Pozo</li>
				<li> Marcelo S&aacute;nchez</li>
			</ul>
			
			Todos los derechos reservados &copy;
			
			2013 - 2014
    </div>
    
<!--You can NOT remove this attribution statement from any page, unless you get the permission from prowebdesign.ro--><div id="attribution" class="wrapper clearfix" style="color:#666; font-size:11px;">Site built with <a href="http://www.prowebdesign.ro/simple-responsive-template/" target="_blank" title="Simple Responsive Template is a free software by www.prowebdesign.ro" style="color:#777;">Simple Responsive Template</a></div><!--end attribution-->
    
</footer><!-- #end footer area --> 


<!-- jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/libs/jquery-1.9.0.min.js">\x3C/script>')</script>

<script defer src="js/flexslider/jquery.flexslider-min.js"></script>

<!-- fire ups - read this file!  -->   
<script src="js/main.js"></script>

</body>
</html>