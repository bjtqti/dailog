
function Busy(message){
	message = message || '';
	this.init(message);
}

Busy.prototype.init = function(message){
	this.message = message;
	 
    //创建全屏遮罩
    var mask = document.createElement('div');
    mask.className = 's-fullscreen-mask';

	//忙碌光标主体
	var icon = this.busyIcon()+this.mesgbox();

	mask.innerHTML = icon;
    
    document.body.appendChild(mask);
  	//缓存节点
    this.busyLayer = mask;
}

/**
 * 忙碌光标体
 */
Busy.prototype.busyIcon = function(){
    
    var span = '<div class="s-busy-wrap">';

    for (var i = 0; i < 12; i++) {
        span += '<span class="icon-' + i + '"></span>';
    }

    span += '</div>';

    return span;
}

/**
 * 文字提示信息
 */
Busy.prototype.mesgbox = function(){
    var msgbox = '<div class="s-busy-text">'+this.message+'</div>';
    return msgbox;
}