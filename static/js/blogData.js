// import axios from 'axios'
console.log("Blog Data");


const formData = document.getElementById('formData');

formData.addEventListener('submit',async(e)=>{
    e.preventDefault();
    let title = document.getElementById('Title').value;
    let author = document.getElementById('author').value;
    let Para1 = document.getElementById('Para1').value;
    let Para2 = document.getElementById('Para2').value;
    let Para3 = document.getElementById('Para3').value;
    let Para4 = document.getElementById('Para4').value;
    let image = document.getElementById('image').files;
    // console.log(title,author)
    const data = {
        title:title,
        author:author,
        image:image,
        para1:Para1,
        para2:Para2,
        para3:Para3,
        para4:Para4
    }
    console.log(data);
    const baseUrl = `/admin/blogData`;
    const Form_Data = new FormData();
    // Form_Data.append("image",data.image);
    // Form_Data.append("title",data.title);
    for(let key in data){
        // console.log(key,data[key])
        if(key==='image'){
            console.log(key)
            Form_Data.append(key,data[key][0])
        }
        else{
            Form_Data.append(key,data[key])
        }
    }
    
    // console.log(Form_Data.get('author'));
      const postData = async(data)=>{
        try {
            const response = await axios.post(baseUrl,data,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            });
            const res = response.data;
            return res;
        } catch (error) {
            console.log(error);
        }
        
    }
    
    const submitData = await postData(Form_Data);
    console.log(submitData)
})