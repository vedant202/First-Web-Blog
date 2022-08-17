
console.log("In BlogPOst");
const search_field = document.querySelector('.search-field');
console.log(search_field);
search_field.style.display = "none";

const url =document.URL.toString();
let url_split = url.split('/');
console.log(url_split.slice(-1)[0])
let id=""
for(let i=0;i<url.length;i++){
    if(url_split.slice(-1)[0][i] == '_'){
        break;
    }
    id+=url_split.slice(-1)[0][i];
} 

const fetchData = async()=>{
    const res = await fetch(`http://localhost:3000/blog/${id}`,{
        method:'POST',
    });
    return res.json()
}

var render = function (selector,value) {
	var node = document.querySelector(selector);
	if (!node) return;
	node.innerText = value;
};
// render(template, '#main');
// console.log("Url "+document.URL.)

// console.log(id);
fetchData().then((res)=>{
    console.log(JSON.parse(res.data));
    const resData = JSON.parse(res.data)[0];
    if(res.success===true){
        // const blog_title1=document.getElementById('blog-title1').inn;
        // const blog_title2=document.getElementById('blog-title2');
        // const para1=document.getElementById('para1');
        // const para2=document.getElementById('para2');
        // const para3=document.getElementById('para3');
        // const para4=document.getElementById('para4');
        // const authorName=document.getElementById('author');
        render('#blog-title1',resData.title);
        render('#blog-title2',resData.title);
        render('#para1',resData.para1);
        render('#para2',resData.para2);
        render('#para3',resData.para3);
        render('#para4',resData.para4);
        render('#author',resData.author);
        
    }

})