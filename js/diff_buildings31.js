$( function(){

		
	var chart,chart1;	
	var counts=0;
	//var date=[];
	var count=0;
            
            var state= sessionStorage.getItem('state');
 var city=sessionStorage.getItem('city');
 var buildingtype='RefBldg'+sessionStorage.getItem('building')+'New2004';
 
/*var url = 'http://liacm218:8181/BuildingCassandraRest/getallbyscbdaily/'+state+'/'+city+'/'+buildingtype;*/
		function requestData() {
		
    setInterval(function () {
    $.ajax({
        url: 'http://liacm218:8181/BuildingCassandraRest/getallbyscb/'+state+'/'+city+'/'+buildingtype,
        success: function(point) {
            console.log("enter=0;ed");
            var series = chart.series[0];
            shift = series.data.length > 10; // shift if the series is 
            
			for(var i = 1 ;i < 2; i++){
               // console.log("add point")
                setTimeout(function(){},2000);
				//var date1=point[count].timestamp;
                var date = (new Date()).getTime();
				
				if(count<point.length){
				console.log("plotted"+count);
				var val = point[count++].electricityFacility;
				var val2=point[counts++].fansElectricity
			  chart.series[0].addPoint([date,val],true,shift,false);
			  chart.series[1].addPoint([date,val2],true,shift,false);}
			  
			  //setTimeout(requestData, 3000); 
               
			}
            
            
            // call it again after one second
            //setTimeout(requestData, 3000);    
        },
        cache: false
    });
	}, 3000);
}
$(function () {
    $(document).ready(function () {
	 Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
	    chart = new Highcharts.Chart({
        

        //$('#container').highcharts({
            chart: {
			    renderTo: 'linegraph',
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: requestData
                }
            },
            title: {
                text:'series data'
            },
              plotOptions: {
            series: {
                animation: {
                    duration: 2000
                }
            }
        },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
				
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Actual Value',
                data: []
				
				 
            },
			{
            name: 'Predicted Value',
            type: 'spline',

            data:[]
            }]
        });
    });
});


})