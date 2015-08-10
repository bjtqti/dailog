
/**
 * 忙碌光标
 * @param {string} message 提示信息
 * @return this
 */
function Busy(message){
    this.message = message;
	this.init(message);
}


Busy.prototype.init = function(){
	 
    //创建全屏遮罩
    var mask = document.createElement('div');
    mask.className = 's-fullscreen-mask';

	//忙碌光标主体
	var icon = this.busyIcon()+this.mesgbox();

	mask.innerHTML = icon;
    
    //缓存节点
    this.busyLayer = mask;

    document.body.appendChild(mask);
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
    var text = this.message ||'';
    return '<div class="s-busy-text">'+text+'</div>';
}

/**
 * hide the busyicon
 */
Busy.prototype.hide = function(){
    this.busyLayer.style.display = 'none';
}

/**
 * show the busyicon
 */
Busy.prototype.show = function(){
    this.busyLayer.style.display = 'block';
}

/**
 * auto fixed the busyicon size
 */
Busy.prototype.autofixed = function(){
    var avaliWidth = Math.min(window.innerWidth,window.innerHeight);
    var wralpWidth = Math.round(avaliWidth *.3);
    var spanWidth = wralpWidth * 0.1;
    var spanHeight = spanWidth * 2;
    var mgtop = wralpWidth * 0.5;
    var wrap = this.busyLayer.children[0];
    //调整光标外围阴影大小
    wrap.style.cssText = 'width:'+wralpWidth+'px;height:'+wralpWidth+'px;margin:-'+mgtop+'px auto auto -'+mgtop+'px';
    var smgtop = spanHeight * 0.5;
    var smgleft = spanWidth * 0.5;
    //调整叶片大小
    var css = 'width:'+spanWidth+'px;height:'+spanHeight+'px;margin:-'+smgtop+'px auto auto -'+smgleft+'px';
    for(var i = 0;i<12;i++){
        wrap.children[i].style.cssText = css;
    }
    //调整文字高度
    this.busyLayer.children[1].style.marginTop = mgtop + 'px';
    return this;
}