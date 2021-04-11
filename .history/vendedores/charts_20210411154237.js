
//chart para dibujar citas al año

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

  //chart para dibujar GMV de ventas
  