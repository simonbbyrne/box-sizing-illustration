(function() {
    var border = document.querySelector('.border'),
        padding = document.querySelector('.padding'),
        content = document.querySelector('.content');

    content.classList.add('selected');

    document.querySelector('.box-sizing-list').addEventListener('click', function(event) {

        var target = event.target || event.srcElement;

        padding.classList.remove('selected');
        border.classList.remove('selected');
        content.classList.remove('selected');

        switch (target.name) {
            case 'border-box':
                border.classList.add('selected');
                break;
            case 'padding-box':
                padding.classList.add('selected');
                break;
            case 'content-box':
                content.classList.add('selected');
                break;
            default:
                return;
        }

        return false;
    });

    var box1 = document.querySelector('.box1'),
        result1 = document.querySelector('.result1'),
        box2 = document.querySelector('.box2'),
        result2 = document.querySelector('.result2');

    result1.innerHTML = 'width: ' + box1.offsetWidth + ' height: ' + box1.offsetHeight;
    result2.innerHTML = 'width: ' + box2.offsetWidth + ' height: ' + box2.offsetHeight;
})();