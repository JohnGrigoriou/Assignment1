$(document).ready( function() {
            
    $("form").submit(function(e){
        e.preventDefault();
        let fname = $("input[name='fname']").val();
        let lname = $("input[name='lname']").val();
        let dobDate = $("input[name='dob']").val();
        let fees = $("input[name='fees']").val();

        let dateArr = dobDate.split('-');
        let dob = dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0];

        $("#mytable #tablebody").append("<tr data-fname='"+fname+"'data-lname='"+lname+"' data-dob='"+dob+"' data-fees='"+fees+"'>" +
        "<td>"+fname+"</td><td>"+lname+"</td><td>"+dob+"</td><td>"+fees+"</td>"+'<td class="d-sm-table-cell"><button class="edit btn btn-success">Edit</button><button class="delete btn btn-danger">Delete</button></td></tr>');

        fname = $("input[name='fname']").val('');
        lname = $("input[name='lname']").val('');
        dob = $("input[name='dob']").val('');
        fees = $("input[name='fees']").val('');
        $("#myform").hide();
        $("#add").show();
    });

    $("#tablebody").on("click", ".edit", function(){
        let fname = $(this).parents("tr").attr('data-fname');
        let lname = $(this).parents("tr").attr('data-lname');
        let dob = $(this).parents("tr").attr('data-dob');
        let fees = $(this).parents("tr").attr('data-fees');
    
        $(this).parents("tr").find("td:eq(0)").html('<input name="data_fname" value="'+fname+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="data_lname" value="'+lname+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="data_dob" value="'+dob+'">');
        $(this).parents("tr").find("td:eq(3)").html('<input name="data_fees" value="'+fees+'">');
    
        $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });

    $("body").on("click", ".btn-cancel", function(){
        let fname = $(this).parents("tr").attr('data-fname');
        let lname = $(this).parents("tr").attr('data-lname');
        let dob = $(this).parents("tr").attr('data-dob');
        let fees = $(this).parents("tr").attr('data-fees');
    
        $(this).parents("tr").find("td:eq(0)").text(fname);
        $(this).parents("tr").find("td:eq(1)").text(lname);
        $(this).parents("tr").find("td:eq(2)").text(dob);
        $(this).parents("tr").find("td:eq(3)").text(fees);

        $(this).parents("tr").find(".edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("#tablebody").on("click", ".btn-update", function(){
        let fname = $(this).parents("tr").find("input[name='data_fname']").val();
        let lname = $(this).parents("tr").find("input[name='data_lname']").val();
        let dob = $(this).parents("tr").find("input[name='data_dob']").val();
        let fees = $(this).parents("tr").find("input[name='data_fees']").val();

        $(this).parents("tr").find("td:eq(0)").text(fname);
        $(this).parents("tr").find("td:eq(1)").text(lname);
        $(this).parents("tr").find("td:eq(2)").text(dob);
        $(this).parents("tr").find("td:eq(3)").text(fees);
    
        $(this).parents("tr").attr("data-fname", fname);
        $(this).parents("tr").attr("data-lname", lname);
        $(this).parents("tr").attr("data-dob", dob);
        $(this).parents("tr").attr("data-fees", fees);
    
        $(this).parents("tr").find(".edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });
});