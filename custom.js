/*
  JS used to complete the Metaforce technical test
  = BEGIN = 
*/

$(document).ready( function(){
      
  function chart(){

        // Set Quarter variable in array form. 
        // Formatted where each index correlates to a specific year.
        var Q1 = [ 8.2, 3.2, 4.7, 5.4, 9.7 ];
        var Q2 = [ 8, 3, 4, 4.6, 8.3 ];
        var Q3 = [ 6, 1, 2, 2.3, 4 ];
        var Q4 = [ 7, 2, 3, 3.5, 6 ];
        
        /* CHART 1 "LINE" START  */

        var chart1 = new CanvasJS.Chart("colChartContainer");     // creating an instance of a chart by passing it the div ID that will contain the chart
            chart1.options.axisY = { prefix: "$", suffix: "M" };  // defining properties for our Y axis 
            chart1.options.title = { text: "" };                  // Title of the chart
            chart1.options.height = 300;                          // Custom height of the chart
        
        var chart1series1 = {                                     // Creating an object for the data we will pass to the chart instance
          type: "column",                                         // type can be pie / line / column / ( see canvasjs web for more info )
          name: "Q1", 
          showInLegend: true
        };
        
        var chart1series2 = { 
          type: "column",
          name: "Q2",
          showInLegend: true
        };
        
        var chart1series3 = { 
          type: "column",
          name: "Q3",
          showInLegend: true
        };
        
        var chart1series4 = { 
          type: "column",
          name: "Q4",
          showInLegend: true
        };
        
        chart1.options.data = [];
        chart1.options.data.push(chart1series1);                   // Passing our data   
        chart1.options.data.push(chart1series2);
        chart1.options.data.push(chart1series3);
        chart1.options.data.push(chart1series4);
        
        chart1series1.dataPoints = [                              //  Defining the datapoints with Quarter variables
              { label: "2013", y: Q1[0] },
              { label: "2014", y: Q1[1] },
              { label: "2015", y: Q1[2] },                                    
              { label: "2016", y: Q1[3] },
              { label: "2017", y: Q1[4] }
        ];
        
        chart1series2.dataPoints = [
              { label: "2013", y: Q2[0] },
              { label: "2014", y: Q2[1] },
              { label: "2015", y: Q2[2] },                                    
              { label: "2016", y: Q2[3] },
              { label: "2017", y: Q2[4] }
        ];
        
        chart1series3.dataPoints = [
              { label: "2013", y: Q3[0] },
              { label: "2014", y: Q3[1] },
              { label: "2015", y: Q3[2] },                                    
              { label: "2016", y: Q3[3] },
              { label: "2017", y: Q3[4] }
        ];
        
        chart1series4.dataPoints = [
              { label: "2013", y: Q4[0] },
              { label: "2014", y: Q4[1] },
              { label: "2015", y: Q4[2] },                                    
              { label: "2016", y: Q4[3] },
              { label: "2017", y: Q4[4] }
        ];
        
        chart1.render();                                          //  Outputs the chart into the container we defined 
      
        /* CHART 1 "COL" END  */

        /* CHART 2 "LINE" START  */

        var chart2 = new CanvasJS.Chart("lineChartContainer");
            chart2.options.axisY = { prefix: "$", suffix: "M" };
            chart2.options.title = { text: "" };
            chart2.options.height = 300;
        
        var chart2series1 = { 
          type: "line",
          name: "Q1",
          showInLegend: true
        };
        
        var chart2series2 = { 
          type: "line",
          name: "Q2",
          showInLegend: true
        };
        
        var chart2series3 = { 
          type: "line",
          name: "Q3",
          showInLegend: true
        };
        
        var chart2series4 = { 
          type: "line",
          name: "Q4",
          showInLegend: true
        };
        
        chart2.options.data = [];
        chart2.options.data.push(chart2series1);
        chart2.options.data.push(chart2series2);
        chart2.options.data.push(chart2series3);
        chart2.options.data.push(chart2series4);
        
        chart2series1.dataPoints = [
              { label: "2013", y: Q1[0] },
              { label: "2014", y: Q1[1] },
              { label: "2015", y: Q1[2] },                                    
              { label: "2016", y: Q1[3] },
              { label: "2017", y: Q1[4] }
        ];
        
        chart2series2.dataPoints = [
              { label: "2013", y: Q2[0] },
              { label: "2014", y: Q2[1] },
              { label: "2015", y: Q2[2] },                                    
              { label: "2016", y: Q2[3] },
              { label: "2017", y: Q2[4] }
        ];
        
        chart2series3.dataPoints = [
              { label: "2013", y: Q3[0] },
              { label: "2014", y: Q3[1] },
              { label: "2015", y: Q3[2] },                                    
              { label: "2016", y: Q3[3] },
              { label: "2017", y: Q3[4] }
        ];
        
        chart2series4.dataPoints = [
              { label: "2013", y: Q4[0] },
              { label: "2014", y: Q4[1] },
              { label: "2015", y: Q4[2] },                                    
              { label: "2016", y: Q4[3] },
              { label: "2017", y: Q4[4] }
        ];
        
        chart2.render();
        
        /* CHART 2 "LINE" END  */

        /* CHART 3 "PIE" START  */
        
        var chart3 = new CanvasJS.Chart("pieChartContainer");
            chart3.options.axisY = { prefix: "$", suffix: "M" };
            chart3.options.title = { text: "Q1" };
            chart3.options.height = 300;
        
        var chart3series1 = { 
          type: "pie",
          name: "Q1",
          showInLegend: false
        };
        
        chart3.options.data = [];
        chart3.options.data.push(chart3series1);

        chart3series1.dataPoints = [
              { label: "2013", y: Q1[0] },
              { label: "2014", y: Q1[1] },
              { label: "2015", y: Q1[2] },                                    
              { label: "2016", y: Q1[3] },
              { label: "2017", y: Q1[4] }
        ];

        chart3.render();

        /* CHART 3 "PIE" END  */
  }
  chart();
});

/*
  = END =
*/