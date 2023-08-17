<!DOCTYPE HTML>
<!--<html dir="rtl" lang="pt-br">-->

<html lang="pt-br">
	<head>
		<title>UMADES</title>
        <!-- Favicon and Touch Icons -->
        
        <!--Responsável pelo metadata-->
		<?php include_once("meta.php"); ?>
        
        <link href="images/favicon.png" rel="shortcut icon" type="image/png">   
<!--
        <link href="images/apple-touch-icon.png" rel="apple-touch-icon">
        <link href="images/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
        <link href="images/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
        <link href="images/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">
-->
		<!--Responsável pelo css-->
		<?php include_once("css/css.php"); ?>
        <!--Verifica menu-->
        <?php include_once("var.php"); ?>
        
	</head>
    <body class="">
        <div id="wrapper" class="clearfix">
            <?php include_once("view/componentes/loading.php");?>
            <?php include_once("view/header/header.php");?>
            <?php include_once("view/body/body.php");?>
            <?php include_once("view/footer/footer.php");?>
            
        </div>

        <?php include_once("js/posjs.php");?>

   </body>
</html>
