const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
//middlewares
app.use(bodyParser.json());
app.use(cors({
  domains: '*',
  methods: "*"
}));

//routes
app.get('/tipocambio', function (req, res) {
  res.json({
    "TipoCompraDolares" : "620",
    "TipoVentaDolares" : "621",
    "TipoCompraEuros" : "731.85",
    "TipoVentaEuros" : "761.9"
  });
});

app.get('/paises', function (req, res){
  res.json(
    [
      {
        "name": "Afganistán",
        "currency": "AFN"
      },
      {
        "name": "Albania",
        "currency": "ALL"
      },
      {
        "name": "Argelia",
        "currency": "DZD"
      },
      {
        "name": "Andorra",
        "currency": "EUR"
      },
      {
        "name": "Angola",
        "currency": "AOA"
      },
      {
        "name": "Antigua y Barbuda",
        "currency": "XCD"
      },
      {
        "name": "Argentina",
        "currency": "ARS"
      },
      {
        "name": "Armenia",
        "currency": "AMD"
      },
      {
        "name": "Australia",
        "currency": "AUD"
      },
      {
        "name": "Austria",
        "currency": "EUR"
      },
      {
        "name": "Azerbaiyán",
        "currency": "AZN"
      },
      {
        "name": "Bahamas",
        "currency": "BSD"
      },
      {
        "name": "Baréin",
        "currency": "BHD"
      },
      {
        "name": "Bangladesh",
        "currency": "BDT"
      },
      {
        "name": "Barbados",
        "currency": "BBD"
      },
      {
        "name": "Bielorrusia",
        "currency": "BYN"
      },
      {
        "name": "Bélgica",
        "currency": "EUR"
      },
      {
        "name": "Belice",
        "currency": "BZD"
      },
      {
        "name": "Benín",
        "currency": "XOF"
      },
      {
        "name": "Bhután",
        "currency": "BTN"
      },
      {
        "name": "Bolivia",
        "currency": "BOB"
      },
      {
        "name": "Bosnia y Herzegovina",
        "currency": "BAM"
      },
      {
        "name": "Botsuana",
        "currency": "BWP"
      },
      {
        "name": "Brasil",
        "currency": "BRL"
      },
      {
        "name": "Brunéi",
        "currency": "BND"
      },
      {
        "name": "Bulgaria",
        "currency": "BGN"
      },
      {
        "name": "Burkina Faso",
        "currency": "XOF"
      },
      {
        "name": "Burundi",
        "currency": "BIF"
      },
      {
        "name": "Cabo Verde",
        "currency": "CVE"
      },
      {
        "name": "Camboya",
        "currency": "KHR"
      },
      {
        "name": "Camerún",
        "currency": "XAF"
      },
      {
        "name": "Canadá",
        "currency": "CAD"
      },
      {
        "name": "República Centroafricana",
        "currency": "XAF"
      },
      {
        "name": "Chad",
        "currency": "XAF"
      },
      {
        "name": "Chile",
        "currency": "CLP"
      },
      {
        "name": "China",
        "currency": "CNY"
      },
      {
        "name": "Colombia",
        "currency": "COP"
      },
      {
        "name": "Comoras",
        "currency": "KMF"
      },
      {
        "name": "Congo",
        "currency": "XAF"
      },
      {
        "name": "Costa Rica",
        "currency": "CRC"
      },
      {
        "name": "Croacia",
        "currency": "HRK"
      },
      {
        "name": "Cuba",
        "currency": "CUP"
      },
      {
        "name": "Chipre",
        "currency": "EUR"
      },
      {
        "name": "República Checa",
        "currency": "CZK"
      },
      {
        "name": "República Democrática del Congo",
        "currency": "CDF"
      },
      {
        "name": "Dinamarca",
        "currency": "DKK"
      },
      {
        "name": "Yibuti",
        "currency": "DJF"
      },
      {
        "name": "Dominica",
        "currency": "XCD"
      },
      {
        "name": "República Dominicana",
        "currency": "DOP"
      },
      {
        "name": "Ecuador",
        "currency": "USD"
      },
      {
        "name": "Egipto",
        "currency": "EGP"
      },
      {
        "name": "El Salvador",
        "currency": "USD"
      },
      {
        "name": "Guinea Ecuatorial",
        "currency": "XAF"
      },
      {
        "name": "Eritrea",
        "currency": "ERN"
      },
      {
        "name": "Estonia",
        "currency": "EUR"
      },
      {
        "name": "Eswatini",
        "currency": "SZL"
      },
      {
        "name": "Etiopía",
        "currency": "ETB"
      },
      {
        "name": "Fiyi",
        "currency": "FJD"
      },
      {
        "name": "Finlandia",
        "currency": "EUR"
      },
      {
        "name": "Francia",
        "currency": "EUR"
      },
      {
        "name": "Gabón",
        "currency": "XAF"
      },
      {
        "name": "Gambia",
        "currency": "GMD"
      },
      {
        "name": "Georgia",
        "currency": "GEL"
      },
      {
        "name": "Alemania",
        "currency": "EUR"
      },
      {
        "name": "Ghana",
        "currency": "GHS"
      },
      {
        "name": "Grecia",
        "currency": "EUR"
      },
      {
        "name": "Granada",
        "currency": "XCD"
      },
      {
        "name": "Guatemala",
        "currency": "GTQ"
      },
      {
        "name": "Guinea",
        "currency": "GNF"
      },
      {
        "name": "Guinea-Bisáu",
        "currency": "XOF"
      },
      {
        "name": "Guyana",
        "currency": "GYD"
      },
      {
        "name": "Haití",
        "currency": "HTG"
      },
      {
        "name": "Honduras",
        "currency": "HNL"
      },
      {
        "name": "Hungría",
        "currency": "HUF"
      },
      {
        "name": "Islandia",
        "currency": "ISK"
      },
      {
        "name": "India",
        "currency": "INR"
      },
      {
        "name": "Indonesia",
        "currency": "IDR"
      },
      {
        "name": "Irán",
        "currency": "IRR"
      },
      {
        "name": "Irak",
        "currency": "IQD"
      },
      {
        "name": "Irlanda",
        "currency": "EUR"
      },
      {
        "name": "Israel",
        "currency": "ILS"
      },
      {
        "name": "Italia",
        "currency": "EUR"
      },
      {
        "name": "Jamaica",
        "currency": "JMD"
      },
      {
        "name": "Japón",
        "currency": "JPY"
      },
      {
        "name": "Jordania",
        "currency": "JOD"
      },
      {
        "name": "Kazajistán",
        "currency": "KZT"
      },
      {
        "name": "Kenia",
        "currency": "KES"
      },
      {
        "name": "Kiribati",
        "currency": "AUD"
      },
      {
        "name": "Kuwait",
        "currency": "KWD"
      },
      {
        "name": "Kirguistán",
        "currency": "KGS"
      },
      {
        "name": "Laos",
        "currency": "LAK"
      },
      {
        "name": "Letonia",
        "currency": "EUR"
      },
      {
        "name": "Líbano",
        "currency": "LBP"
      },
      {
        "name": "Lesoto",
        "currency": "LSL"
      },
      {
        "name": "Liberia",
        "currency": "LRD"
      },
      {
        "name": "Libia",
        "currency": "LYD"
      },
      {
        "name": "Liechtenstein",
        "currency": "CHF"
      },
      {
        "name": "Lituania",
        "currency": "EUR"
      },
      {
        "name": "Luxemburgo",
        "currency": "EUR"
      },
      {
        "name": "Macedonia del Norte",
        "currency": "MKD"
      },
      {
        "name": "Madagascar",
        "currency": "MGA"
      },
      {
        "name": "Malaui",
        "currency": "MWK"
      },
      {
        "name": "Malasia",
        "currency": "MYR"
      },
      {
        "name": "Maldivas",
        "currency": "MVR"
      },
      {
        "name": "Malí",
        "currency": "XOF"
      },
      {
        "name": "Malta",
        "currency": "EUR"
      },
      {
        "name": "Islas Marshall",
        "currency": "USD"
      },
      {
        "name": "Mauritania",
        "currency": "MRU"
      },
      {
        "name": "Mauricio",
        "currency": "MUR"
      },
      {
        "name": "México",
        "currency": "MXN"
      },
      {
        "name": "Micronesia",
        "currency": "USD"
      },
      {
        "name": "Moldavia",
        "currency": "MDL"
      },
      {
        "name": "Mónaco",
        "currency": "EUR"
      },
      {
        "name": "Mongolia",
        "currency": "MNT"
      },
      {
        "name": "Montenegro",
        "currency": "EUR"
      },
      {
        "name": "Marruecos",
        "currency": "MAD"
      },
      {
        "name": "Mozambique",
        "currency": "MZN"
      },
      {
        "name": "Myanmar",
        "currency": "MMK"
      },
      {
        "name": "Namibia",
        "currency": "NAD"
      },
      {
        "name": "Nauru",
        "currency": "AUD"
      },
      {
        "name": "Nepal",
        "currency": "NPR"
      },
      {
        "name": "Países Bajos",
        "currency": "EUR"
      },
      {
        "name": "Nueva Zelanda",
        "currency": "NZD"
      },
      {
        "name": "Nicaragua",
        "currency": "NIO"
      },
      {
        "name": "Níger",
        "currency": "XOF"
      },
      {
        "name": "Nigeria",
        "currency": "NGN"
      },
      {
        "name": "Corea del Norte",
        "currency": "KPW"
      },
      {
        "name": "Noruega",
        "currency": "NOK"
      },
      {
        "name": "Omán",
        "currency": "OMR"
      },
      {
        "name": "Pakistán",
        "currency": "PKR"
      },
      {
        "name": "Palau",
        "currency": "USD"
      },
      {
        "name": "Palestina",
        "currency": "ILS"
      },
      {
        "name": "Panamá",
        "currency": "PAB"
      },
      {
        "name": "Papúa Nueva Guinea",
        "currency": "PGK"
      },
      {
        "name": "Paraguay",
        "currency": "PYG"
      },
      {
        "name": "Perú",
        "currency": "PEN"
      },
      {
        "name": "Filipinas",
        "currency": "PHP"
      },
      {
        "name": "Polonia",
        "currency": "PLN"
      },
      {
        "name": "Portugal",
        "currency": "EUR"
      },
      {
        "name": "Catar",
        "currency": "QAR"
      },
      {
        "name": "Rumania",
        "currency": "RON"
      },
      {
        "name": "Rusia",
        "currency": "RUB"
      },
      {
        "name": "Ruanda",
        "currency": "RWF"
      },
      {
        "name": "San Cristóbal y Nieves",
        "currency": "XCD"
      },
      {
        "name": "Santa Lucía",
        "currency": "XCD"
      },
      {
        "name": "San Vicente y las Granadinas",
        "currency": "XCD"
      },
      {
        "name": "Samoa",
        "currency": "WST"
      },
      {
        "name": "San Marino",
        "currency": "EUR"
      },
      {
        "name": "Santo Tomé y Príncipe",
        "currency": "STN"
      },
      {
        "name": "Arabia Saudita",
        "currency": "SAR"
      },
      {
        "name": "Senegal",
        "currency": "XOF"
      },
      {
        "name": "Serbia",
        "currency": "RSD"
      },
      {
        "name": "Seychelles",
        "currency": "SCR"
      },
      {
        "name": "Sierra Leona",
        "currency": "SLL"
      },
      {
        "name": "Singapur",
        "currency": "SGD"
      },
      {
        "name": "Eslovaquia",
        "currency": "EUR"
      },
      {
        "name": "Eslovenia",
        "currency": "EUR"
      },
      {
        "name": "Islas Salomón",
        "currency": "SBD"
      },
      {
        "name": "Somalia",
        "currency": "SOS"
      },
      {
        "name": "Sudáfrica",
        "currency": "ZAR"
      },
      {
        "name": "Corea del Sur",
        "currency": "KRW"
      },
      {
        "name": "Sudán del Sur",
        "currency": "SSP"
      },
      {
        "name": "España",
        "currency": "EUR"
      },
      {
        "name": "Sri Lanka",
        "currency": "LKR"
      },
      {
        "name": "Sudán",
        "currency": "SDG"
      },
      {
        "name": "Surinam",
        "currency": "SRD"
      },
      {
        "name": "Suecia",
        "currency": "SEK"
      },
      {
        "name": "Suiza",
        "currency": "CHF"
      },
      {
        "name": "Siria",
        "currency": "SYP"
      },
      {
        "name": "Taiwán",
        "currency": "TWD"
      },
      {
        "name": "Tayikistán",
        "currency": "TJS"
      },
      {
        "name": "Tanzania",
        "currency": "TZS"
      },
      {
        "name": "Tailandia",
        "currency": "THB"
      },
      {
        "name": "Timor Oriental",
        "currency": "USD"
      },
      {
        "name": "Togo",
        "currency": "XOF"
      },
      {
        "name": "Tonga",
        "currency": "TOP"
      },
      {
        "name": "Trinidad y Tobago",
        "currency": "TTD"
      },
      {
        "name": "Túnez",
        "currency": "TND"
      },
      {
        "name": "Turquía",
        "currency": "TRY"
      },
      {
        "name": "Turkmenistán",
        "currency": "TMT"
      },
      {
        "name": "Tuvalu",
        "currency": "AUD"
      },
      {
        "name": "Uganda",
        "currency": "UGX"
      },
      {
        "name": "Ucrania",
        "currency": "UAH"
      },
      {
        "name": "Emiratos Árabes Unidos",
        "currency": "AED"
      },
      {
        "name": "Reino Unido",
        "currency": "GBP"
      },
      {
        "name": "Estados Unidos",
        "currency": "USD"
      },
      {
        "name": "Uruguay",
        "currency": "UYU"
      },
      {
        "name": "Uzbekistán",
        "currency": "UZS"
      },
      {
        "name": "Vanuatu",
        "currency": "VUV"
      },
      {
        "name": "Ciudad del Vaticano",
        "currency": "EUR"
      },
      {
        "name": "Venezuela",
        "currency": "VES"
      },
      {
        "name": "Vietnam",
        "currency": "VND"
      },
      {
        "name": "Yemen",
        "currency": "YER"
      },
      {
        "name": "Zambia",
        "currency": "ZMW"
      },
      {
        "name": "Zimbabue",
        "currency": "ZWL"
      }
    ]
    
  );
});
//start the app
app.listen(3000, () => console.log(`BBCR Exchange type service listening on port 3000!`))
