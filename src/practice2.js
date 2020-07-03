const inject = function (items, sections) {
  let result = [];
  let resultIndex = 0;
  for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
    let sectionValue = sections[sectionIndex].content;
    let sectionIndexValue = sections[sectionIndex].index;
    for (let i = resultIndex; i < sectionIndexValue + sectionIndex; i++) {
      let temp = resultIndex;
      result[resultIndex++] = items[temp - sectionIndex];
    }
    result[resultIndex++] = sectionValue;
  }
  for (let lastIndex = resultIndex; lastIndex < sections.length + items.length; lastIndex++) {
    result[lastIndex] = items[lastIndex - sections.length];
  }
  return result;
};
export {inject};
