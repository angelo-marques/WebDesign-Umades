<script src="js/modernizer.js"></script>
<style>
    .scrolloff{ pointer-events: none;}
</style>
<script>
    $(document).ready(function () {
        $('#map_canvas1').addClass('scrolloff');
        $('#canvas1').on('click', function () {
            $('#map_canvas1').removeClass('scrolloff'); 
        });
        $("#map_canvas1").mouseleave(function () {
            $('#map_canvas1').addClass('scrolloff');
        });
    });
</script>