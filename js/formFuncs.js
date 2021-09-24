$(document).ready(function(){
    $("#add").click( function() {
        $("#myform").show();
        $("#add").hide();
    });

    $("form").on("click", "#cancel", function(){
        $("#myform").hide();
        $("#add").show();
    });

    $("#tablebody").on("click", ".delete", function(e){
        let row =  $(this).parents("tr");
        $('#deleteModal').modal('show');
        $('#approveDelete').click(function(e){
            $('#deleteModal').modal('hide');
            row.remove();
        });
    });
});