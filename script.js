let getRocket = () => {
    fetch(`https://fdo.rocketlaunch.live/json/launches/next/5`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            var missionName = document.getElementsByClassName("missionName");
            var provider = document.getElementsByClassName("provider");
            var country = document.getElementsByClassName("country");
            var date = document.getElementsByClassName("date");
            var discription = document.getElementsByClassName("discription");
            var youtube = document.getElementsByClassName("youtube-link");
            var title

            for (let i = 0; i < missionName.length; i++) {
                missionName[i].innerHTML = data["result"][i].name;
            }
            for (let i = 0; i < provider.length; i++) {
                provider[i].innerHTML = data["result"][i].provider.name;
            }
            for (let i = 0; i < country.length; i++) {
                country[i].innerHTML = data["result"][i].pad.location.country
            }
            for (let i = 0; i < date.length; i++) {
                date[i].innerHTML = data["result"][i].date_str;
            }
            for (let i = 0; i < discription.length; i++) {
                discription[i].innerHTML = data["result"][i].launch_description;
            }
            for (let i = 0; i < youtube.length; i++) {
                title = data["result"][i].provider.name
                console.log(title)
                youtube[i].href = `https://www.youtube.com/results?search_query=${title}+rocket+live`
            }
        })
}


getRocket();
