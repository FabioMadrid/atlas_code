
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
  
  var citas_mes = new ApexCharts(document.querySelector("#citas_mes"), citas_mes);
  
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

  //Chart para dibujar grafico pie citas presenciales / virtuales SEMANAL
  var tipo_cita = {
    series: [25, 15],
    chart: {
    width: '100%',
    type: 'pie',
  },
  labels: ["Presencial", "Virtual",],
  theme: {
    monochrome: {
      enabled: true
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5
      }
    }
  },
  title: {
    text: ""
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex]
      return [name, val.toFixed(1) + '%']
    }
  },
  legend: {
    show: false
  }
  };

  var tipo_cita = new ApexCharts(document.querySelector("#tipo_cita"), tipo_cita);
  tipo_cita.render();

  //numero de clientes cerrados por MES 

  var clientes_cerrados = {
    series: [{
      name: "Clientes Cerrados",
      data: [1, 3, 5, 7, 10, 12, 15, 16, 20,23,24,29]
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
    text: '',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ["Ene","Feb","Mar","Abr","Mayo","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
  }
  };

  var clientes_cerrados = new ApexCharts(document.querySelector("#clientes_cerrados"), clientes_cerrados);
  clientes_cerrados.render();
