const { parsePhoneNumber } = window.libphonenumber;

function getCountryFromPhoneNumber(pn) {
    try {
        
        if (!pn.startsWith("+")) {
            pn = "+" + pn;
        }
        const nomer = parsePhoneNumber(pn);
        return nomer.country; 
    } catch (error) {
        return "номер телефона был введен неверно.";
    }
}

document.getElementById('submit-btn').addEventListener('click', () => {
    const phoneInput = document.getElementById('phone-input').value;
    const resultElement = document.getElementById('result');

    const country = getCountryFromPhoneNumber(phoneInput);
    
    if (country === "номер телефона был введен неверно.") {
        resultElement.textContent = country; 
    } else {
        resultElement.textContent = `Страна: ${country}`; 
    }
});
