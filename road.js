window.onload = function() {
	
	console.log("콘솔확인");
    handleRefresh1();
}
function handleRefresh1() {
	console.log("here111");
	
	var url = "http://openapi.seoul.go.kr:8088/7a49714b4c67686536307854657056/json/mgisdulegil/1/14/";
	$.getJSON(url, updateRoad);
	
	
	var url1 = "http://openAPI.seoul.go.kr:8088/7a49714b4c67686536307854657056/json/GeoInfoEcologyPark/1/3";
	$.getJSON(url1, updatePark);
	
}	
/*var url = "http://openapi.seoul.go.kr:8088/644d42625173756e35354e6d636d63/json/CardSubwayStatsNew/1/100/20180101/";
$.getJSON(url, updateTraffic);	*/

function updateRoad(roads) {
	var roadDiv = document.getElementById("roads");
	roads = roads.mgisdulegil.row;
	
	
	for (var i = 0; i < roads.length; i++) {
		
		
		console.log(roads.length);
		
		var road = roads[i];
		var div = document.createElement("div");
		div.setAttribute("class", "road");
/*		1   TITLE	강좌명
		2	EDU_PERIOD	교육기간
		3	EDU_PLACE	교육장소
		4	EDU_TARGET	교육대상
		5	APPLY_WAY	접수방법
		6	EDU_PAY	수강료
		7	APPLY_PERIOD	접수기간*/
		div.innerHTML = "<div> 둘레길 이름:"+ road.COT_CONTS_NAME + "<br>"
						+ "둘레길 주소"+road.COT_ADDR_FULL_OLD + "<br>"
						+ "COT_VALUE_01"+road.COT_VALUE_01+"<br> </div> <br>";
		
		if (roadDiv.childElementCount == 0) {
			roadDiv.appendChild(div);
		}else {
			roadDiv.insertBefore(div, roadDiv.firstChild);
		}
	}

}



function updatePark(parks) {
	var parkDiv = document.getElementById("parks");
	parks = parks.GeoInfoEcologyPark.row;
	
	
	for (var i = 0; i < parks.length; i++) {
		
		
		console.log(parks.length);
		
		var park = parks[i];
		var div1 = document.createElement("div1");
		div1.setAttribute("class", "park");
/*		1   TITLE	강좌명
		2	EDU_PERIOD	교육기간
		3	EDU_PLACE	교육장소
		4	EDU_TARGET	교육대상
		5	APPLY_WAY	접수방법
		6	EDU_PAY	수강료
		7	APPLY_PERIOD	접수기간*/
		div1.innerHTML = "<div> 둘레길 이름:"+ park.ECONAME + "<br>"
						+ "둘레길 주소"+park.ECONAME + "<br>"
						+ "COT_VALUE_01"+park.ECONAME+"<br> </div> <br>";
		
		if (parkDiv.childElementCount == 0) {
			parkDiv.appendChild(div1);
		}else {
			parkDiv.insertBefore(div1, parkDiv.firstChild);
		}
	}

}



