let companyArray=["goodle","facebook","intel","apple","at&t","brrb","sdfsdf"]

companyArray.forEach(i => {
    printcompany.innerText+=i+"\n";
});

let imgArray = ['https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
"https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',

];


div1=document.getElementById("div1");


for (let i = 0; i < imgArray.length; i++) {
    div1.innerHTML+="<div><img style='height:100px;width:100px' src="+imgArray[i]+"></div>"
    
}



let person={
    company:"bbrre",
    city:"jerosalem",
    img:"https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    id:"compi",
    fild:"since",
    link:"www.google.com"


}
let obArray=[person,person,person,person,person,person,person,person,person,person]


for (let i = 0; i < obArray.length; i++) {
    div2.innerHTML+="<div>"+obArray[i].company+" "+obArray[i].city+" "+"<br>"+"<img style='height:100px;width:100px' src="+obArray[i].img+">"+"</div>"
            let divs=document.getElementsByTagName("div");

    for (const key of divs) {
if(key.id=="")
        key.id=person.id+i
                    
                }


}

let img=document.getElementsByTagName("img");

for (const key of img) {

key.onclick=(()=>{

    window.location.href="https://en.wikipedia.org/wiki/Vikings_(TV_series)"
})
    
}
















