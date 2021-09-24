$(document).ready(function(){
    $(".edit").on("click", function(e){
        e.preventDefault();
        var row = $(this).parents("tr");
        var i = 1;
        $("#myform").show();


        let cols = $(this).closest("tr");

        let startDate = cols.find("td:eq(3)").text();
        let endDate = cols.find("td:eq(4)").text();

        let dateArr = startDate.split('/');
        let start = dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
        let dateArr1 = endDate.split('/');
        let end = dateArr1[2] + '-' + dateArr1[1] + '-' + dateArr1[0];


        let title = $("input[name='title']").val(cols.find("td:eq(0)").text());
        let stream = $("input[name='stream']").val(cols.find("td:eq(1)").text());
        let type = $("input[name='type']").val(cols.find("td:eq(2)").text());
        let startNew = $("input[name='start']").val(start);
        let endNew = $("input[name='end']").val(end);

        $("form").submit(function(e){
            e.preventDefault();
            let aValue = $("#studentAdd option:selected").text();            
            let rValue = $("#studentRemove option:selected").text();
            let adValue = $("#assAdd option:selected").text();            
            let reValue = $("#assRemove option:selected").text();
            i++;
            if (i < 3) {
                var listItems = $(row).find("td:eq(5) .recordList");
                var listItems1 = $(row).find("td:eq(6) .recordList");
                var temp = true;
                var temp1 = true;
                var temp2 = true;
                var temp3 = true;
                if (aValue != "- Add Student -"){
                    $(listItems).children().each(function(index) {
                        if ($(this).text() == aValue) {
                            temp = false;
                        }
                    });
                    if (temp == true) {
                        listItems.append('<li>'+aValue+'</li>');
                    } else {
                        alert('Student already exists!!');
                    }                       
                }
                if (rValue != "- Remove Student -"){
                    $(listItems).children().each(function(index) {
                        if ($(this).text() == rValue) {
                            $(listItems).find("li:contains("+rValue+")").remove();
                            temp1 = false;
                        }
                    });
                    if (temp1 == true) {
                        alert('Student not exists!!');
                    }
                }  
                if (adValue != "- Add Assignment -"){
                    $(listItems1).children().each(function(index) {
                        if ($(this).text() == adValue) {
                            temp2 = false;
                        }
                    });
                    if (temp2 == true) {
                        listItems1.append('<li>'+adValue+'</li>');
                    } else {
                        alert('Assignment already exists!!');
                    }                       
                }
                if (reValue != "- Remove Assignment -"){
                    $(listItems1).children().each(function(index) {
                        if ($(this).text() == reValue) {
                            $(listItems1).find("li:contains("+reValue+")").remove();
                            temp3 = false;
                        }
                    });
                    if (temp3 == true) {
                        alert('Assignment not exists!!');
                    }
                }                
            $("#myform").hide();
            }   
        });
    });
});    