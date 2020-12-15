$(document).ajaxStart(function() {
    $("#loading").css("display", "block", );
});

loadPulses();

function loadPulses() {
    var api = 'https://otx.alienvault.com/api/v1/pulses/user/AlienVault?limit=20';
    $.ajax({
        type: 'GET',
        url: api,
        dataType: 'json',
        // Specify the authentication header
        //"Authorization": "Basic NDAyZDljMDg0ZjdhMDMxZWIwMzZiMTE0YWFiNjQ0MTQwNmE4MzliNDVjNWFhYWY1OTVlM2E3OGNmZDRkMDRmNTpGbWFzc2ltaWxpYW5vNzU="
        headers: {
            "Authorization": "Basic NDAyZDljMDg0ZjdhMDMxZWIwMzZiMTE0YWFiNjQ0MTQwNmE4MzliNDVjNWFhYWY1OTVlM2E3OGNmZDRkMDRmNTpGbWFzc2ltaWxpYW5vNzU="

        },
        success: function(data) {
            $(document).ready(function() {
                $("[id='pulsename']").click(function() {
                    alert($(this).attr("titlemodal"));
                });
            });
            HTMLpulse(data);
            $(document).ajaxComplete(function() {
                $("#loading").css("display", "none");
            });
        },
        complete: function(jqXHR) {
            if (jqXHR.status == '404') {
                console.log(jqXHR.statusText);
            }
        }

    })

}

//non in uso
function pulseDetail(pulseId) {
    var api = "https://otx.alienvault.com/api/v1/pulses/" + pulseId;
    $.ajax({
        type: 'GET',
        url: api,
        dataType: 'json',

        headers: {
            "Authorization": "Basic NDAyZDljMDg0ZjdhMDMxZWIwMzZiMTE0YWFiNjQ0MTQwNmE4MzliNDVjNWFhYWY1OTVlM2E3OGNmZDRkMDRmNTpGbWFzc2ltaWxpYW5vNzU="

        },
        success: function(data) {

            HTMLpulse(data);
            $(document).ajaxComplete(function() {
                $("#loading").css("display", "none");
            });
        },
        complete: function(jqXHR) {
            if (jqXHR.status == '404') {
                console.log(jqXHR.statusText);
            }
        }

    })

}


function HTMLpulse(data) {

    $.each(data, function(key, firstValue) {
        if (key == "results") {
            var contenutoJSON = JSON.stringify(firstValue);
            console.log(JSON.stringify(key));
            $.each(firstValue, function(secondKey, secondValue) {
                console.log(JSON.stringify(secondValue.name))
                contentJSON = JSON.stringify(secondValue.name);
                descriptionJSON = JSON.stringify(secondValue.description);
                htmlNames();

            })

        }
    })
    HTMLModal();
}

function htmlNames() {
    $("#mostraNomi")
        .append("<div class='col-md-3'; id ='pulsename';titlemodal='ciaociao';>" + "<div id = 'active-bar'> <i class ='fas fa-atom';style='text-align:center'></i></div>" +
            "<div style='float:left'>" + "<img src='./img/avatar.png'></div>" +
            "<div style='float:right;margin:10px;'>" +
            "<a href  data-toggle='modal' data-target='#exampleModal'> " +
            contentJSON.replace(/['"]+/g, '') +
            "</a>" +
            "</div></div>");

}

function HTMLModal() {
    $("#exampleModalLabel").append("<p>" + contentJSON.replace(/['"]+/g, '') + "</p>");
    $("#mb").append("<p>" + descriptionJSON.replace(/['"]+/g, '') + "</p>");

}









// Our labels along the x-axis
$(document).ready(function() {
    console.log("s3r_chart");
    var data = {
            labels: ['Trojan',
                'Backdoor',
                'Worm',
                'Bitcoin Miner',
                'File Infector',
                'Other'
            ],
            datasets: [{
                data: [1200, 1700, 800, 200, 999, 424],
                backgroundColor: [
                    "rgba(255, 0, 0, 0.5)",
                    "rgba(100, 255, 0, 0.5)",
                    "rgba(200, 50, 255, 0.5)",
                    "rgba(10, 110, 255, 0.5)",
                    "rgba(110, 120, 255, 0.5)",
                    "rgba(210, 130, 255, 0.5)"
                ]
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Trojan',
                'Backdoor',
                'Worm',
                'Bitcoin Miner',
                'File Infector',
                'Other'
            ]
        }
        //                label_def ="01-01-2011","01-01-2014,01-01-2013,01-01-2012"
    var ctx = document.getElementById('threat_news_chart').getContext('2d');
    var myChart = new Chart(ctx, {
        data: data,
        type: 'polarArea',
        //        options: options


    });

});