let listaCarros = [
  {
    nome: "Czinger 21c",
    img: "../assets/images/czinger-21c.webp",
    descricao: ` O Czinger 21C é um hipercarro híbrido biturbo projetado pela
                  Czinger Vehicles. O carro foi inspirado na aeronave Lockheed
                  SR-71 “Blackbird”, utilizada pelos americanos durante a Guerra
                  Fria.`,
    fichaTecnica: `Motor V8 bi-turbo de 2.88 litros com cambota plana
                    Potência máxima de 950 cv a 10.500 rpm
                    Binário de 746 Nm
                    Potência máxima combinada de 1.250 cv
                    Relação peso/potência de 1 kg/cv
                    Aceleração de 0 a 100 km/h em 1,9 segundos
                    Aceleração de 0 a 300 km/h em 13,8 segundos
                    Aceleração de 0 a 400 km/h em 21,3 segundos
                    Velocidade máxima de 452 km/h
                    Caixa sequencial de sete velocidades`,
  },
  {
    nome: "De Tomaso P72",
    img: "../assets/images/de-tomaso.webp",
    descricao: `O De Tomaso P72 é um superdesportivo italiano que foi revelado
                  em 2019. A marca italiana anunciou que serão fabricadas apenas
                  72 unidades do modelo.`,
    fichaTecnica: `Motor V8 Ford Coyote de 5.0 litros, superalimentado
                    Potência de 750 cv
                    Torque de 900 Nm
                    Transmissão manual de 6 velocidades
                    Chassi monobloco em fibra de carbono
                    Carroceria em fibra de carbono
                    Peso inferior a 1000 kg
                    Estilo retro, inspirado no De Tomaso P70 de competição
                    Interior luxuoso`
                
  },
  {
    nome: "Drako GTE",
    img: "../assets/images/drako-gte.webp",
    descricao: `O Drako GTE é um supercarro elétrico norte-americano que tem
                  quatro motores elétricos, um em cada roda. O carro é baseado
                  no Fisker Karma e tem uma produção limitada a 25 unidades.`,
    fichaTecnica: `Velocidade máxima: 332 km/h
                    Aceleração de 0 a 100 km/h em cerca de 2 segundos
                    Bateria de íons de lítio de 90 kWh
                    Carregador interno de 15 kW
                    Recarga rápida de 150 kW
                    Travões de disco da Brembo em carbono cerâmica
                    Amortecedores Ohlins
                    Sistema de vetorização de binário
                    Chassis de alumínio
                    Suspensão dianteira e traseira com braços A em alumínio forjado`
  },
  {
    nome: "Ferrari La Ferrari",
    img: "../assets/images/ferrari-laferrari.webp",
    descricao: `A Ferrari LaFerrari é um superesportivo híbrido, com motor V12
                  a gasolina e motor elétrico. Foi o primeiro carro híbrido de
                  produção da Ferrari.`,
    fichaTecnica: `Motor: V12 de 6.3 litros + motor elétrico
                    Potência Total: 963 cv (800 cv do motor a combustão + 163 cv do motor elétrico)
                    Torque: 900 Nm
                    Aceleração 0-100 km/h: 2,6 segundos
                    Aceleração 0-200 km/h: 6,9 segundos
                    Velocidade Máxima: 352 km/h`
        
  },
  {
    nome: "Mclaren Elva",
    img: "../assets/images/mclaren-elva.webp",
    descricao: `O McLaren Elva é um carro esportivo conversível, com motor
                  central V8 biturbo, carroceria em fibra de carbono e design
                  aerodinâmico.`,
    fichaTecnica: `Motor: V8 4.0 litros biturbo
                    Potência: 815 cv (600 kW)
                    Torque: 800 Nm
                    Aceleração 0-100 km/h: 2,8 segundos
                    Aceleração 0-200 km/h: 6,7 segundos
                    Velocidade Máxima: 327 km/h
`
  },
  {
    nome: "Pagani Huayra",
    img: "../assets/images/pagani-huayra.webp",
    descricao: `O Pagani Huayra é um superesportivo com motor V12 central, que
                  foi lançado em 2011. O nome Huayra vem da deusa do vento.`,
    fichaTecnica: `Motor: V12 6.0 litros biturbo (Mercedes-AMG)
                    Potência: 730 cv (537 kW)
                    Torque: 1.000 Nm
                    Aceleração 0-100 km/h: 2,8 segundos
                    Velocidade Máxima: 383 km/h`
  },
];

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards")
    cardCarro.innerHTML += `
        <div class="col mb-5">
            <div class="card h-100" style="width: 20rem">
              <img
                src="${carro.img}"
                class="card-img-top"
                alt="Czinger 21c"
              />
              <div class="card-body">
                <h5 class="card-title">${carro.nome}</h5>
                <p class="card-text">
                </p>
                <a href="#" class="btn btn-primary" onclick= "zoomImg('${(posicao)}')">Ficha Técnica</a>
              </div>
            </div>
        </div>     
    `
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricao").innerHTML = carroSelecionado.descricao
    document.getElementById("fichaTecnica").innerHTML = carroSelecionado.fichaTecnica
    document.getElementById("imgModal").src = carroSelecionado.img

    new bootstrap.Modal('#zoomImg').show();
}

function tema(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "light"){
        document.querySelector("html").setAttribute("data-bs-theme", "dark")
        document.querySelector("#tema").innerHTML = `<i class="bi bi-brightness-high"></i>`
    }else{ 
        document.querySelector("html").setAttribute("data-bs-theme", "light")
        document.querySelector("#tema").innerHTML = `<i class="bi bi-moon"></i>`
    }
}
