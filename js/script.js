let dy = document.getElementById("dy");
let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let se = document.getElementById("se");
let year = document.getElementById("new");


const timer = () => {
    let day = 365;
    let hour = 24;
    let min = 60;
    let sec = 60;

    setInterval(() => {
        sec--;

        if (sec <= 0) {
            min--;
            sec = 60;
        }
        if (min <= 0) {
            hour--;
            min = 60;
        }
        if (hour <= 0) {
            day--;
            hour = 24;
        }
        if (day <= 0) {
            year.innerHTML = `It's new year</br>"HAPPY NEW YEAR...!!"`;
            day = 365;
        }
        se.innerHTML = `${sec}
                        <div class="text-center mt-3">
                            <span style="font-size: 20px;">sec</span>
                        </div>`;
        mn.innerHTML = `${min}
                        <div class="text-center mt-3">
                            <span style="font-size: 20px;">min</span>
                        </div>`;
        hr.innerHTML = `${hour}
                        <div class="text-center mt-3">
                            <span style="font-size: 20px;">hour</span>
                        </div>`;
        dy.innerHTML = `${day}
                        <div class="text-center mt-3">
                            <span style="font-size: 20px;">days</span>
                        </div>`;

    }, 1000);

}

timer();


