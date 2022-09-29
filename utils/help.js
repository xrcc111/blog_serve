// 把树状转换成tree
function convertTree (array) {
  const result = []
  const map = array.reduce( (pre,cru) => {
    // 把数组变成对象
    pre[cru.id] = cru
    return pre
  }, {})
  for (const iterator of array) {
    // 找到parent_id为0的数据放进结果集
    if(iterator.parent_id === 0) {
      result.push(iterator)
      continue
    }
    // 处理parent_id为非零的结果集
    if(iterator.parent_id in map) {
      const parent = map[iterator.parent_id]
      parent.children = parent.children || []
      parent.children.push(iterator)
    }
  }
  return result
}

//富文本转义
function escapeLongText(str) {
  return str.replace(new RegExp('"', 'g'),"'/");
}

// 富文本反转义
function unEscapeLongText(str) {
  return str.replace(new RegExp("'/", 'g'), '"');
}

module.exports = {
  convertTree,
  escapeLongText,
  unEscapeLongText
}