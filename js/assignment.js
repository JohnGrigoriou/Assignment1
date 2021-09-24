$(document).ready( function() {
            
    $("form").submit(function(e){
        e.preventDefault();
        let title = $("input[name='title']").val();
        let desc = $("input[name='desc']").val();
        let subDate = $("input[name='date']").val();
        let oral = $("input[name='oral']").val();
        let total = $("input[name='total']").val();

        let dateArr = subDate.split('-');
        let date = dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0];

        $("#mytable #tablebody").append("<tr data-title='"+title+"'data-desc='"+desc+"' data-date='"+date+"' data-oral='"+oral+"' data-total='"+total+"'>" +
        "<td>"+title+"</td><td>"+desc+"</td><td>"+date+"</td><td>"+oral+"</td><td>"+total+"</td>"+'<td class="d-sm-table-cell"><button class="edit btn btn-success">Edit</button><button class="delete btn btn-danger">Delete</button></td></tr>');

        title = $("input[name='title']").val('');
        desc = $("input[name='desc']").val('');
        date = $("input[name='date']").val('');
        oral = $("input[name='oral']").val('');
        total = $("input[name='total']").val('');
        $("#myform").hide();
        $("#add").show();
    });

    $("#tablebody").on("click", ".edit", function(){
        let title = $(this).parents("tr").attr('data-title');
        let desc = $(this).parents("tr").attr('data-desc');
        let date = $(this).parents("tr").attr('data-date');
        let oral = $(this).parents("tr").attr('data-oral');
        let total = $(this).parents("tr").attr('data-total');
    
        $(this).parents("tr").find("td:eq(0)").html('<input name="data_title" value="'+title+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="data_desc" value="'+desc+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="data_date" value="'+date+'">');
        $(this).parents("tr").find("td:eq(3)").html('<input name="data_oral" value="'+oral+'">');
        $(this).parents("tr").find("td:eq(4)").html('<input name="data_total" value="'+total+'">');
    
        $(this).parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });

    $("body").on("click", ".btn-cancel", function(){
        let title = $(this).parents("tr").attr('data-title');
        let desc = $(this).parents("tr").attr('data-desc');
        let date = $(this).parents("tr").attr('data-date');
        let oral = $(this).parents("tr").attr('data-oral');
        let total = $(this).parents("tr").attr('data-total');
    
        $(this).parents("tr").find("td:eq(0)").text(title);
        $(this).parents("tr").find("td:eq(1)").text(desc);
        $(this).parents("tr").find("td:eq(2)").text(date);
        $(this).parents("tr").find("td:eq(3)").text(oral);
        $(this).parents("tr").find("td:eq(4)").text(total);

        $(this).parents("tr").find(".edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("#tablebody").on("click", ".btn-update", function(){
        let title = $(this).parents("tr").find("input[name='data_title']").val();
        let desc = $(this).parents("tr").find("input[name='data_desc']").val();
        let date = $(this).parents("tr").find("input[name='data_date']").val();
        let oral = $(this).parents("tr").find("input[name='data_oral']").val();
        let total = $(this).parents("tr").find("input[name='data_total']").val();

        $(this).parents("tr").find("td:eq(0)").text(title);
        $(this).parents("tr").find("td:eq(1)").text(desc);
        $(this).parents("tr").find("td:eq(2)").text(date);
        $(this).parents("tr").find("td:eq(3)").text(oral);
        $(this).parents("tr").find("td:eq(4)").text(total);
    
        $(this).parents("tr").attr("data-title", title);
        $(this).parents("tr").attr("data-desc", desc);
        $(this).parents("tr").attr("data-date", date);
        $(this).parents("tr").attr("data-oral", oral);
        $(this).parents("tr").attr("data-total", total);
    
        $(this).parents("tr").find(".edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });
});  

