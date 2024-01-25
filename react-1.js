/**
 * 에디터에 드디어 내장된 JSDoc 주석 작성 방식으로 아래의 함수를 설명한다
 * 
 * @param {string} elementNode
 * @param {object} attributes
 * @param {array} children
 * @returns {string}
 * 
 * @example
 * component (
 *  'div',
 *  {style:'color:blue;'},
 *  [component('h1', {}, ['this is page1'])]
 * );
 */

function component(elementNode, attributes, children) {
  // HTML Element 문자열로 '조립(assemble)' 하는 패턴
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    elementStr += ` ${key}="${attributes[key]}"`; // 공백 추가
  }
  elementStr += '>';

  if (children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }

  elementStr += `</${elementNode}>`; // 열린 태그와 닫힌 태그의 elementNode가 동일해야 함
  return elementStr;
}

// 문자열로 잘 작동하는지 테스트
let test = component('div', { style: 'color:blue;' }, [component('h1', {}, ['this is page1'])]);
console.log(test);
