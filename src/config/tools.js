/**
 * Created by Ljili on 2020/3/5.
 */
const tools={
  clone:(obj)=>{
    let str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
      return;
    } else if (window.JSON) {
      str = JSON.stringify(obj); //序列化对象
      newobj = JSON.parse(str); //还原
    } else {//如果不支持以上方法
      for (let key in obj) {
        newobj[key] = typeof obj[key] === 'object' ? tools.clone(obj[key]) : obj[key];
      }
    }
    return newobj;
  },
  toChinesNum (num){
    let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
    let unit = ["", "十", "百", "千", "万"];
    num = parseInt(num);
    let getWan = (temp) => {
      let strArr = temp.toString().split("").reverse();
      let newNum = "";
      for (var i = 0; i < strArr.length; i++) {
        newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
      }
      return newNum;
    }
    let overWan = Math.floor(num / 10000);
    let noWan = num % 10000;
    if (noWan.toString().length < 4) noWan = "0" + noWan;
    return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
  },
  numToCny(n){       //数字金额大写转换
    var fraction = ['角', '分'];
    var digit = [
      '零', '壹', '贰', '叁', '肆',
      '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
      ['元', '万', '亿'],
      ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * (10 * Math.pow(10, i))) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
      var p = '';
      for (var j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p;
        n = Math.floor(n / 10);
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
  },
  /*
   * excel表导出
   * name  导出文件名称
   * data  数据列表数组
   * titles  每列标题，对应数组
   * cols  每列key值，对应数组
   * widths  每列宽度，对应数组
   * index  是否添加序号列
   * */
  exportExcel(name, data, titles, cols, widths, index) {
    let words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let obj = {}
    if (index) {
      titles.unshift('序号')
      cols.unshift('_index')
      widths.unshift(40)
    }

    titles.forEach((one, c) => {
      obj[words[c] + '1'] = {
        v: one,
        t: 's',
        s: {
          font: {
            sz: 18,                //18号字体
            bold: true             //加粗
          },
          alignment: {
            horizontal: 'center'   //水平居中对其
          }
        }
      }
    })

    data.forEach((item, index) => {
      cols.forEach((one, c) => {
        if (one == '_index') {
          obj[words[c] + (index + 2)] = {
            v: index + 1,
            t: 's'
          }
        } else {
          obj[words[c] + (index + 2)] = {
            v: item[one]||item[one]===0 ? item[one] : '',
            t: 's'
          }
        }
      })
    })
    obj['!ref'] = 'A1:Q1000'
    let ws = []
    widths.forEach(item => {
      ws.push({wpx: item})
    })
    obj['!cols'] = ws
    const workbook = {
      SheetNames: ['Sheet1'],
      Sheets: {
        Sheet1: obj
      }
    };
    var wbout = XLSX.write(workbook, {bookType: 'xlsx', bookSST: false, type: 'array'})
    try {
      FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), name + '.xlsx')
    } catch (e) {
      if (typeof console !== 'undefined') console.log(e, wbout)
    }
    return wbout
  }
}

export default tools