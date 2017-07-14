window.onload = function (w, h) {
    var p1map = ['ooosooooss',
            'ososoooooo',
            'ooosoooooo',
            'ooosooosoo',
            'ooooooosoo',
            'osoosoosoo',
            'osoooooooo',
            'ososoooooo',
            'ooooossooo',
            'ssooooooso'
        ],
        p2map = ['ooosooooss',
            'ososoooooo',
            'ooosoooooo',
            'ooosooosoo',
            'ooooooosoo',
            'osoosoosoo',
            'osoooooooo',
            'ososoooooo',
            'ooooossooo',
            'ssooooooso'
        ],
        p1 = document.getElementById('battle-field-1'),
        p2 = document.getElementById('battle-field-2'),
        outputDiv = document.getElementById("output"),
        button = document.getElementById('start');
    // Poga , sāk jaunu spēli
    button.onclick = function () {
        button.disabled = true;
        for (i = 0; i < w; i++)
            for (j = 0; j < h; j++) {
                div1 = document.createElement('div');
                div1.id = i + '_' + j;
                div1.className = p1map[i][j];
                if (p1map[i][j] == 's') {
                    div1.className = 's';
                } else {
                    div1.className = 'w';
                }
                p1.appendChild(div1);
                div2 = document.createElement('div');
                div2.className = p2map[i][j] == 's' ? 's' : 'w';
                div2.onclick = function () {
                    if (fire(this)) backfire();
                };
                p2.appendChild(div2);
            }
    };

    function fire(el) {
        if (el.className == 'd' || el.className == 'm') return false;
        el.className = el.className == 's' ? 'd' : 'm';
        if (document.querySelectorAll('#battle-field-2 .s').length === 0) {
            alert(" Hip, Hip uzvara! :) ");
            return false;
        }
        if (el.className == 'm') return true;
    }

    function backfire() {
        for (i = w * h; i > 0; i--) {
            var targets = document.querySelectorAll('#battle-field-1 .s, #battle-field-1 .w');
            if (targets.length === 0 || fire(targets[Math.floor(Math.random() * targets.length)])) break;
        }
        if (document.querySelectorAll('#battle-field-1 .s').length === 0) alert('You have lost! Refresh the page to start new game.');
    }
}(10, 10);
