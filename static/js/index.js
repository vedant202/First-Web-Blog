console.log("Index js is working")

let card_row = document.getElementById('card-row');


const fetchData = async()=>{
  const response = await fetch('http://localhost:3000/data');
  return response.json();
}

fetchData().then((res)=>{
  // console.log(res);
  if(res.success===true){
    const resData = res.data;
    console.log(resData)
    resData.forEach((obj)=>{
          console.log(obj._id);
          card_row.innerHTML +=`
          <a target="_blank" href="/blog/${obj._id}__${obj.title}">
          <div class="card-item" id="${obj._id}">
          <div class="card-header">
            <h4>
              ${obj.title}
            </h4>
      
            <p>${obj.date}</p>
          </div>
          <div class="card-image">
            <img
              src="imgs/injection-security-vulnerabilities-code.jpg"
              width="180px"
              alt=""
            />
          </div>
          <div class="cardBodyPara">
            ${obj.para1}
          </div>
          <div class="card-footer">By ${obj.author}</div>
          </div>
          </a>
          `
           
    });

  }

  
})
.catch((err)=>{
  console.log(err);
})

fetchData().then((res)=>{
  const search_button = document.getElementById('search-button');
  search_button.addEventListener('click',(e)=>{
    const search_input = document.getElementById('search-input').value.toLowerCase();
    console.log(search_input);
    const data = res.data;
    let innerHtml = ""
    const cardRow = document.getElementById("card-row")
    data.forEach((blog)=>{
      let blogTitle = blog.title.toLowerCase();
      // console.log(blogTitle.includes(search_input))
      if(blogTitle.includes(search_input)){
        console.log("Blog Title ",blog.title);
        // card_row.innerHTML = "";
        // cardRow.innerText = "Search is enabled";
         innerHtml+= `
        <a target="_blank" href="/blog/${blog._id}__${blog.title}">
        <div class="card-item" id="${blog._id}">
        <div class="card-header">
          <h4>
            ${blog.title}
          </h4>
    
          <p>${blog.date}</p>
        </div>
        <div class="card-image">
          <img
            src="imgs/injection-security-vulnerabilities-code.jpg"
            width="180px"
            alt=""
          />
        </div>
        <div class="cardBodyPara">
          ${blog.para1}
        </div>
        <div class="card-footer">By ${blog.author}</div>
        </div>
        </a>
        ` 
      }
    })
    console.log(innerHtml)
    cardRow.innerHTML=innerHtml;
  })
})

