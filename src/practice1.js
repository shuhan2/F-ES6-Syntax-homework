const parseData = function ({data, column}) {
  let array = [];
  let length =  column.length
  let index  = 0;
  for (const info of data) {
    let obj = Object.create(null);
    for (const singleValue of info) {
      obj[column[index++%length].name] = singleValue;
    }

    array.push(obj);
  }
  return array;
};
export {parseData};

