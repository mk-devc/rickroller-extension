let rickroll_img = [
    "https://i.pinimg.com/originals/19/93/7c/19937c4a25a8d2836c945ac71c18c2c8.jpg",
    "https://i1.sndcdn.com/artworks-000174337050-100v19-t500x500.jpg"
];

const images = document.getElementsByTagName("img");
//populate and replace the tags

for(let i=0; i < images.length; i++){

    const randomImg = Math.floor(Math.random()*rickroll_img.length);
    console.log(randomImg)

    images[i].src=rickroll_img[randomImg];
}

const headers = document.getElementsByTagName('span');
for(let i=0; i < headers.length; i++){

    headers[i].innerText = "Never gonna give you up, never gonna let you down, never gonna run around and desert you."
}