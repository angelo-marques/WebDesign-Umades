<?php

    if(isset($_GET['p'])){
        $page = $_GET['p'];
    } else {
        $page = "index";
    }

$home = "";

$quem_somos = ""; 
$diretoria = ""; 
$regionais = "";

$noticias = "";

$talentos = ""; 

$agenda = "";
$calendario = "";
$proximos_eventos = ""; 
$evento_descricao = ""; 

$midia =  "";
$fotos = ""; 
$videos = ""; 
$twitter = "";
$instagram = "";

$contato = "";

$doacoes = "";

switch ($page){
        
    case "index":
        $home = "active";
    break;
        
    case "quem_somos":
        $quem_somos = "active";
    break;
    case "diretoria":
        $quemsomos = "active";
    break;
    case "regionais":
        $quemsomos = "active";
    break;
        
    case "noticias":
        $noticias = "active";
    break;
        
    case "talentos":
        $talentos = "active";
    break;
        
    case "agenda":
        $agenda = "active";
    break;
    case "calendario":
        $agenda = "active";
    break;
    case "proximos_eventos":
        $agenda = "active";
    break;
    case "evento_descricao":
        $agenda = "active";
    break;
        
    case "midia":
        $midia = "active";
    break;
    case "fotos":
        $midia = "active";
    break;
    case "videos":
        $midia = "active";
    break;
    case "twitter":
        $midia = "active";
    break;
    case "instagram":
        $midia = "active";
    break;
        
    case "contato":
        $contato = "active";
    break;
        
    case "doacoes":
        $doacoes = "active";
    break;  
        
    default:
        $page = "index";
        $home = "active";
    break;
}

function foto($filtro,$pasta, $qtd){
    
    for ($i = 1;$i<=$qtd;$i++){
        
    echo "
    <div class='pitem entry item-w1 item-h2 ".$filtro."'>
						<img src='img/_galeria/".$pasta."/".$i."p.jpg' alt='' class='img-responsive'>
						<div class='magnifier'>
							<div class='buttons'>
								<a data-rel='prettyPhoto' href='img/_galeria/".$pasta."/".$i.".jpg' class='st' rel='bookmark'><span class='fa fa-search'></span></a>
							</div>
						</div><!-- end magnifier -->
                    </div> 
    ";
    
}}

function banner2(){
    echo "
    <section class='section banner' style='background-image:url('img/_site/banner2.jpg');' data-img-width='1688' data-img-height='470' data-diff='100'>

        </section><!-- end section -->
    ";
}

?>