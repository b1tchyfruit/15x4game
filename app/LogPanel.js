LogPanel = {
	day: 0,
	messages: [],
	clear: function(){this.messages = []},
	hide: function(){
		$('#main_content').toggleClass('main_content80 main_content100');
	}
};

function LogMessage(filter, text) {
	this.filter = filter;
	this.text = text;
};

LogPanel.filters = ["Badge", "Not enough", "Paid", "Reward"];

var check_html ="";
LogPanel.filters.forEach(function (filter) {
	check_html += '<input type="checkbox" name="log_filter" checked="checked" value="'+filter+'">'+filter;
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("log_panel_filters").insertAdjacentHTML('beforeend', check_html);
});

function FilterLogs(){
	var check = document.getElementsByName("log_filter");
	check.forEach(function(item){
		if(item.checked==true){
			LogPanel.messages.forEach(function(logMessage){
				if(logMessage.text.includes(item.value)){
					logMessage.filter = true;
				}
			});
		}else{
			LogPanel.messages.forEach(function(logMessage){
				if(logMessage.text.includes(item.value)){
					logMessage.filter = false;
				}
			});
		}
	});
};