var ctx = document.getElementById('myChart');
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4', '5'],

    datasets: [
      {
        label: 'Duy',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['red', 'red', 'red', 'red', 'red']
      },
      {
        label: 'Duong',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['gray', 'gray', 'gray', 'gray', 'gray']
      }
    ]
  },
  options: {
    responsive: false,

    // chồng lên nhau
    scales: {
      xAxes: [{ stacked: true, display: false }],
      yAxes: [{ stacked: true, display: false }]
    },
    // events: ['click'],
    legend: {
      position: 'bottom',
      // display: true,
      usePointStyle: true,
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'blue',
        // fontSize: '10',
        fontFamily: 'Roboto'
      }
    },
    // layout: {
    // 	padding: {
    // 		left: 50,
    // 		right: 0,
    // 		top: 0,
    // 		bottom: 0,
    // 	},
    // },
    tooltips: {
      mode: 'index'
    }
  }
});
