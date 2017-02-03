$(function() {
var set=[],dataArray=[],runFlag=0,lastTime=0,xhr,selTime,selAttr;
//Chiller:
var disTemp = 'http://10.63.33.218:8181/iot/getonedaydata/BAY1/DischargeTemp/';
var disPress = 'http://10.63.33.218:8181/iot/getonedaydata/BAY1/DischargePressure/';

//UPS
var totPwr = 'http://10.63.33.218:8181/iot/getonedaydata/BAY1/TotalPower/';
var batCurr = 'http://10.63.33.218:8181/iot/getonedaydata/BAY1/BatteryCurrent/';

var chillerChartDiv = '#chiller';
//var disPressDiv = '#chiller_dispress';
var upsChartDiv = '#ups';
//var batCurrDiv = '#ups_batcurr';

var render = function(restLink,container,type,time){
	
	var buttonOptions = [];
	
	if(time=='1')
		buttonOptions =[{count: 2,type: 'hour',text: '2h'}, 
						{count: 4,type: 'hour',text: '4h'}, 
						{count: 8,type: 'hour',text: '8h'}, 
						{count: 12,type: 'hour',text: '12h'}, 
						{count: 16,type: 'hour',text: '16h'}, 
						{type: 'all',text: 'All'}];
	else if(time=='15')
		buttonOptions =[{count: 12,type: 'hour',text: '12h'}, 
						{count: 1,type: 'day',text: '1 Day'}, 
						{count: 4,type: 'day',text: '4 Days'}, 
						{count: 8,type: 'day',text: '8 Days'}, 
						{count: 10,type: 'day',text: '10 Days'}, 
						{type: 'all',text: 'All'}];
	else if(time=='30')
		buttonOptions =[{count: 1,type: 'day',text: '1 Day'}, 
						{count: 5,type: 'day',text: '5 Days'}, 
						{count: 10,type: 'day',text: '10 Days'}, 
						{count: 15,type: 'day',text: '15 Days'}, 
						{count: 20,type: 'day',text: '20 Days'}, 
						{type: 'all',text: 'All'}];
		
	
	
	
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
						//console.log(series.xData[series.xData.length-1]);
						var chartLatestTime = series.xData[series.xData.length-1];
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
			buttons: /*[{
				count: 2,
				type: 'hour',
				text: '2h'
			}, {
				count: 4,
				type: 'hour',
				text: '4h'
			}, {
				count: 8,
				type: 'hour',
				text: '8h'
			}, {
				count: 12,
				type: 'hour',
				text: '12h'
			}, {
				count: 16,
				type: 'hour',
				text: '16h'
			}, {
				type: 'all',
				text: 'All'
			}]*/
			buttonOptions,
			buttonSpacing:10,
			buttonTheme: { // styles for the buttons
 				width: 44,
            },
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
				}]
	});
}			

var ajax_call = function(restLink,container,time) {
  
						xhr = $.ajax({
                              url: restLink+time,
                              type: 'GET',
                              contentType: "application/json",
                              success: function(data) {
								  
								console.log(data);
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
									render(restLink,container,restLink.split("/")[6],time);
									runFlag=1;
								}
								
                              },
                              error: function(e) {
                                //called when there is an error
                                console.log(e.message);
                              },async: false
                        });

};

//console.log(window.location.href.split("/")[5]);
if(window.location.href.split("/")[5]=="ups.html"){
	selTime='1';selAttr=totPwr;
	ajax_call(selAttr,upsChartDiv,selTime);
}
else if (window.location.href.split("/")[5]=="chillr.html"){
	selTime='1';selAttr=disTemp;
	ajax_call(selAttr,chillerChartDiv,selTime);

}				

//Changing attribute 
	$('#tot_pwr').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selAttr=totPwr;
		$(upsChartDiv).empty();
		$('#ups_lbl').text('Total Power');
		$('#ups_lbl').append('<span class="caret"></span>');
		ajax_call(selAttr,upsChartDiv,selTime);
	});
	$('#bat_curr').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selAttr=batCurr;
		$(upsChartDiv).empty();
		$('#ups_lbl').text('Battery Current');
		$('#ups_lbl').append('<span class="caret"></span>');
		ajax_call(selAttr,upsChartDiv,selTime);
	});
	$('#dis_temp').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selAttr=disTemp;
		$(chillerChartDiv).empty();
		$('#chill_lbl').text('Discharge Temperature');
		$('#chill_lbl').append('<span class="caret"></span>');
		ajax_call(selAttr,chillerChartDiv,selTime);
	});
	$('#dis_press').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selAttr=disPress;
		$(chillerChartDiv).empty();
		$('#chill_lbl').text('Discharge Pressure');
		$('#chill_lbl').append('<span class="caret"></span>');
		ajax_call(selAttr,chillerChartDiv,selTime);
	});
//Changing time frame 
	$('#chill_one').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selTime='1';
		$(chillerChartDiv).empty();
		$('#chill_time').text('Last 24h');
		$('#chill_time').append('<span class="caret"></span>');
		ajax_call(selAttr,chillerChartDiv,selTime);
	});
	$('#chill_15').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selTime='15';
		$(chillerChartDiv).empty();
		$('#chill_time').text('15 Days');
		$('#chill_time').append('<span class="caret"></span>');
		ajax_call(selAttr,chillerChartDiv,selTime);
	});
	$('#chill_30').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selTime='30';
		$(chillerChartDiv).empty();
		$('#chill_time').text('One Month');
		$('#chill_time').append('<span class="caret"></span>');
		ajax_call(selAttr,chillerChartDiv,selTime);
	});

	$('#ups_one').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selTime='1';
		$(upsChartDiv).empty();
		$('#ups_time').text('Last 24h');
		$('#ups_time').append('<span class="caret"></span>');
		ajax_call(selAttr,upsChartDiv,selTime);
	});
	$('#ups_15').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selTime='15';
		$(upsChartDiv).empty();
		$('#ups_time').text('15 Days');
		$('#ups_time').append('<span class="caret"></span>');
		ajax_call(selAttr,upsChartDiv,selTime);
	});
	$('#ups_30').click(function() {
		xhr.abort();
		xhr=[];set=[];dataArray=[];runFlag=0;lastTime=0;selTime='30';
		$(upsChartDiv).empty();
		$('#ups_time').text('One Month');
		$('#ups_time').append('<span class="caret"></span>');
		ajax_call(selAttr,upsChartDiv,selTime);
	});
	
	$('#a2').html('123456');
	$('#b2').html('123456');
	$('#b4').html('123456');
	$('#c2').html('123456');
	$('#c4').html('123456');
	$('#d2').html('123456');
	
});
