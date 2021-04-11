
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
  var ventas = {
    series: [{
    name: "STOCK ABC",
    data: series.monthDataSeries1.prices
  }],
    chart: {
    type: 'area',
    height: 350,
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
    text: 'Fundamental Analysis of Stocks',
    align: 'left'
  },
  subtitle: {
    text: 'Price Movements',
    align: 'left'
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: 'left'
  }
  };

  var chart_ventas = new ApexCharts(document.querySelector("#chart_ventas"), ventas);
  chart_ventas.render();