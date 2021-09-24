$(document).ready( function() {
            
    $("form").submit(function(e){
        e.preventDefault();
        let title = $("input[name='title']").val();
        let stream = $("input[name='stream']").val();
        let type = $("input[name='type']").val();
        let startDate = $("input[name='start']").val();
        let endDate = $("input[name='end']").val();

        let dateArr = startDate.split('-');
        let start = dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0];
        let dateArr1 = endDate.split('-');
        let end = dateArr1[1] + '/' + dateArr1[2] + '/' + dateArr1[0];

        $("#mytable #tablebody").append("<tr data-title='"+title+"'data-stream='"+stream+"' data-type='"+type+"' data-start='"+start+"' data-end='"+end+"'>" +
        "<td>"+title+"</td><td>"+stream+"</td><td>"+type+"</td><td>"+start+"</td><td>"+end+"</td>"+'<td class="d-sm-table-cell"><button class="edit btn btn-success">Edit</button><button class="delete btn btn-danger">Delete</button></td></tr>');

        title = $("input[name='title']").val('');
        stream = $("input[name='stream']").val('');
        type = $("input[name='type']").val('');
        start = $("input[name='start']").val('');
        end = $("input[name='end']").val('');
        $("#myform").hide();
        $("#add").show();
    });

    $("#tablebody").on("click", ".edit", function(){
        let title = $(this).parents("tr").attr('data-title');
        let stream = $(this).parents("tr").attr('data-stream');
        let type = $(this).parents("tr").attr('data-type');
        let start = $(this).parents("tr").attr('data-start');
        let end = $(this).parents("tr").attr('data-end');
    
        $(this).parents("tr").find("td:eq(0)").html('<input name="data_title" value="'+title+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="data_stream" value="'+stream+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="data_type" value="'+type+'">');
        $(this).parents("tr").find("td:eq(3)").html('<input name="data_start" value="'+start+'">');
        $(this).parents("tr").find("td:eq(4)").html('<input name="data_end" value="'+end+'">');
    
        $(this).parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });

    $("body").on("click", ".btn-cancel", function(){
        let title = $(this).parents("tr").attr('data-title');
        let stream = $(this).parents("tr").attr('data-stream');
        let type = $(this).parents("tr").attr('data-type');
        let start = $(this).parents("tr").attr('data-start');
        let end = $(this).parents("tr").attr('data-end');
    
        $(this).parents("tr").find("td:eq(0)").text(title);
        $(this).parents("tr").find("td:eq(1)").text(stream);
        $(this).parents("tr").find("td:eq(2)").text(type);
        $(this).parents("tr").find("td:eq(3)").text(start);
        $(this).parents("tr").find("td:eq(4)").text(end);

        $(this).parents("tr").find(".edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("#tablebody").on("click", ".btn-update", function(){
        let title = $(this).parents("tr").find("input[name='data_title']").val();
        let stream = $(this).parents("tr").find("input[name='data_stream']").val();
        let type = $(this).parents("tr").find("input[name='data_type']").val();
        let start = $(this).parents("tr").find("input[name='data_start']").val();
        let end = $(this).parents("tr").find("input[name='data_end']").val();

        $(this).parents("tr").find("td:eq(0)").text(title);
        $(this).parents("tr").find("td:eq(1)").text(stream);
        $(this).parents("tr").find("td:eq(2)").text(type);
        $(this).parents("tr").find("td:eq(3)").text(start);
        $(this).parents("tr").find("td:eq(4)").text(end);
    
        $(this).parents("tr").attr("data-title", title);
        $(this).parents("tr").attr("data-stream", stream);
        $(this).parents("tr").attr("data-type", type);
        $(this).parents("tr").attr("data-start", start);
        $(this).parents("tr").attr("data-end", end);
    
        $(this).parents("tr").find(".edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });
});