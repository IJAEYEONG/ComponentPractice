function Test(grade,name){
  this.grade=grade
  this.name=name;
}
Test.prototype.introduce = function() {
	console.log('학년: ' + this.grade + ' 이름: ' + this.name)
}
const gildong = new Test(3, '홍길동')
const cheolsoo = new Test(1, '김철수')
gildong.introduce()
cheolsoo.introduce()