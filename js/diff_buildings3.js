var responsejson;
var type;
							
				
/* #################### LINE GRAPH ################### */



$(window).load(function(){
	type =  "totalPower";
	test(type); 
     $(function(){
         $(".btn-info").on("click", function(event){
			 type = event.toElement.id;
				test(type); 
				
				
         })
     })
});

function test(type) {


 
 var type1= type;
console.log(typeof(type1));
 
  if(type1.search("Facility") > -1)
 {
 var res1 = type1.replace("Facility", " ");
 }
 else if(type1.search("total") > -1)
 {
 var res1 = type1.replace("total", " ");
 }
 else if (type1.search("Electricity") > -1)
 {
 var res1 = type1.replace("Electricity", "");
 }
 else {
 var res1 = type;
 }
 String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
res=res1.capitalize();
 
 // var a= "Total"+" "+ res + " "+ "Consumed";
 
 // document.getElementById("panel_title1").innerHTML=a;
 
 var stack = "Last Weeks" +" "+res+ " "+"Consumption"
 document.getElementById("panel_title7").innerHTML = stack;

 var pie = "Power Consumption of each device";
 document.getElementById("panel_title8").innerHTML = pie;
 var state= sessionStorage.getItem('state');
 var city=sessionStorage.getItem('city');
 var buildingtype='RefBldg'+sessionStorage.getItem('building')+'New2004';
 
var url = 'http://liacm218:8181/BuildingCassandraRest/getallbyscbdaily/'+state+'/'+city+'/'+buildingtype;
var response = '';
var request = new XMLHttpRequest();
request.open('GET', url, false);  // `false` makes the request synchronous
request.send(null);

var build=buildingtype.replace("New2004", " ");
var build1=build.replace("RefBldg"," ");


var a= state + '>' + city +'>'+build1;
 
 document.getElementById("panel_title1").innerHTML=a;
$(".dropdown-menu li a").click(function(){
  
  $(".btn:first-child").html($(this).text());


});



if (request.status === 200) {
  response = request.responseText;
}
 responsejson = JSON.parse(response);

 var timestampLine= [];
	 var totalPowerLine = [];
	 var pers= 0;
	
var resultss = 0;
for(var i=0;i<responsejson.length;i++){
	for (var key in responsejson[i]){
     
	 
	 
	 timestampLine[i] = new Date(responsejson[i]["timestamp"]);
	 
	if (type== "totalPower"){totalPowerLine[i] = responsejson[i][key];

	 }
	 else{
	 totalPowerLine[i] = responsejson[i][type];
	 
	
	}
	  

	 
	 }
	 
 

}	


for (i=0;i<7;i++){
	
	console.log(pers,"pers");
	 // pers = pers + totalPowerLine[i];
	 // resultss = parseInt(pers, 10); 

}

var date=[];
 
 
 for (i=0 ; i<timestampLine.length; i++){
 date[i]=(timestampLine[i].getMonth() + 1)+ "/"+timestampLine[i].getDate() + "/"   + timestampLine[i].getFullYear() }
 
 var final_data=[];
 for(i=0; i<date.length; i++)
{
    final_data.push([date[i],totalPowerLine[i]]);
	
	

	
};
 final_data.reverse();

   
 function rungraph(data) {
        $('#linegraph1').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Total' +" "+ res+" "+'consumed over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
           credits:{
			enabled: false
		   },
			xAxis: {
            type: 'datetime',
          
            labels: { 
                 format: '{value:%m/%d/%Y}', 
                 align: 'right', 
                 rotation: -30 ,
				 x : -5,
				 y: 10,
				 
            }, 
			gridLineWidth: 0,
  
        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        
        lineWidth:1,
      
			
               
        },
	
            yAxis: {
				gridLineWidth: 0,
   
        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        
        lineWidth:1,
     
                title: {
                    text: 'Total'+" "+res + " "+'(kWh)'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
		
                area: {
                    fillColor: {
                      
                         stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ] 
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
			
			tooltip:{
			 valueDecimals: 0,
			 },
            series: [{
                type: 'area',
                name: type,
				pointStart : Date.UTC(2015,0,1),
				pointInterval: 24 * 3600 * 1000, 
                data: final_data
            }]
        });
    };
	
	rungraph(responsejson);
	
<!-- }); -->

/* #################### PIE CHART ################### */
var per = 0;
var per_value = [];
var res_num=0;
$(function () {

var header = ["null","apples"];
var data=[];

var res = responsejson[1]


var xvalue = []
for (var key in res){
    
	 if (key == "state" || key == "city" || key == "buildingtype" || key == "totalPower" || key == "timestamp" || key == "gasFacility" || key == "electricityFacility" ){continue;}
	 
	 else { 
	
	 data.push({"name":key,"y":res[key]});
	 
	 
	 per = per + res[key];
	 res_num = parseInt(per, 10); 
	 
	 }
		
	 
	 }
	 
	  console.log(per, "per"); 
	 data.sort(function(a, b) {
	
    return parseFloat(b.y) - parseFloat(a.y);
});

console.log(per_value,"per_value"); 
	 



    $('#pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'column'
			
        },
        title: {
                  
				text:'Total:'+res_num,
				valueDecimals: 2,
			 align: 'right',
			
            },
      
		credits:{
			enabled: false
		   },
		   tooltip: {
             valueDecimals: 0,
        },
		  xAxis: {
            categories : [],
			labels: { 
                 
                 align: 'right', 
                 rotation: -30 ,
				 x : -5,
				 y: 10,
				 
            }, 

           
        },
		legend: {
                enabled: false
            },
		yAxis: {
			gridLineWidth: 0,

        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        
        lineWidth:1,
      title: {
                    text: 'Energy Consumed(kWh)'
                }
		
		
		
		},
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
               /*dataLabels: {
                    enabled: true,
					align: 'right',
                    color: 'black',
                    y: 0,
					
					formatter: function () {
					 var pcnt = (this.y / per) * 100;
					 return  Highcharts.numberFormat(this.y,0)+" ("+Highcharts.numberFormat(pcnt,0) + "%)" ; 
        
    },
					 
                },*/
				pointPadding: 0.1,
                groupPadding: 0,
				overflow:false,
				
				showInLegend: true
            }
        },
		
        series: [{
            name: 'Total Power',
            colorByPoint: true,
			    point:{
                  events:{
                      click: function (event) {
							<!-- alert(this.name); -->
                          test(this.name);
                      }
                  }
              }  ,
            data: data
        }]
    });
	
});
/* #################### STACKED BAR CHART ################### */

var per = [];
var today = new Date(timestampLine[0]);
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();

if (date < 7){
month = today.getMonth() - 1 ;
}

if (month <1 && date < 7){
month = 12
year = today.getFullYear()-1;

}
    var lastWeek = new Date(year, month, date - 7);
 var date = []
 
 for (i = 0; i < 7; i++) { 
    date[i] = new Date(lastWeek.getFullYear(), lastWeek.getMonth(), lastWeek.getDate() + i);
}

 

var final_date = [];
 for (i = 0; i < 7; i++) { 
final_date[i]= (date[i].getMonth() + 1)+ "/"+date[i].getDate()  +  "/" + date[1].getFullYear();

}
final_date.reverse(); 
var rows = [];
for(i=0; i<7; i++)
{
    rows.push([final_date[i],totalPowerLine[i+1]]);
	pers = pers + totalPowerLine[i+1];
	 resultss = parseInt(pers, 10); 
}
var data="john"


$('#bar').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
		gridLineWidth: 0,
  
        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        labels: {
            align: 'right',
            x:-10,
            y:5
        },
        lineWidth:1,
   
            categories: [],
			
        },
		 title: {
                  
				text:'Total:'+resultss,
				valueDecimals: 2,
			 align: 'right',
			
            },
        yAxis: {
            min: 0,
			tickInterval: 1000,
           
			title:{text:''},
			gridLineWidth: 0,
 
        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        labels: {
            align: 'right',
            x:0,
            y:10
        },
        lineWidth:1,
      
	  showInLegend: true
        },
		credits:{
			enabled: false
		   },
		    tooltip: {
            valueDecimals: 0,},
       
        plotOptions: {
           	 series: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
					align: 'right',
                    color: 'black',
                    y: 1,
					formatter: function () {
					var pcnt = (this.y / pers) * 100;
        return Highcharts.numberFormat(this.y,0)+" ("+Highcharts.numberFormat(pcnt,0) + "%)";
    },
	
                },
				
				pointPadding: 0.1,
                groupPadding: 0,
				overflow:false,
				<!-- stacking:normal, -->
				point: {
                    events: {
                        click: function () {
                            <!-- alert('Category: ' + this.name+ ', value: ' + this.y); -->
                        }
                    }
                }
				},
        },
      series: [{
            name: type,
            data: rows
        }]
    });
	
/*#####################GAUGE#######################*/
	
	var result = responsejson[1];
	console.log(result,"result");
	
	
	  var data = [];
	  var res1=" ";
	  var res= [];
	  res.push([type]);
	  data = result[type];
	
var final_data = [];
	
	final_data.push([data]);
$('#gauge').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
		gridLineWidth: 0,
   
        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        labels: {
            align: 'right',
            x:-10,
            y:5
        },
        lineWidth:1,
      
            categories: res1,
			
        },
        yAxis: {
		
            min: 0,
			tickInterval: 1000,
            title: {
                text:' ' <!-- 'Total'+ " "+type+ " "+'Consumption' -->
            },
			
			gridLineWidth: 0,
   
        tickLength: 5,
        tickWidth: 1,
        tickPosition: 'outside',
        labels: {
            align: 'right',
            x:0,
            y:10
        },
        lineWidth:1,
      
	  showInLegend: true
        },
		credits:{
			enabled: false
		   },
		    tooltip: {
            valueDecimals: 0,},
       
        plotOptions: {
		
           	 series: {
               allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
					align: 'right',
                    color: 'black',
                    y: 1,
					 
				 allowPointSelect:false,
					formatter: function () {
					
        return Highcharts.numberFormat(this.y,0);
    },
	
                },
				
				
				pointPadding: 0.01,
                groupPadding: 0,
				overflow:false,
				
				
				
				
				
				},
        },
      series: [{
            name: type,
            data: final_data
        }]
    });
	
	
	
	



};