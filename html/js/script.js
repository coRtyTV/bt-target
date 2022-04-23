

window.addEventListener('message', function(event) {
    let item = event.data;

    if (item.response == 'openTarget') {
        $('.target-wrapper').show();
        $(".target-eye").css("color", "white");
    } else if (item.response == 'closeTarget') {
        $(".target-label").html("");
        $('.target-wrapper').hide();
    } else if (item.response == 'validTarget') {
        $(".target-label").html("");
        $.each(item.data, function (index, item) {
            $(".target-label").append("<div id='target-"+index+"'<li><span class='target-icon'><i class='"+item.icon+"'></i></span>&nbsp"+item.label+"</li></div>");
            $("#target-"+index).hover((e)=> {
                $("#target-"+index).css("color",e.type === "mouseenter"?"rgb(30,144,255)":"white")
            })

            $("#target-"+index+"").css("padding-top", "7px");

            $("#target-"+index).data('TargetData', item);
        });
        $(".target-label-wrapper").css("background", "rgba(0, 0, 0, 0.5)");
        $(".target-eye").css("color", "rgb(255, 128, 0)");
    } else if (item.response == 'leftTarget') {
        $(".target-label").html("");
        $(".target-label-wrapper").css("background-color", "transparent");
        $(".target-eye").css("color", "white");
    }
});

$(document).on('mousedown', (event) => {
    let element = event.target;
    if (element.id.split("-")[0] === 'target') {
        let TargetData = $("#"+element.id).data('TargetData');
        $.post('http://bt-target/selectTarget', JSON.stringify(TargetData));
        $(".target-label").html("");
        $('.target-wrapper').hide();
    }
});

$(document).on('keydown', function() {
    switch(event.keyCode) {
        case 27: // ESC
            $(".target-label").html("");
            $('.target-wrapper').hide();
            $.post('http://bt-target/closeTarget');
            break;
    }
});
