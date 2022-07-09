     const submitMail = (e)=>{
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const data = {name,email,subject,message};
        console.log("addEventListener 1111",data);
    };
