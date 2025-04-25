
let url;
document.querySelector('#myUrl').addEventListener('submit' , function(e){
    e.preventDefault();
    url = document.querySelector('#inp').value;
    console.log("Stored URL:", url)
    xml = new XMLHttpRequest();
    xml.open('GET' , url);
    xml.onreadystatechange = function() {

        if (xml.readyState === 4){
            const data = JSON.parse(this.responseText);
            document.querySelector('img').setAttribute('src' , data.avatar_url)
            document.querySelector('h5').innerHTML = data.name;
        }
    }
    xml.send();
})