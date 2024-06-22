const user_name = document.querySelector('.use_name');
const user_email = document.querySelector('.use_email');
const user_number = document.querySelector('.use_number');
const generatebutton = document.querySelector('.generate-qr-code-button');
const loader = document.querySelector('.loader');
const qrimage = document.querySelector('.qr-image');



generatebutton.onclick = async()=>{
    qrimage.src = '';
    let useNameValue = user_name.value;
    let useEmailValue = user_email.value;
    let useNumberValue = user_number.value;
    
    let allValues = `${useNameValue},${useEmailValue},${useNumberValue}`;

    loader.style.dispaly='bolck';

    if(useNameValue.length==0 ||useEmailValue.length==0 ||useNumberValue==0){
        alert(`Enter the valid user credentials!!!`);
        loader.style.dispaly='none';
    }
    else{
        let imageSource = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${allValues}`;
        let data = await fetch(imageSource);
        let response = await data.blob();

        let url = URL.createObjectURL(response);
        qrimage.src = url;
    }

}
