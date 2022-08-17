
console.log("In contact")

const search_field = document.querySelector('.search-field');
console.log(search_field);
search_field.style.display = "none"; 

const form = document.getElementById('form');
console.log(form)

const postData = async(url,data)=>{
    const respone= await fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json"
        }
    });

    return respone.json();
}

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let company = document.getElementById("company").value;
    let message = document.getElementById("message").value;
    
    const data = {
        name:name,
        email:email,
        phone:phone,
        company:company,
        message:message
    }
    const url = `http://localhost:3000/contact`
    postData(url,data)
    .then((data)=>{
        console.table(JSON.parse(data.data))
    })
    .catch((e)=>{
        console.log(e);
    })
})