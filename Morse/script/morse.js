function morus(){
    let decode_en = {
        "･ｰ":"A",
        "ｰ･･･":"B",
        "ｰ･ｰ･":"C",
        "ｰ･･":"D",
        "･":"E",
        "･･ｰ･":"F",
        "ｰｰ･":"G",
        "････":"H",
        "･･":"I",
        "･ｰｰｰ":"J",
        "ｰ･ｰ":"K",
        "･ｰ･･":"L",
        "ｰｰ":"M",
        "ｰ･":"N",
        "ｰｰｰ":"O",
        "･ｰｰ･":"P",
        "ｰｰ･ｰ":"Q",
        "･ｰ･":"R",
        "･･･":"S",
        "ｰ":"T",
        "･･ｰ":"U",
        "･･･ｰ":"V",
        "･ｰｰ":"W",
        "ｰ･･ｰ":"X",
        "ｰ･ｰｰ":"Y",
        "ｰｰ･･":"Z",

        "･ｰｰｰｰ":"ｰ",
        "･･ｰｰｰ":"2",
        "･･･ｰｰ":"3",
        "････ｰ":"4",
        "･････":"5",
        "ｰ････":"6",
        "ｰｰ･･･":"7",
        "ｰｰｰ･･":"8",
        "ｰｰｰｰ･":"9",
        "ｰｰｰｰｰ":"･",

        "･ｰ･ｰ･ｰ":".",
        "ｰｰ･･ｰｰ":",",
        "ｰｰｰ･･･":":",
        "･･ｰｰ･･":"?",
        "･･ｰｰ･ｰ":"_",
        "･ｰ･ｰ･":"+",
        "ｰ････ｰ":"-",
        "･･････":"^",
        "ｰ･･ｰ･":"/",
        "･ｰｰ･ｰ･":"@",
        "ｰ･ｰｰ･":"(",
        "ｰ･ｰｰ･ｰ":")",
        "･ｰ･･ｰ･":"\"",
        "･ｰｰｰｰ･":"\'"
    }
    //マウスクリックの取得 変数 clickに格納
    key = document.getElementById("morus_input");
    let click = false;
    function on_click(){
        click = true;
    }
    function out_click(){
        click = false;
    }
    key.setAttribute("tabindex",0);
    key.addEventListener("mousedown",on_click,false);
    key.addEventListener("mouseup",out_click,false);
    //マウスクリックの押下時間から長短の判別
    let long = 0; //コード長さ判定;
    let interval = 0; //コード間隔;
    let code = "";    //コード
    let text = "";    //コード翻訳後
    function get_code(){
        if(click == true){
            long+=1;
            interval = 0;
        }else{
            if(long != 0){
                if(long < 10){code = code + "･";}
                else{code = code + "ｰ";}
                document.getElementById("morus_status").innerHTML = code;
            }
            long = 0;
            interval += 1;
            if(interval > 60 &&code != ""){
                console.log(code);
                if(decode_en[code] != undefined){
                    text = text + decode_en[code];
                }
                code = "";
                document.getElementById("morus_output").innerHTML = text;
                document.getElementById("morus_status").innerHTML = code;
            }
        }
        requestAnimationFrame(get_code);
    }
    get_code();
}
morus();

