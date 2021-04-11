
//chart para dibujar citas por mes

var options = {
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
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

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
