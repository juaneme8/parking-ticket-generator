const qrImage = document.querySelector('#qr-ticket');
//Botón para impresión de QR.
const btnPrint = document.querySelector('#btnPrint');

const inputToMakeQR = document.querySelector('#inputToMakeQR');

//Creación del objeto
const qrcode = new QRCode(qrImage, {
	width: 100,
	height: 100
});

inputToMakeQR.addEventListener('input', () => {
	console.log('ingresando texto');

	//Convierto a mayúscula
	inputToMakeQR.value = inputToMakeQR.value.toUpperCase();

	//Obtengo el QR que aparecerá en el DIV qrImage
	qrcode.makeCode(inputToMakeQR.value);
});

btnPrint.addEventListener('click', () => {
	window.print();
});
