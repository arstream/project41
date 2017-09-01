google.charts.load('current', {packages: ['corechart', 'table', 'geochart']});

google.charts.setOnLoadCallback(drawChart0);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawTable3);
google.charts.setOnLoadCallback(drawRegionsMap);

function drawChart0() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Nitrogen', 0.78],
        ['Oxygen', 0.21],
        ['Other', 0.01]
    ]);
    //alert(data.toJSON());

    //var options = {
    //    'legend':'left',
        //'title':'Air',
    //    'is3D':false,
    //    'width':400,
    //    'height':300
    //}
    var options = {width:'100%', height:'100%'};

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div0'));
    chart.draw(data, options);
}

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
 };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}
     

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('region_map_div'));
    chart.draw(data, options);
};

function drawTable3() { 
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'INSTITUTION');
        data.addColumn('number', 'DOC.');
        data.addColumn('number', 'CITATIONS');
        data.addColumn('number', 'AVERAGE');        
        data.addRows([
            ['UPR-RP',4372,72001,16.47],
            ['UPR-RUM',3785,56243,14.86],
            ['UPR-CM',4314,54264,12.58],
            ['UPR-H',492,3833,7.79],
            ['UPR-CY',244,1127,4.62],
            ['UPR-AR',57,305,5.35],
            ['UPR-BY',56,220,3.93],
            ['UPR-PO',59,105,1.78],
            ['UPR-UT',19,44,2.32],
            ['UPR-AG',46,35,0.76],
            ['UPR-CR',16,19,1.19]          
        ]);
    
    var table = new google.visualization.Table(document.getElementById('barformat_div'));
    var formatter = new google.visualization.BarFormat({width: 100});
    formatter.format(data, 3); // Apply formatter to second column
    table.draw(data, {allowHtml: true, showRowNumber: true, width: '100%', height: '100%'});
}

$(window).resize(function(){
  drawChart0();
  drawChart1();
  drawChart2();
  drawRegionsMap();
  drawTable3();
});
