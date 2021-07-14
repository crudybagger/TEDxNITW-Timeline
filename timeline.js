//This represents data for each page (to be fetched from a database)
let data = [
    {
        date : 1,
        imageUrl : "url('./Red.png')",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus soluta ex, atque neque veniam. Aspernatur tempora amet illo possimus at eius delectus molestiae rerum nisi expedita, hic eaque quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint maiores! Earum molestias harum nulla odio culpa, non tempora officiis, totam explicabo, aliquam repellat maiores amet iste! Soluta, deleniti qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quas accusantium eaque aspernatur, soluta distinctio voluptas repudiandae iure dolor dicta, quisquam minima amet reprehenderit. Consequuntur, et. Ullam aut iste sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas"
    },
    {
        date : 2,
        imageUrl : "url('./Yellow.png')",
        content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quas accusantium eaque aspernatur, soluta distinctio voluptas repudiandae iure dolor dicta, quisquam minima amet reprehenderit. Consequuntur, et. Ullam aut iste sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas"
    },
    {
        date : 3,
        imageUrl : "url('./Green.png')",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus soluta ex, atque neque veniam. Aspernatur tempora amet illo possimus at eius delectus molestiae rerum nisi expedita, hic eaque quas?Consequuntur, et. Ullam aut iste sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas"
    },
    {
        date : 4,
        imageUrl : "url('./Orange.png')",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint maiores! Earum molestias harum nulla odio culpa, non tempora officiis, totam explicabo, aliquam repellat maiores amet iste! Soluta, deleniti qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. aepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas"
    },
    {
        date : 5,
        imageUrl : "url('./Blue.png')",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint maiores! Earum molestias harum nulla odio culpa, non tempora officiis, totam explicabo, aliquam repellat maiores amet iste! Soluta, deleniti qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quas accusantium eaque aspernatur, soluta distinctio voluptas repudiandae iure dolor dicta, quisquam minima amet reprehenderit. Consequuntur, et. Ullam aut iste sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas"
    }
]

//logic

let dates = document.getElementsByClassName("time");

let update = (dates) => {
    let idx = 0;
    for (let index = 0; index < dates.length; index++) {
        if(dates[index].classList.contains("selected")){
            dates[index].classList.remove("btn-outline-secondary");
            dates[index].classList.add("btn-secondary");
            idx = index;
        }
        else {
            dates[index].classList.remove("btn-secondary");
            dates[index].classList.add("btn-outline-secondary");
        }
    }
    document.getElementById("time").textContent = data[idx].date;
    document.getElementById("image").style.backgroundImage = data[idx].imageUrl;
    document.getElementById("content").textContent = data[idx].content;
}
update(dates);

let select = (index) => {
    let thisButton = dates[index -1];
    if(!thisButton.classList.contains("selected")){
        thisButton.classList.remove("btn-outline-secondary");
        thisButton.classList.add("btn-secondary");
        thisButton.classList.add("selected");
        for(let i = 0; i < dates.length; i++){
            if( i != index-1){
                dates[i].classList.remove("selected");
            }
        }
    }
    update(dates);

    
}
