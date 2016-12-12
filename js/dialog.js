/**
 * 对话框
 * @param message 消息内容
 * @param [options] 可选的配置信息
 */

function Dialog(message,options){
	var _default = {
	    confirmText:"确定",
	    cancelText:"取消",
	    onlyConfirm:false,
	    onConfrim:function(){}
	};
	options = options || {};
	for(var i in _default){
		if(options[i]!== undefined){
			this[i] = options[i];
		}else{
			this[i] = _default[i];
		}
	}
	this.createNode(message);
}

Dialog.prototype.handleEvent = function(e){
	var target = e.target;
	var button = target.innerHTML;
	var event = target.getAttribute('data-event');
	e.preventDefault();

	if(event ==='n'){
		this.onClose();
		return;
	}
	if(event==='y'){
		this.onConfrim();
		this.onClose();
		return false;
	}
}

Dialog.prototype.createNode = function(message){
	var container = document.createElement('div');
	container.setAttribute('class','dialog-container');
	var html = '<div class="dialog">'+
					'<div class="dialog-head"><i data-event="n">x</i></div>'+
					'<div class="dialog-content">'+message+'</div>'+
					'<div class="dialog-btns">'+
						(this.onlyConfirm ? '<button data-event="y" class="only">'+this.confirmText+'</button>':
						'<button data-event="n" >'+this.cancelText+'</button>'+
						'<button data-event="y" >'+this.confirmText+'</button>')+
					'</div>'+
				'</div>';
	container.innerHTML = html;
	container.addEventListener('click',this,false);
	this.container = container;
	document.body.appendChild(container);
	setTimeout(function(){
		container.classList.add('active');
	},50)
}

Dialog.prototype.onClose = function(e){
	this.container.removeEventListener('click',this,false);
	document.body.removeChild(this.container);
}


//-----------
Dialog.tips = function(message,sec){
	var container = document.createElement('div');
	container.setAttribute('class','tips-wrap');
	container.innerHTML = '<span class="text">'+message+'</span>';
	document.body.appendChild(container);
	setTimeout(function(){
		document.body.removeChild(container);
	},sec||3000);
}
