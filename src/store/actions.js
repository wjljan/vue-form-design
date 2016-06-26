/**
 * 添加组件
 */

//添加节标题预览组件
export const addTitlePreview = ({dispatch}, id, type) => {
	dispatch("ADD_TITLE_PREVIEW", id, type)
}

//添加投票预览组件
export const addVotePreview = ({dispatch}, id, type) => {
	dispatch("ADD_VOTE_PREVIEW", id, type)
}

//删除投票编辑组件的某一项
export const delteVoteEditItem = ({dispatch}, id, index) => {
	dispatch("DELETE_VOTE_EDIT_ITEM", id, index)
}


/**
 * 公共
 */

//删除某个预览组件
export const deleteWidgetPreview = ({dispatch}, id) => {
	dispatch("DELETE_WIDGET_PREVIEW", id)
}

//增加某个编辑组件的数据(通过组件id关联对应data)
export const addWidgetEditData = ({dispatch}, id, data) => {
	dispatch("ADD_WIDGET_EDIT_DATA", id, data)
}

//改变某个编辑组件的数据
export const changeWidgetEditData = ({dispatch}, id, key, val, index, subkey) => {
	dispatch("CHANGE_WIDGET_EDIT_DATA", id, key, val, index, subkey);
}

//清空所有的组件
export const resetAll = ({dispatch}) => {
	dispatch("RESET_ALL");
}

//改变当前显示的编辑组件
export const changeWidgetEdit = ({dispatch}, id) => {
	dispatch("DELETE_WIDGET_EDIT", id)
	setTimeout(() => {
		dispatch("CHANGE_WIDGET_EDIT", id)
	}, 16);
}