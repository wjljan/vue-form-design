export default {
	/**
	 * 添加组件
	 */

	//添加节标题预览组件
	ADD_TITLE_PREVIEW (state, id, type){
		state.widgetPreview.push({
			id : id,
			type : type
		});
	},
	//添加投票预览组件
	ADD_VOTE_PREVIEW (state, id, type){
		state.widgetPreview.push({
			id : id,
			type : type

		});
	},
	//删除投票编辑组件的某一项
	DELETE_VOTE_EDIT_ITEM (state, id, index){
		for (let value of state.widgetEditDataMap){
			if (value.id == id){
				value.items.splice(index, 1);
				break;
			}
		}
	},

	/**
	 * 公共
	 */

	//删除某个预览组件
	DELETE_WIDGET_PREVIEW (state, id){
		//删除预览组件对象
		for (let i = state.widgetPreview.length - 1;i >= 0;i --){
		    if (state.widgetPreview[i].id == id){
		    	state.widgetPreview.splice(i, 1);
		    	break;
		    }
		}
		//删除对应的组件对象数据
		for (let i = state.widgetEditDataMap.length - 1;i >= 0;i --){
		    if (state.widgetEditDataMap[i].id == id){
		    	state.widgetEditDataMap.splice(i, 1);
		    	break;
		    }
		}
		//如果要删除的组件就是当前展示的编辑组件就干掉它
		if (state.currentEditWidgetId == id){
			state.currentEditWidgetId = 0;
		}
	},

	//删除现有的编辑组件
	DELETE_WIDGET_EDIT (state, id){
		//如果点击的还是当前组件不做任何操作
		if (state.currentEditWidgetId == id) return;
		state.currentEditWidgetId = 0;
	},

	//增加某个编辑组件的数据(id => data)
	ADD_WIDGET_EDIT_DATA (state, data){
		state.widgetEditDataMap.push(data);
	},
	
	//改变某个编辑组件的某项数据
	CHANGE_WIDGET_EDIT_DATA (state, id, key, val, index, subkey){
		for (let value of state.widgetEditDataMap){
			if (value.id == id){
				if (!index){ //非数组属性
					if (typeof val != "object"){
						value[key] = val;
					} else {
						value[key].push(val);
					}
				} else {
					value[key][index][subkey] = val;
				}
				break;
			}
		}
	},

	//清空所有的组件
	RESET_ALL (state){
		state.currentEditWidgetId = 0;
		state.widgetPreview = [];
		state.widgetEditDataMap = [];
	},

	//改变显示的编辑组件
	CHANGE_WIDGET_EDIT (state, id){
		state.currentEditWidgetId = id;
	}
}