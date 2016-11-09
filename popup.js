//document.addEventListener('DOMContentLoaded', function () {
//	alert('hey');
//	});
chrome.runtime.sendMessage({data:"abcd"},function(response){
	
			});
chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){

console.log(response);
	//	str = JSON.stringify(message.data);
	
//alert(str);
	var l=response.data.count;	
	console.log(l);
	for(i=0;i<l;i++)
	{
	$('#d').append("<ul> <li>" + response.data.text[i].message + '</li> </ul>');
	}
});