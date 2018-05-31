$(document).ready(function(){
	

		
	    var url="http://openapi.seoul.go.kr:8088/7a49714b4c67686536307854657056/json/mgisdulegil/1/14";

	    $.getJSON(url, function(data){
	    	
	    	
	    	var html = [];
	    	
	    	$.each(data, function(i,item){
	    		
	    		html.push('<div >');
	    		html.push('<h3 >' + item.COT_CONTS_NAME + '</h3>');
	    		html.push('<div >' + item.COT_ADDR_FULL_OLD + '</div>'); 
	    		html.push('<div >' + item.COT_VALUE_01 + '</div>');
	    		html.push('<div >' +  item.COT_VALUE_02  + '</div>');
	    		html.push('</div>'); 
	    		
	    	});
	    	
	    	
	    	console.log(html);
	    	
	    	
	    	$('#road').html(html.join(''));
	    	
	    	
	    });
	
	
});
    
	


