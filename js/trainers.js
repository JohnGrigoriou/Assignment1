$(document).ready( function() {
            
    $("form").submit(function(e){
        e.preventDefault();
        let fname = $("input[name='fname']").val();
        let lname = $("input[name='lname']").val();
        let sub = $("input[name='sub']").val();

        $("#mytable #tablebody").append("<tr data-fname='"+fname+"'data-lname='"+lname+"' data-sub='"+sub+"'>" +
        "<td>"+fname+"</td><td>"+lname+"</td><td>"+sub+"</td>"+'<td class="d-sm-table-cell"><button class="edit btn btn-success">Edit</button><button class="delete btn btn-danger">Delete</button></td></tr>');

        fname = $("input[name='fname']").val('');
        lname = $("input[name='lname']").val('');
        sub = $("input[name='sub']").val('');
        $("#myform").hide();
        $("#add").show();
    });

    $("#tablebody").on("click", ".edit", function(){
        let fname = $(this).parents("tr").attr('data-fname');
        let lname = $(this).parents("tr").attr('data-lname');
        let sub = $(this).parents("tr").attr('data-sub');
    
        $(this).parents("tr").find("td:eq(0)").html('<input name="data_fname" value="'+fname+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="data_lname" value="'+lname+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="data_sub" value="'+sub+'">');
    
        $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });

    $("body").on("click", ".btn-cancel", function(){
        let fname = $(this).parents("tr").attr('data-fname');
        let lname = $(this).parents("tr").attr('data-lname');
        let sub = $(this).parents("tr").attr('data-sub');
    
        $(this).parents("tr").find("td:eq(0)").text(fname);
        $(this).parents("tr").find("td:eq(1)").text(lname);
        $(this).parents("tr").find("td:eq(2)").text(sub);

        $(this).parents("tr").find(".edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("#tablebody").on("click", ".btn-update", function(){
        let fname = $(this).parents("tr").find("input[name='data_fname']").val();
        let lname = $(this).parents("tr").find("input[name='data_lname']").val();
        let sub = $(this).parents("tr").find("input[name='data_sub']").val();

        $(this).parents("tr").find("td:eq(0)").text(fname);
        $(this).parents("tr").find("td:eq(1)").text(lname);
        $(this).parents("tr").find("td:eq(2)").text(sub);
    
        $(this).parents("tr").attr("data-fname", fname);
        $(this).parents("tr").attr("data-lname", lname);
        $(this).parents("tr").attr("data-sub", sub);
    
        $(this).parents("tr").find(".edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });
});