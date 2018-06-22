var imgW = 50;
var imgH = 50;

var spaceAnim = $('#panda-animation');
var elQuantity = 30;             

var windowW = ($(window).width()) - imgW;
var windowH = $(window).height();

var arrayPos = [];

// $('button').on('click', function() {
//     elQuantity = $(document).find('input[name="quantity"]').val();            
//     for (let i = 0; i < elQuantity; i++) {
//         randomPos();                
//     }
//     console.log(arrayPos);
//     createEl();            
// });

$(document).ready(function(){

    for (let i = 0; i < elQuantity; i++) {
        randomPos();                
    }
    createEl();       

});

function createEl() {
    for (let i = 0; i < elQuantity; i++) {
        
        if (i % 2 == 0) {
            var elHeart = "<img src='serce.svg' alt='' class='el-panda-animation' style='left:"+arrayPos[i][0]+"px; bottom:"+arrayPos[i][1]+"px;'>";
            spaceAnim.append(elHeart);
        } else {
            var elHeartPanda = "<img src='serce_panda.svg' alt='' class='el-panda-animation' style='left:"+arrayPos[i][0]+"px; bottom:"+arrayPos[i][1]+"px;'>";
            spaceAnim.append(elHeartPanda);
        }

    }
    startAnim();
}

function startAnim() {
    console.log('startAnim');

    $(spaceAnim).find('img.el-panda-animation').each(function (id) {
                        
        var delay = 100 * parseInt(id);                                          

        $(this).delay(delay).animate({
            opacity: 0,
            bottom: windowH,
        }, randomTime(), function() {
            // console.log('koniec');                    
        });              
        
    });

}

function randomPos() {

    var l = Math.floor(Math.random() * windowW);
    var b = -(Math.floor(Math.random() * 200) + imgH);

    if (arrayPos.length != 0) {
        for (let i = 0; i < arrayPos.length; i++) {
            if (arrayPos[i][0] != l) {
                setArrayPos(l,b);
                break;
            } else {
                randomPos();
            }
        }               
    } else {
        setArrayPos(l,b);
    }
}

function setArrayPos(left, bottom) {
    arrayPos.push([left,bottom]);
}

function randomTime() {
    var t = Math.floor(Math.random() * 2000) + 2000;
    return t;
}