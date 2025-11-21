document.addEventListener('DOMContentLoaded', function() { 
    const generateBtn = document.getElementById('generateBtn'); 
    const downloadBtn = document.getElementById('downloadBtn'); 
    const amountInput = document.getElementById('amountInput'); 
    const qrCodeContainer = document.getElementById('qrCodeContainer'); 
    const amountDisplay = document.getElementById('amountDisplay'); 
    const qrCode = document.getElementById('qrCode'); 
    const upiId = "createprincemahto-2@okaxis"; 

    generateBtn.addEventListener('click', function() { 
        const amount = amountInput.value; 
        if (!amount || amount <= 0) { 
            alert('Please enter a valid amount'); 
            return; 
        } 
        amountDisplay.textContent = amount; 
        qrCode.innerHTML = ''; 
        const qrValue = `upi://pay?pa=${upiId}&am=${amount}&pn=Prince69&cu=INR`; 
        new QRCode(qrCode, { 
            text: qrValue, 
            width: 140, 
            height: 140, 
            colorDark: "#000000", 
            colorLight: "#ffffff", 
            correctLevel: QRCode.CorrectLevel.H 
        }); 
        qrCodeContainer.style.display = 'block'; 
    }); 

    downloadBtn.addEventListener('click', function() { 
        const amount = amountInput.value; 
        const qrWrapper = document.getElementById('qrWrapper'); 
        html2canvas(qrWrapper, { useCORS: true }).then(function(canvas) { 
            const link = document.createElement('a'); 
            link.download = `${amount}qrcode.png`; 
            link.href = canvas.toDataURL('image/png'); 
            link.click(); 
        }); 
    }); 
});