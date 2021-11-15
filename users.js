
let users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]



  

function userLanguages(arr){
    for (var i=0;i<arr.length;i++){
        var lang = "";
        var interests ="";
        for(var j=0;j<arr[i]['languages'].length;j++){
            lang += arr[i]['languages'][j]+" ";
        }
        for (var key in arr[i]['interests']){
              interests += arr[i]['interests'][key]+" ";
          }
        console.log(arr[i]['fname']+" "+ arr[i]['lname']+"knows "+lang);
        console.log(arr[i]['fname']+" is also interested in "+interests);
    }

}


userLanguages(users);


