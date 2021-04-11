
//chart para dibujar citas por mes

var citas_mes = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'Citas',
      data: [0,0,0,0,49,60,70,91,125,150,170,205]
    }],
    xaxis: {
      categories: ["Ene","Feb","Mar","Abr","Mayo","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]
    }
  }
  
  var citas_mes = new ApexCharts(document.querySelector("#chart"), citas_mes);
  
  citas_mes.render();

  //chart para dibujar Citas por semana
  var citas_diarias = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'Citas',
      data: [2,0,3,7,10,13,10]
    }],
    xaxis: {
      categories: ["Lun","Mar","Mie","Jue","Vie","Sab","Dom"]
    }
  }
  
  var citas_diarias = new ApexCharts(document.querySelector("#citas_diarias"), citas_diarias);
  
  citas_diarias.render();

  //Chart para dibujar grafico pie citas presenciales / virtuales
