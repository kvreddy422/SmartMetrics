$(function() {
var set=[],dataArray=[],runFlag=0,lastTime=0;
//Chiller:
var disTemp = 'http://10.63.33.218:8181/iot/getonedaydata/BAY1/DischargeTemp/';
var disPress = 'http://10.63.33.218:8181/iot/getonedaydata/BAY1/DischargePressure/';

//UPS
var totPwr = 'http://10.63.33.218:8181/iot/getonedaydata/BAY1/TotalPower/';
var batCurr = 'http://10.63.33.218:8181/iot/getonedaydata/BAY1/BatterCurrent/';

var disTempDiv = '#chiller_distemp';
var disPressDiv = '#chiller_dispress';
var totPwrDiv = '#ups_totpwr';
var batCurrDiv = '#ups_batcurr';

var render = function(restLink,container,type){
	
	
	$(container).highcharts('StockChart', {
		chart : {
			events : {
				load : function() {

					// set up the updating of the chart each second					
					var series = this.series[0];
					setInterval(function() {
						//var x = (new Date()).getTime(); // current time
						//y = Math.round(Math.random() * 100);
						//var x = (new Date()).getTime(); // current time
						//y = Math.round(Math.random() * 100);
						ajax_call(restLink,container);
						var chartLatestTime = series.xData[series.xData.length-1]
						console.log('current chart latest ='+chartLatestTime);
						console.log('ajax called latest ='+lastTime+', data set'+[set[0][0],set[0][1]]);
						set.forEach(function(d){
							if(d[0]>chartLatestTime)
								series.addPoint([d[0],d[1]], true, true);
								//console.log(d);
						})
						
					}, 15000);
					
				}
			},type : 'spline'
		},
		
		rangeSelector: {
			buttons: [{
				count: 2,
				type: 'hour',
				text: '2h'
			}, {
				count: 12,
				type: 'hour',
				text: '12h'
			}, {
				type: 'all',
				text: 'All'
			}],
			inputEnabled: false,
			selected: 0
		},
		
		title : {
			text : ''
		},
		
		exporting: {
			enabled: false
		},
		
		series : [{
			name : type,
			data : dataArray
/*			,fillColor : {
					linearGradient : {
						x1: 0, 
						y1: 0, 
						x2: 0, 
						y2: 1
					},
					stops : [
						[0, Highcharts.getOptions().colors[0]], 
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				}*/
				}]
	});
}			

var ajax_call = function(restLink,container) {
  
						$.ajax({
                              url: restLink+'1',
                              type: 'GET',
                              contentType: "application/json",
                              success: function(data) {

							  dataArray=[];set=[];
								data.forEach(function(d,i){
									d.metricvalue = +d.metricvalue;
									//console.log(d)
									dataArray.push([d.timestamp,d.metricvalue]);
									set.push([d.timestamp,d.metricvalue]);
								});
								
								//console.log(dataArray[0]);
								dataArray = dataArray.reverse();
								lastTime = set[0][0];
								//console.log(lastTime,dataArray[0][0],set[0][0]==dataArray[0][0]);
								if(runFlag==0){
									//console.log('Calling render() inside ajax function');
									//console.log(restLink.split("/")[6])
									render(restLink,container,restLink.split("/")[6]);
									runFlag=1;
								}
								
                              },
                              error: function(e) {
                                //called when there is an error
                                console.log(e.message);
                              }//,async: false
                        });

};

console.log(window.location.href.split("/")[5]);
if(window.location.href.split("/")[5]=="ups.html"){
	ajax_call(totPwr,totPwrDiv);
	ajax_call(batCurr,batCurrDiv);
}
else if (window.location.href.split("/")[5]=="chillr.html"){
	ajax_call(disTemp,disTempDiv);
	ajax_call(disPress,disPressDiv);

}				
	$('#a2').html('123456');
	$('#b2').html('123456');
	$('#b4').html('123456');
	$('#c2').html('123456');
	$('#c4').html('123456');
	$('#d2').html('123456');
	
});
