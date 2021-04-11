
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

  //chart para dibujar Citas Diarias
  var citas_diarias = {
    series: [{
      name: "Citas",
      data: [1, 5, 2, 4, 3, 2, 6]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom',],
  }
  };

  var citas_diarias = new ApexCharts(document.querySelector("#citas_diarias"), citas_diarias);
  citas_diarias.render();