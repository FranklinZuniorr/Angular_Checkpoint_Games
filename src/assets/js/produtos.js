filtro = [];

vtdd = 0;

// Escolher categoria/filtro.

function ctia(n){

filtro = [];

vmais.innerHTML = "Ver mais produtos...";

vtdd = 1;

var y = document.getElementById("ct" + n).textContent;
console.log(y);
tem = 0;
    
for(var j = 0; j < qpr; j++){
    
    if(produtos[j].categoria.includes(y.toLowerCase())){
        console.log("SIM!");
        filtro[tem] = produtos[j];
        tem++;
        
    } 
        
    else {
        console.log("NÃO!");
    }
    
}
    
console.log(filtro);
start(1);
}
    
// Escolher categoria/filtro.

// Escolher via barra de pesquisa.

function pes(){

if(document.getElementById("busca").value != ""){

filtro = [];

vmais.innerHTML = "Ver mais produtos...";

vtdd = 1;

pesquisa = document.getElementById("busca").value.toUpperCase();
console.log(pesquisa);
tem = 0;

for(var j = 0; j < qpr; j++){
    
    if(produtos[j].titulo.toUpperCase().includes(pesquisa)){
        console.log("SIM!");
        filtro[tem] = produtos[j];
        tem++;
        
    } 
        
    else {
        console.log("NÃO!");
    }
    
}
    
console.log(filtro);
start(1);
}

else if(document.getElementById("busca").value == ""){
    
    display.innerHTML = "";
    vmais.innerHTML = "Nenhum produto disponível!";
    document.getElementById("busca").value = "";

}
}

// Escolher via barra de pesquisa.

// Mostrar produtos.

produtos = [
    {
    foto: "/assets/img/produtos/placa-de-video-zotac-gaming-nvidia-geforce-rtx-2060-6gb-gddr6-zt-t20600h-10m_1582213398_m.jpg",
    titulo: "Placa de Vídeo Zotac Gaming NVIDIA GeForce RTX 2060, 6GB, GDDR6 - ZT-T20600H-10M",
    valor: "R$ 2.599,99",
    categoria: "hardware",
    },

    {
    foto: "/assets/img/produtos/95803_1522867513_index_m.jpg",
    titulo: "HD Seagate 4TB BarraCuda, 3.5', SATA - ST4000DM004",
    valor: "R$ 445,99",
    categoria: "hardware",
    },
    
    {
    foto: "/assets/img/produtos/case-para-fone-de-ouvido-gamer-hyperx-cloud-earbuds-hxs-hsceb-bk-cc-_1621258186_m.jpg",
    titulo: "Case para Fone de Ouvido Gamer HyperX Cloud Earbuds - HXS-HSCEB-BK-CC",
    valor: "R$ 19,99",
    categoria: "periférico",
    },

    {
    foto: "/assets/img/produtos/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1656018617_m.jpg",
    titulo: "Mouse Gamer Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto - M711 V2",
    valor: "R$ 116,99",
    categoria: "periférico",
    },
    
    {
    foto: "/assets/img/produtos/game-marvel-s-spider-man-miles-morales-ps5_1600863136_m.jpg",
    titulo: "Jogo Marvels Spider-Man: Miles Morales PS5",
    valor: "R$ 249,90",
    categoria: "games",
    },

    {
    foto: "/assets/img/produtos/jogo-god-of-war-ragnar-k-ps4_1657902975_m.jpg",
    titulo: "Jogo God of War Ragnarök, PS4",
    valor: "R$ 263,91",
    categoria: "games",
    },
    
    {
    foto: "/assets/img/produtos/notebook-acer-aspire-5-intel-core-i5-10210u-geforce-mx-250-8gb-ram-512gb-ssd-nvme-15-6-ips-fhd-windows-11-home-prata-a515-54g-52fy_1643915921_m.jpg",
    titulo: "Notebook Acer Aspire 5 Intel Core i5-10210U, GeForce MX 250, 8GB RAM, 512GB SSD NVMe, 15.6 IPS FHD, Windows 11 Home, Prata - A515-54G-52FY",
    valor: "R$ 3.499,99",
    categoria: "computadores",
    },

    {
    foto: "/assets/img/produtos/notebook-lenovo-ultrafino-ideapad-3i-intel-core-i7-10510u-geforce-mx330-8gb-ram-ssd-256gb-15-6-full-hd-windows-11-prata-82bs000hbr_1656619969_m.jpg",
    titulo: "Notebook Lenovo Ultrafino IdeaPad 3i Intel Core I7-10510U, GeForce MX330, 8GB RAM, SSD 256GB, 15.6 Full HD, Windows 11, Prata - 82BS000HBR",
    valor: "R$ 3.599,99",
    categoria: "computadores",
    },
    
    {
    foto: "/assets/img/produtos/smartphone-motorola-moto-g71-xt2169-1-6gb-ram-128gb-camera-tripla-50mp-octa-core-tela-6-4-verde-pas20017br_1644264071_m.jpg",
    titulo: "Smartphone Motorola Moto G71, 5G, 6GB RAM, 128GB, Câmera Tripla 50MP, Octa Core, Tela 6.4, Verde - PAS20017BR",
    valor: "R$ 1.729,00",
    categoria: "smartphones",
    },

    {
    foto: "/assets/img/produtos/smartphone-samsung-galaxy-a13-4gb-ram-128gb-octa-core-camera-quadrupla-50mp-tela-infinita-6-6-preto-sm-a135mzklzto_1648828269_m.jpg",
    titulo: "Smartphone Samsung Galaxy A13, 4GB RAM, 128GB, Octa Core, Câmera Quádrupla 50MP, Tela Infinita 6.6, Preto - SM-A135MZKLZTO",
    valor: "R$ 1.259,10",
    categoria: "smartphones",
    },
    
    {
    foto: "/assets/img/produtos/smart-tv-samsung-55-4k-qled-55q80a-120hz-120hz-processador-ia-hdr10-tela-infinita-alexa-built-in-qn55q80aagxzd_1617280326_m.jpg",
    titulo: "Smart TV Samsung 55 4K QLED 55Q80A, 120Hz, Processador IA, HDR10+, Tela Infinita, Alexa Built In - QN55Q80AAGXZD",
    valor: "R$ 3.999,99",
    categoria: "tv",
    },

    {
    foto: "/assets/img/produtos/smart-tv-samsung-55-qled-4k-hdr-wifi-bluetooth-hdmi-usb-alexa-e-google-assistente-preto-qn55q60bagxzd_1649767103_m.jpg",
    titulo: "Smart TV Samsung 55 QLED 4K, HDR, Wifi, Bluetooth, HDMI, USB, Alexa e Google Assistente, Preto - QN55Q60BAGXZD",
    valor: "R$ 3.249,99",
    categoria: "tv",
    },
    
];

produtos2 = produtos;
console.log(produtos2);

// Dados filtrados para busca.



console.log(produtos2);

// Dados filtrados para busca.

qpr = produtos.length;

start(0);


function start(tipo) {
    
    if(tipo == 0 && produtos.length > 1){

        g = 1;

        for(t = 0; t <= produtos.length %2 + produtos.length/2; t++){
    
    

        display.innerHTML = display.innerHTML +
    
        '<div class="pdt">' + 

        '<div class="pd">' +
        '<img src="' + produtos[t].foto + '"class="ftproduto" >' +
        '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
        '<div class="pdtxt">' + produtos[t].titulo + '</div>' +
        '<div class="pdvalor">' + produtos[t].valor + '</div>' +
        '</div>' +

        '<div style="background-color: #A63232; width: 0.2%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' +

        '<div class="pd">' +
        '<img src="' + produtos[g].foto + '"class="ftproduto" >' +
        '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
        '<div class="pdtxt">' + produtos[g].titulo + '</div>' +
        '<div class="pdvalor">' + produtos[g].valor + '</div>' +
        '</div>' +

        '</div>';

        g = g + 2;
        t++

    
        }
    }

    else if(tipo == 0 && produtos.length == 1){

        for( t = 0; t <= 1; t++){

        display.innerHTML =

        '<div class="pdt">' + 

        '<div style="background-color: #A63232; width: 0.2%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' +

        '<div class="pd">' +
        '<img src="' + produtos[t].foto + '"class="ftproduto" >' +
        '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
        '<div class="pdtxt">' + produtos[t].titulo + '</div>' +
        '<div class="pdvalor">' + produtos[t].valor + '</div>' +
        '</div>' + '<div style="background-color: #A63232; width: 0.6%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' + '</div>';

    }
    }

    else if(tipo == 0 && produtos.length == 0){
        display.innerHTML = "";
        vmais.innerHTML = "Nenhum outro produto disponível!";
    }

    if(tipo == 1 && filtro.length > 1){

        display.innerHTML = "";

        g = 1;

        for( t = 0; t <= produtos.length %2 + produtos.length/2; t++){

        display.innerHTML = display.innerHTML +
    
        '<div class="pdt">' + 

        '<div class="pd">' +
        '<img src="' + filtro[t].foto + '"class="ftproduto" >' +
        '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
        '<div class="pdtxt">' + filtro[t].titulo + '</div>' +
        '<div class="pdvalor">' + filtro[t].valor + '</div>' +
        '</div>' +

        '<div style="background-color: #A63232; width: 0.2%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' +

        '<div class="pd">' +
        '<img src="' + filtro[g].foto + '"class="ftproduto" >' +
        '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
        '<div class="pdtxt">' + filtro[g].titulo + '</div>' +
        '<div class="pdvalor">' + filtro[g].valor + '</div>' +
        '</div>' +

        '</div>';

        g = g + 2;
        t++

    
        }
    }

    else if(tipo == 1 && filtro.length == 1){

        for( t = 0; t <= 1; t++){

        display.innerHTML =

        '<div class="pdt">' +
        
        '<div style="background-color: #A63232; width: 0.2%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' +

        '<div class="pd">' +
        '<img src="' + filtro[t].foto + '"class="ftproduto" >' +
        '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
        '<div class="pdtxt">' + filtro[t].titulo + '</div>' +
        '<div class="pdvalor">' + filtro[t].valor + '</div>' +
        '</div>' + '<div style="background-color: #A63232; width: 0.6%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' + '</div>';

    }
    }

    else if(tipo == 1 && filtro.length == 0){
        display.innerHTML = "";
        vmais.innerHTML = "Nenhum produto disponível!";
    }
}

function vertudo(){

    if(vtdd == 0 && qpr %2 == 0){

    vmais.innerHTML = "Nenhum outro produto disponível!";

    for(t = 0; t < qpr; t++){

        display.innerHTML = display.innerHTML +
        
        '<div class="pdt">' + 
    
        '<div class="pd">' +
           '<img src="' + produtos[t].foto + '"class="ftproduto" >' +
           '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
           '<div class="pdtxt">' + produtos[t].titulo + '</div>' +
           '<div class="pdvalor">' + produtos[t].valor + '</div>' +
       '</div>' +
    
       '<div style="background-color: #A63232; width: 0.2%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' +
    
        '<div class="pd">' +
           '<img src="' + produtos[g].foto + '"class="ftproduto" >' +
           '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
           '<div class="pdtxt">' + produtos[g].titulo + '</div>' +
           '<div class="pdvalor">' + produtos[g].valor + '</div>' +
       '</div>' +
    
       '</div>';
    
       g = g + 2;
       t++
    
        
    }

    }

    if(vtdd == 0 && qpr %2 == 1){

    vmais.innerHTML = "Nenhum outro produto disponível!";

    for(t; t < qpr; t++){

        display.innerHTML = display.innerHTML +

        '<div class="pdt">' + 

        '<div style="background-color: #A63232; width: 0.2%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' +

        '<div class="pd">' +
        '<img src="' + produtos[t].foto + '"class="ftproduto" >' +
        '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
        '<div class="pdtxt">' + produtos[t].titulo + '</div>' +
        '<div class="pdvalor">' + produtos[t].valor + '</div>' +
        '</div>' + '<div style="background-color: #A63232; width: 0.6%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' + '</div>';
        
    }

    }

    else if(vtdd == 0 && qpr < 4){
        vmais.innerHTML = "Nenhum outro produto disponível!";

    }

    if(vtdd == 1 && filtro.length %2 == 0){

        vmais.innerHTML = "Nenhum outro produto disponível!";
    
        for(t = 0; t < filtro.length; t++){
    
            display.innerHTML = display.innerHTML +
            
            '<div class="pdt">' + 
        
            '<div class="pd">' +
               '<img src="' + filtro[t].foto + '"class="ftproduto" >' +
               '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
               '<div class="pdtxt">' + filtro[t].titulo + '</div>' +
               '<div class="pdvalor">' + filtro[t].valor + '</div>' +
           '</div>' +
        
           '<div style="background-color: #A63232; width: 0.2%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' +
        
            '<div class="pd">' +
               '<img src="' + filtro[g].foto + '"class="ftproduto" >' +
               '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
               '<div class="pdtxt">' + filtro[g].titulo + '</div>' +
               '<div class="pdvalor">' + filtro[g].valor + '</div>' +
           '</div>' +
        
           '</div>';
        
           g = g + 2;
           t++
        
            
        }
        
    }

    if(vtdd == 1 && filtro.length %2 == 1){

    vmais.innerHTML = "Nenhum outro produto disponível!";

    for(t; t < qpr; t++){

        display.innerHTML = display.innerHTML +

        '<div class="pdt">' +
        
        '<div style="background-color: #A63232; width: 0.2%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' +

        '<div class="pd">' +
        '<img src="' + filtro[t].foto + '"class="ftproduto" >' +
        '<div class="pdimg"><img src="/assets/img/comprar.png" class="cp"></div>' +
        '<div class="pdtxt">' + filtro[t].titulo + '</div>' +
        '<div class="pdvalor">' + filtro[t].valor + '</div>' +
        '</div>' + '<div style="background-color: #A63232; width: 0.6%; height: auto; margin-left: 5%; margin-right: 5%;"></div>' + '</div>';
        
    }

    }

    else if(vtdd == 1 && filtro.length < 4){
        vmais.innerHTML = "Nenhum outro produto disponível!";

    }
    
}

// Mostrar produtos.