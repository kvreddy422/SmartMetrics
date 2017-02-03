var i=0;

function myFun1(){
    console.log('inside js');
                     document.getElementById("demo1").innerHTML=data[max1].name;    
                     document.getElementById("demo2").innerHTML=data[max2].name;
                     document.getElementById("demo3").innerHTML=data[max3].name;    
                     document.getElementById("demo4").innerHTML=data[max4].name;
                     document.getElementById("demo5").innerHTML=data[max5].name;
                     // total power print
                     /*document.getElementById("demo11").innerHTML=x[max1];    
                     document.getElementById("demo21").innerHTML=x[max2];
                     document.getElementById("demo31").innerHTML=x[max3];
                     // percent power print
                     document.getElementById("demo12").innerHTML=max1P;    
                     document.getElementById("demo22").innerHTML=max2P;
                     document.getElementById("demo32").innerHTML=max3P;
                    */
        
    
                    
           }

function myFun10(){
    var chart12 = $('#container1').highcharts();// charts on the right made dynamic 
                        var seriesLength = chart12.series.length;
                        for(var i = seriesLength -1; i > -1; i--) {
                            chart12.series[i].remove();
                        }
                        this.disabled = true;
                            
                            chart12.addSeries({
                            type: 'bar',
                            name: 'Power in MWs',
                            data: [252,377],
                            color :'#7cb5ec',                    
                        });
}
function myFun2(){
    i++;
    if(i==10){
     var chart12 = $('#container1').highcharts();
                        var seriesLength = chart12.series.length;
                        for(var i = seriesLength -1; i > -1; i--) {
                            chart12.series[i].remove();
                        }
                        this.disabled = true;
                            
                            chart12.addSeries({
                            type: 'bar',
                            data: [3,4],
                            color :'#7cb5ec',                    
                        });
}
}
function myFun3(){
var flag1=0;
       
       $("#h11").click(function () {
    flag1=1;
});
           $("#h22").click(function () {
    flag1=2;
});
           $("#h33").click(function () {
    flag1=3;
});
           $("#h44").click(function () {
    flag1=4;
});
           $("#h55").click(function () {
    flag1=5;
});
       if(flag1==1){
       var e1 = document.getElementById('h11');
e1.onclick = sessionStorage.setItem('building', 'FullServiceRestaurant');
       }
       if(flag1==2){
       var e2 = document.getElementById('h22');
e2.onclick = sessionStorage.setItem('building', 'PrimarySchool');
       }
       if(flag1==3){
       var e3 = document.getElementById('h33');
e3.onclick = sessionStorage.setItem('building', 'Hospital');
       }
       if(flag1==4){
       var e4 = document.getElementById('h44');
e4.onclick = sessionStorage.setItem('building', 'LargeHospital');
       }
       if(flag1=5){
       var e5 = document.getElementById('h55');
e5.onclick = sessionStorage.setItem('building', 'LargeOffice');
       }     
}
function myFun5(){
     var i=0;
       $.each(data, function () {
      var x1=document.getElementsByClassName('highcharts-drilldown-point')[i];
        var att = document.createAttribute("id");
        att.value=this.properties['hc-key'];
        
        x1.setAttributeNode(att);
           i++;
});
        
}


