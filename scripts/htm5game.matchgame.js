//游戏脚本命名空间
//对象
var neusoft={};
neusoft.matchingGame={};
neusoft.matchingGame.cardWidth=80;
neusoft.matchingGame.cardHeight=120;
neusoft.matchingGame.deck=
    [
        "cardAK","cardAK",
        "cardAQ","cardAQ",
        "cardAJ","cardAJ",
        "cardBK","cardBK",
        "cardBQ","cardBQ",
        "cardBJ","cardBJ"
    ]
//随机排序函数，返回-1或1
function shuffle()
{
    //Math.random能返回0~1之间的数
    return Math.random()>0.5 ? -1 : 1
}

  //翻牌功能的实现
function selectCard() {
    //翻出两张牌后退出翻牌
    if ($(".card-flipped").length >= 2)
    {
        return;
    }
    //alert($(this).data("pattern"));
    $(this).addClass("card-flipped");
    //如果翻了两张牌 检测是否一样
    var $fcards = $(".card-flipped");
    if ($fcards.length == 2)
    {
        //checkPattern($fcards);
        //如果没有延迟会在 还没有翻过来的时候就结束
        setTimeout(function()
        {
            checkPattern($fcards);
        },700);
    }
}
//检测两张牌 是否一样s
function checkPattern(cards)
{
    var pattern1 = $(cards[0]).data("pattern");
    var pattern2 = $(cards[1]).data("pattern");
    alert(pattern1);
    alert(pattern2);
    if (pattern1 != pattern2)
    {
        $(cards).removeClass("card-flipped");
    }
    else
    {
        $(cards).addClass("card-removed").removeClass("card-flipped");
    }
    //优化
    $(cards).removeClass("card-flipped");
    if (pattern1 == pattern2)
    {
        $(cards).addClass("card-removed")
        .bind("webkitTransitionEnd",function()
        {
            $(this).remove();
        });
    }
}