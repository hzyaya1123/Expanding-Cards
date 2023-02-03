var lis = document.querySelectorAll('li');
var spans = document.querySelectorAll('span');
// console.log(lis);
for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.width = '60px';
            spans[i].style.display = 'none';
        }
        this.style.width = '800px';
        this.firstElementChild.style.display = 'block';
        this.style.transition = 'width 2s';
    }
}