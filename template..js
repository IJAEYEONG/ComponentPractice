const tagComponent =(tagName,textNode)=>{
  return `<${tagName}>${textNode}</${tagName}>`
}

const container=()=>{
  return `
  ${tagComponent('header','헤더부분')}
  ${tagComponent('main','메인부분')}
  ${tagComponent('footer','푸터부분')}
  `;
}
let date = new Date(-24 * 3600 * 1000);
console.log(date);