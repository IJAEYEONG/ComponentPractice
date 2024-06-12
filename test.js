const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
}   
const container = () => {
  const today = new Date();
  console.log(today)
  const test = Date.now()
  console.log(test)
  const date = today.getDate();
  if (date !== 12) {
    return `
      ${tagComponent('header', '헤더부분')}
      ${tagComponent('footer', '푸터부분')}
    `;
  } else {
    return `
      ${tagComponent('header', '헤더부분')}
      ${tagComponent('div', `오늘은 ${today}이다.`)}
      ${tagComponent('footer', '푸터부분')}
    `;
  }
}
console.log(container());
