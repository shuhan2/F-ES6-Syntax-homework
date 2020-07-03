const inject = function (items, sections) {
  let array = [];
  let originalIndex = 0;
  for (let index = 0; index < sections.length; index++) {
    let value = sections[index].content;
    let sectionIndexValue = sections[index].index;
    for (let i = originalIndex; i < sectionIndexValue + index; i++) {
      let temp = originalIndex;
      array[originalIndex++] = items[temp - index];
    }
    array[originalIndex++] = value;
  }
  for (let lastIndex = originalIndex; lastIndex < sections.length + items.length; lastIndex++) {
    array[lastIndex] = items[lastIndex - sections.length];
  }
  return array;
};
export {inject};
