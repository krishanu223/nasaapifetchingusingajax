var photo = [];
var date1;
$("button").on('click', routing)

function routing() {
    var date1 = $('input').val();
    console.log(date1)
    if ($('input').val()) {
        $.ajax({
                url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date1 + "&api_key=3EeroQjqKk2phUYzFJmgXtqTncmKBs6CFBdzAOis",
                method: "GET",
                data: { apikey: "3EeroQjqKk2phUYzFJmgXtqTncmKBs6CFBdzAOis" }
            })
            .done(function(data) {
                console.log(data.photos)
                photo = data.photos;

                if (photo.length != 0) {
                    for (let i = 0; i < photo.length; i++) {
                        $('.contener').append("<img src=" + photo[i].img_src + ">");
                    }
                } else {
                    alert("No photos in this date")
                }




            })
    } else {
        alert("please enter date")
    }
}