const user_name = document.querySelector('.user_name');
const user_email = document.querySelector('.user_email');
const user_phone = document.querySelector('.user_phone');
const generatebutton = document.querySelector('.generate-qr-code-button');
const loader = document.querySelector('.loader');
const qrimage = document.querySelector('.qr-image');

generatebutton.onclick = async () => {
    qrimage.src = '';
    let useNameValue = user_name.value;
    let useEmailValue = user_email.value;
    let useNumberValue = user_phone.value;
    
    let allValues = `${useNameValue},${useEmailValue},${useNumberValue}`;

    loader.style.display = 'block';

    if (useNameValue.length == 0 || useEmailValue.length == 0 || useNumberValue.length == 0) {
        alert('Enter the valid user credentials!!!');
        loader.style.display = 'none';
    } else {
        let imageSource = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${allValues}`;
        let data = await fetch(imageSource);
        let response = await data.blob();

        let url = URL.createObjectURL(response);
        qrimage.src = url;
        loader.style.display = 'none';
    }
}
