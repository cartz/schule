(function ($) {
    var canvas = document.getElementById('spielfeld'),
        spielfeld = canvas.getContext('2d'),
        height, width, pixelsize, rate,
        dir, newdir, snake = [], food = [], score,
        gstarted = false, gpaused = false;
    
    function setup(h, w, ps, r) {
        height = h;
        width = w;
        pixelsize = ps;
        rate = r;
        canvas.height = h*ps;
        canvas.width = w*ps;
        $(document).keydown(function (e) {
            switch(e.which) {
                case 38:
                    if(dir != 2) {
                        newdir = 0;
                    }
                    break;
                case 39:
                    if(dir != 3) {
                        newdir = 1;
                    }
                    break;
                case 40:
                    if(dir != 0) {
                        newdir = 2;
                    }
                    break;
                case 37:
                    if(dir != 1) {
                        newdir = 3;
                    }
                    break;
                case 32:
                    if(!gstarted) {
                        startGame();
                    }
                    else {
                        togglePause();
                    }
                    break;
            }
        });
        showIntro();
    }
    
    function showIntro() {
        spielfeld.fillStyle = '#000';
        spielfeld.fillRect(0, 0, width*pixelsize, height*pixelsize);
        spielfeld.fillStyle = '#fff';
        spielfeld.font = '30px sans-serif';
        spielfeld.textAlign = 'center';
        spielfeld.fillText('Deine Überschrift', width/2*pixelsize, height/4*pixelsize, width*pixelsize);
        spielfeld.font = '12px sans-serif';
        spielfeld.fillText('Hinweise zur Steuerung und den Regeln hier eintragen', width/2*pixelsize, height/2*pixelsize);
        spielfeld.fillText('Leertaste = Start/Pause.', width/2*pixelsize, height/1.5*pixelsize); 
    } 
    
    function startGame() {
        var x = Math.floor(width/2), y = Math.floor(height/2);
        genFood();
        snake = [
            [x, y],
            [--x, y],
            [--x, y],
            [--x, y]
        ];
        dir = 1;
        newdir = 1;
        score = 0;
        gstarted = true;
        gpaused = false;
        frame();
    }
    
    function endGame() {
        gstarted = false;
        spielfeld.fillStyle = 'rgba(0,0,0,0.8)';
        spielfeld.fillRect(0, 0, width*pixelsize, height*pixelsize);
        spielfeld.fillStyle = '#f00';
        spielfeld.font = '20px sans-serif';
        spielfeld.textAlign = 'center';
        spielfeld.fillText('Spielende', width/2*pixelsize, height/2*pixelsize);
        spielfeld.fillStyle = '#fff';
        spielfeld.font = '12px sans-serif';
        spielfeld.fillText('Punktzahl: ' + score, width/2*pixelsize, height/1.5*pixelsize);
    }
    
    function togglePause() {
        if(!gpaused) {
            gpaused = true;
            spielfeld.fillStyle = '#fff';
            spielfeld.font = '20px sans-serif';
            spielfeld.textAlign = 'center';
            spielfeld.fillText('Spielpause', width/2*pixelsize, height/2*pixelsize);
        }
        else {
            gpaused = false;
            frame();
        }
    }
    
    
    
    function genFood() {
        var x, y;
        do {
            x = Math.floor(Math.random()*(width-1));
            y = Math.floor(Math.random()*(height-1));
        } while(testCollision(x, y));
        food = [x, y];
    }
    
    function drawFood() {
        spielfeld.beginPath();
        spielfeld.arc((food[0]*pixelsize)+pixelsize/2, (food[1]*pixelsize)+pixelsize/2, pixelsize/2, 0, Math.PI*2, false);
        spielfeld.fill();
    }
    
    function drawSnake() {
        var i, l, x, y;
        for(i = 0, l = snake.length; i < l; i++) {
            x = snake[i][0];
            y = snake[i][1];
            spielfeld.fillRect(x*pixelsize, y*pixelsize, pixelsize, pixelsize);
        }
    }
    
    function testCollision(x, y) {
        var i, l;
        if(x < 0 || x > width-1) {
            return true;
        }
        if(y < 0 || y > height-1) {
            return true;
        }
        for(i = 0, l = snake.length; i < l; i++) {
            if(x == snake[i][0] && y == snake[i][1]) {
                return true;
            }
        }
        return false;
    }
  
    function frame() {
        if(!gstarted || gpaused) {
            return;
        }
        var x = snake[0][0], y = snake[0][1];
        switch(newdir) {
            case 0:
                y--;
                break;
            case 1:
                x++;
                break;
            case 2:
                y++;
                break;
            case 3:
                x--;
                break;
        }
        if(testCollision(x, y)) {
            endGame();
            return;
        }
        snake.unshift([x, y]);
        if(x == food[0] && y == food[1]) {
            score++;
            genFood();
        }
        else {
            snake.pop();
        }
        dir = newdir;
        spielfeld.fillStyle = '#000';
        spielfeld.fillRect(0, 0, width*pixelsize, height*pixelsize);
        spielfeld.fillStyle = '#fff';
        drawFood();
        drawSnake();
        
        setTimeout(frame, rate);
    }

    setup(50, 100, 10, 100);
    
}(jQuery)); 