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
            let aValue = $("#trainerAdd option:selected").text();            
            let rValue = $("#trainerRemove option:selected").text();
            i++;
            if (i < 3) {
                var listItems = $(row).find("td:eq(5) .recordList");
                var temp = true;
                var temp1 = true;
                if (aValue != "- Add Trainer -"){
                    $(listItems).children().each(function(index) {
                        if ($(this).text() == aValue) {
                            temp = false;
                        }
                    });
                    if (temp == true) {
                        listItems.append('<li>'+aValue+'</li>');
                    } else {
                        alert('Trainer already exists!!');
                    }                       
                }
                if (rValue != "- Remove Trainer -"){
                    $(listItems).children().each(function(index) {
                        if ($(this).text() == rValue) {
                            $(listItems).find("li:contains("+rValue+")").remove();
                            temp1 = false;
                        }
                    });
                    if (temp1 == true) {
                        alert('Trainer not exists!!');
                    }
                }               
            $("#myform").hide();
            }   
        });
    });
});    