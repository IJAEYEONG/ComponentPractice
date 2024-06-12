const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
}

const container = () => {
  const today = new Date();
  const date = today.getDate();

  if (date === 11) {
    // A방식
    return `
      ${tagComponent('header', '헤더부분')}
      ${tagComponent('footer', '푸터부분')}
    `;
  } else {
    return `
      ${tagComponent('header', '헤더부분')}
      ${tagComponent('div', `나는지금 ${date}에 살고있나?`)}
      ${tagComponent('footer', '푸터부분')}aaaaa
    `;
  }
}

// 테스트
console.log(container());
