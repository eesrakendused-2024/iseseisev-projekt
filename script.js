const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const mailsendingContainer =  document.querySelector(".mailsending-container");


function addTask(){
  if(inputBox.value === ''){
    alert("Item empty!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    
  
    const checkedTasks = document.querySelectorAll("ul li.checked");
    
    if(checkedTasks.length === 1) {
      mailsendingContainer.style.display = 'block';
      document.getElementById('image-select-button').style.display = 'block'; 
      document.getElementById('image_input').style.display = 'none'; 
      document.getElementById('display_image').style.display = 'block'; 
    } else {
      mailsendingContainer.style.display = 'none';
      document.getElementById('image-select-button').style.display = 'none'; 
      document.getElementById('image_input').style.display = 'none'; 
      document.getElementById('display_image').style.display = 'none';
    }
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);

const image_input = document.querySelector("#image_input");

var uploaded_image = "";

image_input.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () =>{
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    mailsendingContainer.style.display = 'block'; 
  });
  reader.readAsDataURL(this.files[0]);
});

const imageSelectBtn = document.getElementById('image-select-button');
const imageInput = document.getElementById('image_input');

imageSelectBtn.addEventListener('click', () =>{
  imageInput.click();
});

function sendMail() {
  if (uploaded_image === "") {
    alert("Please upload an image before sending the email.");
    return;
  }

 
  const confirmSend = confirm("Do you want to send the email with the attached image?");
  if (!confirmSend) {
    return; 
  }

 
  var params = {
    name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    image: uploaded_image 
  };

  emailjs.send("service_b2bqj0n", "template_mdzq0gf", params)
  .then(function(res) {
    alert("Success!" + res.status);
  })
  .catch(function(error) {
    console.error("Error occurred while sending email:", error);
    alert("Failed to send email. Please try again later.");
  });

}


function resizeImage(file, maxWidth, maxHeight, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          let width = img.width;
          let height = img.height;

          if (width > height) {
              if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
              }
          } else {
              if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
              }
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(callback);
      };
      img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}


function handleFileInputChange() {
  const file = this.files[0];
  resizeImage(file, 800, 600, function(blob) {
  });
}

image_input.addEventListener("change", handleFileInputChange);

