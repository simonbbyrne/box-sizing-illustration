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
})();