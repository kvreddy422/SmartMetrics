var data1=[
  {
    "name": "bedlamp1",
    "value": 19
  },
  {
    "name": "mastercablemodem",
    "value": 189
  },
  {
    "name": "bednightlight",
    "value": 33
  },
  {
    "name": "masterclockphone",
    "value": 15
  },
  {
    "name": "basementTv",
    "value": 845
  },
  {
    "name": "kitchenPinani",
    "value": 225
  },
  {
    "name": "livingDvd",
    "value": 24
  },
  {
    "name": "livingLamp1",
    "value": 24
  },
  {
    "name": "masterDeskLamp",
    "value": 189
  },
  {
    "name": "masterLamp1",
    "value": 189
  },
  {
    "name": "masterNightstand",
    "value": 79
  },
  {
    "name": "livingRommWii",
    "value": 34
  },
  {
    "name": "iPhone",
    "value": 44
  },
  {
    "name": "WashinMachine",
    "value": 194
  }
]              
            $(function () {
    $('#container2').highcharts({
        title: {
            text: 'Hourly power consumption of the device',
            x: -20 //center
        },
        
                              credits: {
                        enabled: false
                    },
        xAxis: {
                                  title: {
                text: 'Time'
            },
            categories: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00',
                '6:00', '7:00', '8:00', '9:00', '10:00', '11:00']
        },
        yAxis: {
            title: {
                text: 'Power Consumed  (Watts)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Watts'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            showInLegend: false,
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, 
            
        ]
    });
});
            
            
            
            //bar chart code
            
            $(function () {
    $('#container1').highcharts({
        chart: {
            type: 'column'
                                             
        },
                              credits: {
                        enabled: false
                    },

                              
        title: {
            text: 'Monthly Expenses Incurred'
        },
        
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'April'
                
            ],
                                             
            crosshair: true
        },
                              
        yAxis: {
            min: 0,
            title: {
                text: 'Cost in $'
            },
               gridLineWidth: 0,
   
        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        labels: {
            align: 'right',
            x:-10,
            y:10
        },
        lineWidth:1,
                    
        },
        tooltip: {
           // headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
           // pointFormat: '<tr><td style="color:{series.color};padding:0" </td>' +
                //'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            //footerFormat: '</table>',
            shared: false,
            useHTML: false
        },
       
        series: [{
            showInLegend:false,
            data: [49.9, 106.4, 71.5, 33.5],
            pointWidth: 50,
                                             pointPadding:0,
                                             color: '#33adff'
        }, 
                              

        ]
    });
});
            
            
            
            //gauge code
            $(function () {

                var gaugeOptions = {

                    chart: {
                        type: 'solidgauge',
                        
                         
                   },

                    title: null,

                    pane: {
                        center: ['50%', '85%'],
                        size: '140%',
                        startAngle: -90,
                        endAngle: 90,
                        background: {
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                            innerRadius: '60%',
                            outerRadius: '100%',
                            shape: 'arc'
                        }
                    },

                    tooltip: {
                        enabled: false
                    },

                    // the value axis
                    yAxis: {
                        stops: [
                            [1.0, '#33adff'], // blue
                            // [0.5, '#DDDF0D'], // yellow
                            // [0.9, '#DF5353'] // red
                        ],
                        lineWidth: 0,
                        minorTickInterval: null,
                        tickPixelInterval: 400,
                        tickWidth: 0,
                        title: {
                            y: -70
                        },
                        labels: {
                            y: 16
                        }
                    },

                    plotOptions: {
                        solidgauge: {
                            dataLabels: {
                                y: 5,
                                borderWidth: 0,
                                useHTML: true
                            }
                        }
                    }
                };

                // The power gauge
                $('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
                    yAxis: {
                        min: 0,
                        max: 200,
                        title: {
                            text: ''
                        }
                    },

                    credits: {
                        enabled: false
                    },

                    series: [{
                        name: 'Power Consumption',
                        data: [75],
                        dataLabels: {
                            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                                   '<span style="font-size:12px;color:silver">Watt</span></div>'
                        },
                        tooltip: {
                            valueSuffix: ' Watt'
                        }
                    }]

                }));



            });
                                             
                              $(function () {
                                             
                                               
                                                var devices = [
                               
                            {"usd": 160, "product": "BedLamp1","hours":"2","psaved":"4"},
                            {"usd": 180, "product": "mastercablemodem","hours":"3","psaved":"3"},
                            {"usd": 200, "product": "bednightlight","hours":"2","psaved":"5"},
                            {"usd": 6400, "product": "basementTv","hours":"4","psaved":"80.5"},
                            {"usd": 4800, "product": "kitchenPinani","hours":"4","psaved":"60"},
                            {"usd": 1600, "product": "livingDvd","hours":"2","psaved":"40"},
                            {"usd": 1800, "product": "livingLamp1","hours":"3","psaved":"30"},
                            {"usd": 1200, "product": "masterDeskLamp","hours":"2","psaved":"30"},
                            {"usd": 1000, "product": "masterLamp1","hours":"4","psaved":"25"},
                            {"usd": 240, "product": "masterNightstand","hours":"2","psaved":"6"},
                            {"usd": 320, "product": "livingRommWifi","hours":"2","psaved":"8"},
                            {"usd": 1600, "product": "iphone","hours":"4","psaved":"20"},
                            {"usd": 2400, "product": "WashingMachine","hours":"1","psaved":"120.5"},
                            ];  /*
                                               
              // instantiate d3plus
              var visualization = d3plus.viz()
                .container("#viz")
                .data(devices)
                .type("tree_map")
                .id("product")
                .size("usd")
                 .font({ "family": "Times" })
                .labels({"align": "left", "valign": "top"})
                // .color({
                  // "range": [ "#6373FF", "#63A3FF", "#63E3FF", "#63FFFB", "#63FFCB",
                       // "#63FF9B", "#63FF6B", "#7BFF63", "#BBFF63", "#DBFF63", "#FBFF63", 
                       // "#FFD363", "#FFB363", "#FF8363", "#FF7363", "#FF6364"],

                  // "value": "usd"
                // })
                                                            .tooltip(["product","hours","psaved"])
                .draw() */
                                                            
                                                            
                                                                   /*  var devices = [
                               
                            {"usd": 345, "product": "AC","hours":"2","psaved":"4"},
                            {"usd": 128, "product": "Refrigerators","hours":"3","psaved":"3"},
                            {"usd": 897, "product": "Lights","hours":"2","psaved":"5"},
                            {"usd": 987, "product": "Desktops","hours":"4","psaved":"10"},
                            {"usd": 689, "product": "Vending Machines","hours":"2","psaved":"5"},
                                                                                                         
                                                                                                         {"usd": 1345, "product": "AC1","hours":"2","psaved":"4"},
                            {"usd": 1128, "product": "Refrigerators1","hours":"3","psaved":"3"},
                            {"usd": 1897, "product": "Lights1","hours":"2","psaved":"5"},
                            {"usd": 1987, "product": "Desktops1","hours":"4","psaved":"10"},
                            {"usd": 1689, "product": "Vending Machines1","hours":"2","psaved":"5"},
                                                                                                         
                                                                                                         
                                                                                                         {"usd": 2345, "product": "AC3","hours":"2","psaved":"4"},
                            {"usd": 2128, "product": "Refrigerators3","hours":"3","psaved":"3"},
                            {"usd": 2497, "product": "Lights3","hours":"2","psaved":"5"},
                            {"usd": 2987, "product": "Desktops3","hours":"4","psaved":"10"},
                            {"usd": 2689, "product": "Vending Machines3","hours":"2","psaved":"5"},
                                                                                                         
                                                                                                         
                                                                                                         {"usd": 3345, "product": "AC2","hours":"2","psaved":"4"},
                            {"usd": 3128, "product": "Refrigerators2","hours":"3","psaved":"3"},
                            {"usd": 3497, "product": "Lights2","hours":"2","psaved":"5"},
                            {"usd": 3987, "product": "Desktops2","hours":"4","psaved":"10"},
                            {"usd": 3689, "product": "Vending Machines2","hours":"2","psaved":"5"},
                                                                                                         
                                                                                                         
                                                                                                         
                                                                                                         {"usd": 4345, "product": "AC4","hours":"2","psaved":"4"},
                            {"usd": 4128, "product": "Refrigerators4","hours":"3","psaved":"3"},
                            {"usd": 4497, "product": "Lights4","hours":"2","psaved":"5"},
                            {"usd": 4987, "product": "Desktops4","hours":"4","psaved":"10"},
                            {"usd": 4689, "product": "Vending Machines4","hours":"2","psaved":"5"},
                                                                                                         
                                                                                                         
                                                                                                         {"usd": 5345, "product": "AC5","hours":"2","psaved":"4"},
                            {"usd": 5128, "product": "Refrigerators5","hours":"3","psaved":"3"},
                            {"usd": 5497, "product": "Lights5","hours":"2","psaved":"5"},
                            {"usd": 5987, "product": "Desktops5","hours":"4","psaved":"10"},
                            {"usd": 5689, "product": "Vending machine5","hours":"2","psaved":"5"},
                                                                                                         
                                                                                                         
                              
                           

                           
                        ];  */
                                                                                          
                                                                                          
                                                                                          /*#######################################*/
                                                                                          
                                                                                          $(function () {
    $('#viz').highcharts({
        colorAxis: {
            minColor: '#cce6ff',
            maxColor: Highcharts.getOptions().colors[0]
        },
                              credits:{
                                             enabled: false
                                 },
                                 legend: {
                enabled: false
            },
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            data: data1
        }],
        title: {
            text: ' '
        }
    });
});
                                                                                          
                                                                                          /*#########################################*/
                            devices.sort(function(a, b){
                                                                                                                                       return b.usd - a.usd;
                                                                                                                                                                                                   });
                                                                                          
                                                                                          var names = [];
                                                                                          for (var i = 0; i <devices.length ; i++) {
                                                                                          names.push({product:devices[i].product,usd:devices[i].usd,hours:devices[i].hours,psaved:devices[i].psaved})};




                        // column definitions
                           var columns = [
                          { head: 'Device', cl: 'left', html: ƒ('product') },
                        
                          { head: 'Reduced Usage (hours/day)', cl: 'center', html: ƒ('hours') },

                          { head: 'Power Saved (KWs/day)', cl: 'num', html: ƒ('psaved', d3.format('.1f')) },
                               
                          { head: 'Cost Saved    ($)', cl: 'center', html: ƒ('usd') },

                        ]; 


console.log(names);

                        // create table
                        var table = d3.select('#tabledata')
                            .append('table')
                            .attr("class","table-resposive customtable")
                        .style('height','225px');

                        // create table header
                        table.append('thead').append('tr')
                            .selectAll('th')
                            .data(columns).enter()
                            .append('th')
                            .attr('class', ƒ('cl'))
                            .text(ƒ('head'));
                       // create table body
                        table.append('tbody')
                            .selectAll('tr')
                            .data(names).enter()
                            .append('tr')
                            .selectAll('td')
                            .data(function(row, i) {
                                return columns.map(function(c) {
                                    // compute cell values for this specific row
                                    var cell = {};
                                    d3.keys(c).forEach(function(k) {
                                        cell[k] = typeof c[k] == 'function' ? c[k](row,i) : c[k];
                                    });
                                    return cell;
                                });
                            }).enter()
                            .append('td')
                            .html(ƒ('html'))
                            .attr('class', ƒ('cl'));
                                                                                                         topThree();

                            // function length() {
                            // var fmt = d3.format('02d');
                            // return function(l) { return Math.floor(l / 60) + ':' + fmt(l % 60) + ''; };
                        // }
                                                                                          
                                                                                          
  

                              }) 
        
        function topThree(){
            $('tbody tr').show();
            $('tbody tr').slice(3,50).hide();
        }
        function topFive(){
                    $('tbody tr').show();
                    $('tbody tr').slice(5,50).hide();
                }
        function topSeven(){
                    $('tbody tr').show();
                    $('tbody tr').slice(7,50).hide();
                }
        function topTen(){
                    $('tbody tr').show();
                    $('tbody tr').slice(10,50).hide();
                }
