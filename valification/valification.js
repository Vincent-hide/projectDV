const yearTag = $(".year");
const monthTag = $(".month");
const dayTag = $(".day");

const dateObject = new Date();

const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June", 
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


for(let i=dateObject.getFullYear(); i>=1900; i--) {
    let update = $("<option></option>").text(i)
    $(".year").append(update);
}

monthArray.forEach(element => {
    let update = $("<option></option>").text(element)
    $(".month").append(update);
});

for(let i=0; i<=12; i++) $(".month").children().eq(i).attr("value", i);
// need to assign value for getting the number of days in each month

$(() => {
    $(".day").focus(() => {
        let selectedMonth = $(".month").val()
        let days = new Date(dateObject.getFullYear(), selectedMonth, 0).getDate();
        console.log(days)
        // let optioncheck = document.querySelector("form").elements[2];
        // if(optioncheck.length > 10) {
        //     console.log("boom");
        //     for(let i=1; i<=optioncheck.length; i++) {
        //         delete optioncheck[i]
        //     }
        //     console.log(optioncheck)
        // }

        
        for(let i=1; i<=days; i++) {
            let update = $("<option></option>").text(i)
            $(".day").append(update);
        };
        
    })
})
