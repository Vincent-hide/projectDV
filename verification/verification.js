const yearTag = $(".year");
const monthTag = $(".month");
const dayTag = $(".day");

const dateObject = new Date();

const calYear = dateObject.getFullYear();
const calMonth = (dateObject.getMonth()+1);
const calDate = dateObject.getDate();



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
 
let previousDays = 31;
// need to globally declear 
// see line 55 and 58


for(let i=dateObject.getFullYear(); i>=1900; i--) {
    let update = $("<option></option>").text(i).attr("value", i);
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

        if((dayTag.children().length)>10) {
            // debugger;
            for(let i=1; i<=previousDays; i++) {
                $(`.day option[value=${i}]`).remove()
                //previousDays = Number(days);
            }
        } else {
            //previousDays = Number(days);
        }
        // if the value of option is more than 10, remove those options
        // if the value of option is less than 10. assgin the days selected to previousDays

        for(let i=1; i<=days; i++) {
            let update = $("<option></option>").text(i).attr("value", i);
            $(".day").append(update);
        };  
    });
});

let ageCal = () => {
    let userYear = yearTag.val();
    let userMonth = monthTag.val();
    let userDate = dayTag.val();

    let age = calYear - Number(userYear);
    if(age>=20 || age<=18) return age
    else {
        if(userMonth<calMonth) return age;
        else if(userMonth>calMonth) return age-1;
        else {
            if(userDate<=calDate) return age;
            return age-1;
        };
    };
} 

let result = (age) => {
    if(age>=19) window.location = "https://www.apple.ca"
    else if (age<=18) $("#errMsg").slideToggle(1000)
    // (age<18) $("#errMsg").css("display", "block");
}

$("#enter").click(() => {
    if((yearTag.val() ==  "default") || (monthTag.val() == "0") || (dayTag.val() == "default")) {
        alert("invalid")
    }
    
    result(ageCal());
})



// if(ageCal()>=19) window.location = "https://www.apple.ca"
// else if(ageCal()<19) $("#errMsg").css("display", "block");


// $(()=> {
//     $("#enter").click(ageCal = () => {
//         let userYear = yearTag.val();
//         let userMonth = monthTag.val();
//         let userDate = dayTag.val();

        
        
//         let age = calYear - Number(userYear);
//         alert(age);   //#####################
//         if(age>=20 || age<=18) return age
//         else {
//             if(userMonth<calMonth) return age;
//             else if(userMonth>calMonth) return age-1;
//             else {
//                 if(userDate<=calDate) return age;
//                 return age-1;
//             };
//         };
//     }, valification = () => {
//         if(ageCal()>=19) {
//             //window.location = "../mainPage/index.html";
//             window.location.assign("https://www.w3schools.com")
//             // location.assign("https://www.apple.ca")
//             alert("enough")
//         }
//         else {
//             $("#errMsg").css("display", "block");
//             alert("too young");
//         }
//     })
// })



