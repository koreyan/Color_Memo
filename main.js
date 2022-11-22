class MemoBox
{
    constructor(pageNum,backgroundColor)
    {
        this.memo_box = document.createElement("div");


        // memo_box의 자식 객채들 생성 
        this.title = document.createElement("h1");
        this.canvas_title = document.createElement("canvas");

        this.memo_title = document.createElement("h1");
        this.canvas_memo = document.createElement("canvas");


        // memo_box 프로퍼티 설정 
        this.memo_box.id = "cv_box" + pageNum;
        this.memo_box.className = "cv_box";
        this.memo_box.style.backgroundColor = backgroundColor;
        if(String(pageNum) !== "0")
        {
            this.memo_box.style.display="none";
        }

        // title 설정 
        this.title.className = "title";
        this.title.innerHTML = "TITLE";

        // title canvas 설정 
        this.canvas_title.className = "title_box";
        this.canvas_title.id = String(pageNum) + "_title"; 
        this.canvas_title.width = "950";
        this.canvas_title.height = "100"
        // memo title 설정 
        this.memo_title.className="memo";
        // console.log(this.memo_title);
        // console.log(this.memo_title.innerHTML);
        this.memo_title.innerHTML="MEMO";

        // canvas memo 설정 
        this.canvas_memo.className="canvas";
        this.canvas_memo.id = String(pageNum) + "_memo";
        this.canvas_memo.width = "950";
        this.canvas_memo.height = "650";

        // memo_box에 자식들 넣어주기 
        this.memo_box.appendChild(this.title);
        this.memo_box.appendChild(this.canvas_title);
        this.memo_box.appendChild(this.memo_title);
        this.memo_box.appendChild(this.canvas_memo);
    }

    // 객체 안보이게 함 
    hidden(){
        this.memo_box.style.display="none";
    }
    // 객체 보이게 함 
    appear(){
        this.memo_box.style.display="";
    }
    // dom 객체 반환
    getdom(){
        return this.memo_box;
    }

    getTitleCanvas(){
        return this.canvas_title;
    }

    getMemoCanvas(){
        return this.canvas_memo;
    }
}

class Brush
{
    constructor(controlBoxNum)
    {

        this.controlBox = document.createElement("div");
        this.controlBox.className = "control_box";
        this.controlBox.id = String(controlBoxNum)+"_control_box";
        if(String(controlBoxNum) !== "0")
        {
            this.controlBox.style.display="none";
        }

        // brush 두께 관련 객체 생성 및 설정 
        this.brushThicknessBox = document.createElement("div");
        this.brushThicknessBox.className = "control_range";

        this.brushThickness = document.createElement("input");
        this.brushThickness.id=String(controlBoxNum) + "_input";
        this.brushThickness.type = "range";
        this.brushThickness.min = "0.1";
        this.brushThickness.max = "5.0";
        this.brushThickness.value = "2.5";
        this.brushThickness.step = "0.1";

        this.brushThicknessBox.appendChild(this.brushThickness);

        // clear, save fill버튼 생성 및 설정 
        this.controlButtonBox = document.createElement("div");
        this.controlButtonBox.className = "controls_btns";

        this.fillBtn = document.createElement("button");
        this.fillBtn.id = String(controlBoxNum) + "_fill";
        this.fillBtn.innerHTML="FILL";

        this.clearBtn = document.createElement("button");
        this.clearBtn.id = String(controlBoxNum) + "_clear";
        this.clearBtn.innerHTML="CLEAR";

        this.saveBtn = document.createElement("button");
        this.saveBtn.id = String(controlBoxNum) +"_save";
        this.saveBtn.innerHTML = "SAVE";

        this.shapeBtn = document.createElement("button");
        this.shapeBtn.id = String(controlBoxNum) + "_shape";
        this.shapeBtn.innerHTML = "SHAPE";

        // text 버튼 생성 및 설정 
        this.textBtn = document.createElement("button");
        this.textBtn.id = String(controlBoxNum) + "_text";
        this.textBtn.innerHTML = "TEXT";


        this.controlButtonBox.appendChild(this.fillBtn);
        this.controlButtonBox.appendChild(this.clearBtn);
        this.controlButtonBox.appendChild(this.saveBtn);
        this.controlButtonBox.appendChild(this.shapeBtn);
        this.controlButtonBox.appendChild(this.textBtn);

        // control color box 생성 및 설정 
        this.controlColorBox = document.createElement("div");
        this.controlColorBox.className = "control_colors";

        const colorBox = []
        const colors = ["black", "white", "red", "orange", "yellow", "green", "blue", "navy", "purple"];

        for(let i=0; i < colors.length; i++)
        {
            colorBox[i] = document.createElement("div");
            colorBox[i].className = "control_color";
            
            colorBox[i].style.backgroundColor = colors[i];
            colorBox[i].id = String(controlBoxNum) + "_" +  colorBox[i].style.backgroundColor;
            this.controlColorBox.appendChild(colorBox[i]);
        }

        // 도형 박스 생성 및 설정 
        this.shapeBox = document.createElement("div");
        this.shapeBox.id = String(controlBoxNum) + "_shapeBox";
        this.shapeBox.style.display="none";


        // 원 : 1, 사각형 : 3, 삼각형 : 5
        this.circle = document.createElement("img");
        this.circle.src="원.png";
        this.circle.id = String(controlBoxNum) + "_circle_img";
        this.rect = document.createElement("img");
        this.rect.src="사각형.png";
        this.rect.id= String(controlBoxNum) + "_rect_img";
        this.triangle = document.createElement("img");
        this.triangle.src="삼각형.png";
        this.triangle.id = String(controlBoxNum) + "_tri_img";
        this.blank1 = document.createElement("img");
        this.blank2 = document.createElement("img");
        this.blank3 = document.createElement("img");
        this.blank4 = document.createElement("img");
        this.blank5 = document.createElement("img");
        
        this.pen = document.createElement("img");
        this.pen.src="붓.jpg";
        this.pen.id=String(controlBoxNum) + "_pen_img";

        this.blank1.style.visibility="hidden";
        this.blank2.style.visibility="hidden";
        this.blank3.style.visibility="hidden";
        this.blank4.style.visibility="hidden";
        this.blank5.style.visibility="hidden";

        this.shapeBox.appendChild(this.blank1);
        this.shapeBox.appendChild(this.circle);
        this.shapeBox.appendChild(this.blank2);
        this.shapeBox.appendChild(this.rect);
        this.shapeBox.appendChild(this.blank3);
        this.shapeBox.appendChild(this.triangle);
        this.shapeBox.appendChild(this.blank4);
        this.shapeBox.appendChild(this.pen);
        this.shapeBox.appendChild(this.blank5);
        

        // text 버튼 눌렀을 때 나오는 버튼 
        this.textBtnBox = document.createElement("div");
        this.textBtnBox.id = String(controlBoxNum) + "_textBtnBox";
        this.textBtnBox.style.display="none";

        this.sans_serifBtn = document.createElement("button");
        this.sans_serifBtn.id = String(controlBoxNum) + "_sans_serifBtn";
        this.sans_serifBtn.innerHTML = "sans_serif";
        this.monospaceBtn = document.createElement("button");
        this.monospaceBtn.id = String(controlBoxNum) + "_monospaceBtn";
        this.monospaceBtn.innerHTML = "monospace";
        this.cursiveBtn = document.createElement("button");
        this.cursiveBtn.id = String(controlBoxNum) + "_cursiveBtn";
        this.cursiveBtn.innerHTML = "cursive";
        this.fantasyBtn = document.createElement("button");
        this.fantasyBtn.id = String(controlBoxNum) + "_fantasyBtn";
        this.fantasyBtn.innerHTML = "fantasy";


        this.textBtnBox.appendChild(this.sans_serifBtn);
        this.textBtnBox.appendChild(this.monospaceBtn);
        this.textBtnBox.appendChild(this.cursiveBtn);
        this.textBtnBox.appendChild(this.fantasyBtn);

        this.controlBox.appendChild(this.brushThicknessBox);
        this.controlBox.appendChild(this.controlButtonBox);
        this.controlBox.appendChild(this.controlColorBox);
        this.controlBox.appendChild(this.shapeBox);
        this.controlBox.appendChild(this.textBtnBox);
    }

     // 객체 안보이게 함 
     hidden(){
        this.controlBox.style.display="none";
    }
    // 객체 보이게 함 
    appear(){
        this.controlBox.style.display="";
    }
    // dom 객체 반환
    getdom(){
        return this.controlBox;
    }

    // 붓 두께 조절 관련 객체 반환 
    getbrushSize(){
        return this.brushThickness;
    }

    getcolorbox(){
        return this.controlColorBox;
    }

    getsaveBtn(){
        return this.saveBtn;
    }

    getclearBtn(){
        return this.clearBtn;
    }

    getfillBtn(){
        return this.fillBtn;
    }

    getshapeBtn()
    {
        return this.shapeBtn;
    }
    getshapebox(){
        return this.shapeBox;
    }
    gettextBtn(){
        return this.textBtn;
    }
    gettextBtnBox()
    {
        return this.textBtnBox;
    }
}



const memo_pages = [];   // 컬러별 메모지들을 저장 할 배열
const memo_boxes = [];
const pkg = document.getElementById("cv_pkgid");
const index_box = document.getElementsByClassName("index");


/*********************** 메모 페이지 관련 설정 *********************** */
// 메모장 생성 및 색상 설정 
for(let i=0; i < index_box.length; i++){
    memo_pages[i] = new MemoBox(i, index_box[i].style.backgroundColor);
    // console.log(i , memo_pages[i])
    memo_boxes[i] = memo_pages[i].getdom()
    pkg.appendChild(memo_boxes[i]);
}
// 

// control box 생성 및 설정 
const colors = [];
const controlBoxPlace = document.getElementById("control_box_place");
for(let i = 0; i <index_box.length; i++)
{
    colors[i] = new Brush(i);
    controlBoxPlace.appendChild(colors[i].getdom());
}


// 메모장 전환 이벤트 
const color_page = {
    "orangered" : 0,
    "rgb(189, 183, 107)" : 1,
    "yellowgreen" : 2,
    "rgb(70, 130, 180)" : 3,
    "rgb(123, 104, 238)" : 4,

}

function chpage(event)
{
    for(let i=0;i<memo_pages.length;i++)
    {
        memo_pages[i].hidden();
        colors[i].hidden();
    }
    const color = event.target.style.backgroundColor;
    memo_pages[color_page[color]].appear()
    colors[color_page[color]].appear() // 메모장과 짝을 이루는 control 박스 보이게 하기 
}

Array.from(index_box).forEach(color =>
    color.addEventListener("click", chpage));



/****************  그리기 관련 이벤트  ************************/
const title_canvases = [];
const memo_canvases = [];
const brushes = [];

const title_ctxes = [];
const memo_ctxes = []; 

const paintings = [false,false,false,false,false];

// 그리기 이벤트 
function stopPainting(event){
    
   paintings[Number(event.target.id.split("_")[0])] = false;
//    console.log("stop",paintings[Number(event.target.id.split("_")[0])]);
}

function startPainting(event){
    
    paintings[Number(event.target.id.split("_")[0])] = true;
    // console.log("start",paintings[Number(event.target.id.split("_")[0])]);
}
// 

// 마우스 이벤트 
function onMouseMove(event)
{
    // console.log("mouseomv");
    const x = event.offsetX;
    const y = event.offsetY;
    //console.log(x,y);
    let ctx;
    if(event.target.id.split("_")[1] === "title"){
        ctx = title_ctxes[Number(event.target.id.split("_")[0])]
    }else if(event.target.id.split("_")[1] === "memo"){
        ctx = memo_ctxes[Number(event.target.id.split("_")[0])]
    }

    if(!paintings[Number(event.target.id.split("_")[0])]){ // painting === false 이면 좌표 옮기기만 한다. 
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{ // painting === true 이면 그린다. 
    //    console.log(x,y);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseUp(event){
    // console.log("mouseup");
    stopPainting(event);
}
// 

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,700,700);
    }
}

// 각 color 페이지의 canvas들을 배열에 저장 및 ctx 설정, brush 객체들 저장 
for(let i = 0; i < memo_pages.length; i++)
{
    title_canvases[i] = memo_pages[i].getTitleCanvas();
    // console.log("titleCv", title_canvases[i]);
    
    //title_canvases[i].addEventListener("click", handleCanvasClick);  이따 지우기 기능 할 때 활용 

    title_ctxes[i] = title_canvases[i].getContext("2d");  // 캔버스 랜더링 
    title_ctxes[i].fillStyle = "white";  // 배경 채울 색 정하기 
    title_ctxes[i].fillRect(0,0,title_canvases[i].width,title_canvases[i].height); // 색 채우기 
    title_ctxes[i].strokeStyle = "#000000"; // 글씨 색
    title_ctxes[i].lineWidth = 2.5; // 글씨 굵기

    title_canvases[i].addEventListener("mousemove", onMouseMove);
    title_canvases[i].addEventListener("mousedown", startPainting);
    title_canvases[i].addEventListener("mouseup", onMouseUp);
    title_canvases[i].addEventListener("mouseleave", stopPainting);




    memo_canvases[i] = memo_pages[i].getMemoCanvas();
   
    //memo_canvases[i].addEventListener("click", handleCanvasClick);

    memo_ctxes[i] = memo_canvases[i].getContext("2d");   // 캔버스 랜더링 
    memo_ctxes[i].fillStyle = "white";
    memo_ctxes[i].fillRect(0,0,memo_canvases[i].width,memo_canvases[i].height);
    memo_ctxes[i].strokeStyle = "#000000"; // 글씨 색
    memo_ctxes[i].lineWidth = 2.5; // 글씨 굵기

    memo_canvases[i].addEventListener("mousemove", onMouseMove);
    memo_canvases[i].addEventListener("mousedown", startPainting);
    memo_canvases[i].addEventListener("mouseup", onMouseUp);
    memo_canvases[i].addEventListener("mouseleave", stopPainting);


    brushes[i] = colors[i].getbrushSize(); // brush 굵기 제어 input 태그 
}


// brush 굵기 설정 이벤트 
function brushThicknessChange(event)
{
    const inputTagNum = event.target.id.split("_")[0];  // 몇번 페이지에 있는 canvas에 적용할지 찾기
    //console.log(inputTagNum)
    title_ctxes[Number(inputTagNum)].lineWidth = event.target.value;  // 굵기 설정
    memo_ctxes[Number(inputTagNum)].lineWidth = event.target.value;
}

Array.from(brushes).forEach(brush =>
    brush.addEventListener("click", brushThicknessChange));



// brush 색상 변경 
const colorBoxes = [];  // 여러 페이지의 컬러 박스들을 저장할 배열 
let canvasBackgroundColor = "white"; // 캔버스 배경색도 같이 설정 


for(let i = 0; i < memo_pages.length; i++)
{
    // colors가 brush객체를 가지고 있음 
    colorBoxes[i] = colors[i].getcolorbox(); // 각 컬러 페이지의 여러 색상을 담은 컬러 박스 객체를 저장 
}

// 각 컬러 박스의 각 컬러의 이벤트 지정 
function chColor(event)
{
    const color = event.target.style.backgroundColor;
    const colorPageNum = event.target.id.split("_")[0];
    //console.log(color,event.target.id.split("_")[1]); // 두 인자값이 같아야함
    title_ctxes[Number(colorPageNum)].strokeStyle = color;
    memo_ctxes[Number(colorPageNum)].strokeStyle = color;
    canvasBackgroundColor = color;
}

for(let i = 0; i < memo_pages.length; i++)
{
    const colors =  colorBoxes[i].getElementsByClassName("control_color");
    Array.from(colors).forEach(color =>
        color.addEventListener("click", chColor));
    
}


// 배경색상 변경 
const fillBtns = []
for(let i=0; i< memo_pages.length; i++){
    fillBtns[i] = colors[i].getfillBtn();
}
function backgroundColorFill(event){
    const fillBtnNum = event.target.id.split("_")[0];
    title_ctxes[Number(fillBtnNum)].fillStyle = canvasBackgroundColor;  // 배경 채울 색 정하기 
    title_ctxes[Number(fillBtnNum)].fillRect(0,0,title_canvases[Number(fillBtnNum)].width,title_canvases[Number(fillBtnNum)].height); // 색 채우기
    
    memo_ctxes[Number(fillBtnNum)].fillStyle = canvasBackgroundColor;  // 배경 채울 색 정하기 
    memo_ctxes[Number(fillBtnNum)].fillRect(0,0,memo_canvases[Number(fillBtnNum)].width,memo_canvases[Number(fillBtnNum)].height); // 색 채우기
    //console.log(Number(fillBtnNum),canvasBackgroundColor);

}
Array.from(fillBtns).forEach(fillBtn =>
    fillBtn.addEventListener("click", backgroundColorFill));

// 저장 기능 만들기
const saveBtns = [];

for(let i = 0; i < memo_pages.length; i++)
{
    saveBtns[i] = colors[i].getsaveBtn();
}

function saveImage(event){
    const saveBtnNum = event.target.id.split("_")[0];
    const canvasTosave = memo_canvases[Number(saveBtnNum)];
    const image = canvasTosave.toDataURL("image/png");
    //console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[EXPORT]";
    link.click();
}   

Array.from(saveBtns).forEach(saveBtn =>
    saveBtn.addEventListener("click", saveImage));

//


//전체 지우기 기능 만들기 

const clearBtns = [];
for(let i = 0; i < memo_pages.length; i++)
{
    clearBtns[i] = colors[i].getclearBtn();
}
function clear_All(event){

    for(let i = 0; i < memo_pages.length; i++){
    title_ctxes[i].fillStyle = "white";  // 배경 채울 색 정하기 
    title_ctxes[i].fillRect(0,0,title_canvases[i].width,title_canvases[i].height); // 색 채우기
    
    memo_ctxes[i].fillStyle = "white";  // 배경 채울 색 정하기 
    memo_ctxes[i].fillRect(0,0,memo_canvases[i].width,memo_canvases[i].height); // 색 채우기
    }
}
Array.from(clearBtns).forEach(clearBtn =>
    clearBtn.addEventListener("click", clear_All));


// shape 버튼 이벤트 
const shapeBtns = [];
const shapeboxes = [];

for(let i = 0; i < memo_pages.length; i++){
    shapeBtns[i] = colors[i].getshapeBtn();
}

for(let i = 0; i < memo_pages.length; i++){
    shapeboxes[i] = colors[i].getshapebox();
}


function shapeMode(event)
{
    const shapeBtnNum = event.target.id.split("_")[0];
    const colorboxNum = colorBoxes[Number(shapeBtnNum)];
    const shapeboxnNum = shapeboxes[Number(shapeBtnNum)];

    if(event.target.innerHTML == "SHAPE")
    {
        colorboxNum.style.display = "none";
        shapeboxnNum.style.display ="";
        //console.log(shapeboxnNum.style.display)
        fontSelector[Number(shapeBtnNum)].style.display = "none";  // text box 안보이게 하기 -> 아래쪽에 선언되어 있음 
        event.target.innerHTML="COLOR";
        

    }else if(event.target.innerHTML=="COLOR"){
        colorboxNum.style.display = "";
        shapeboxnNum.style.display = "none";
        fontSelector[Number(shapeBtnNum)].style.display = "none";
        event.target.innerHTML="SHAPE";
    }
}

Array.from(shapeBtns).forEach(shapeBtn =>
    shapeBtn.addEventListener("click", shapeMode));



// 각 도형 이벤트 

// 원: 1, 사각형 : 3, 삼각형 : 5
const shape = {
    "원" : 1,
    "사각형" : 3,
    "삼각형" : 5,
    "붓":7
};

const circles = [];
const squares = [];
const triangles =[];
const pens = [];
let drawShape = false;
let imgs;

for(let i = 0; i < memo_pages.length; i++){
    imgs = shapeboxes[i].getElementsByTagName("img");
    //console.log(imgs);
    circles[i] = imgs[shape["원"]];
    squares[i] = imgs[shape["사각형"]];
    triangles[i] = imgs[shape["삼각형"]];
    pens[i] = imgs[shape["붓"]];
}


function Circle(event){

    const circleNum = event.target.id.split("_")[0];
    const thisCanvas = memo_canvases[circleNum];
    const thisCtx = memo_ctxes[circleNum];
    const thisbrush = brushes[circleNum];
    drawShape = true;
    thisCtx.beginPath(); //새로운 빈 경로 생성
    thisCanvas.onclick = function (event_c) {
        if(drawShape){
            const x = event_c.offsetX;
            const y = event_c.offsetY;
            thisCtx.beginPath();
            const size = thisbrush.value * 20;
            //console.log(size);
            thisCtx.arc(x, y, size, 0, Math.PI * 2, false); 
            thisCtx.stroke();
            }
        };

    }
    


function Square(event){
    const squareNum = event.target.id.split("_")[0];
    const thisCanvas = memo_canvases[squareNum];
    const thisCtx = memo_ctxes[squareNum];
    const thisbrush = brushes[squareNum];
    drawShape = true;
    thisCtx.beginPath(); //새로운 빈 경로 생성
    thisCanvas.onclick = function (event_s) {
        if(drawShape){
        const size = thisbrush.value * 20;
        const x = event_s.offsetX;
        const y = event_s.offsetY;
        thisCtx.moveTo(x - size, y - size);
        thisCtx.lineTo(x + size, y - size);
        thisCtx.lineTo(x + size, y + size);
        thisCtx.lineTo(x - size, y + size);
        thisCtx.lineTo(x - size, y - size);
        thisCtx.stroke();
      };
    }
}

function Triangle(event){
    const triangleNum = event.target.id.split("_")[0];
    const thisCanvas = memo_canvases[triangleNum];
    const thisCtx = memo_ctxes[triangleNum];
    const thisbrush = brushes[triangleNum];
    drawShape = true;
   
    thisCtx.beginPath(); //새로운 빈 경로 생성
    
    //console.log("삼각형 클릭");
    
    thisCanvas.onclick = function (event_t){
    if(drawShape){    
        //x,y 좌표값 얻기
      const x = event_t.offsetX;
      const y = event_t.offsetY;
      const size = thisbrush.value * 20;
      //console.log(size);
      thisCtx.moveTo(x, y - size); //시작 좌표 지정
      thisCtx.lineTo(x - size, y + size); //다음 좌표 지정
      thisCtx.lineTo(x + size, y + size);
      thisCtx.lineTo(x, y - size);
      thisCtx.stroke(); //좌표들 연결
    }
    };
    
}

function Pen(event){
    drawShape = false;
}

Array.from(circles).forEach(circle =>
    circle.addEventListener("click", Circle));

Array.from(squares).forEach(square =>
    square.addEventListener("click", Square));

Array.from(triangles).forEach(triangle =>
    triangle.addEventListener("click", Triangle));

Array.from(pens).forEach(pen =>
    pen.addEventListener("click", Pen));



// 텍스트 작성 관련 작업 

const textBtns = [];
const fontSelector = [];

const sans_serifs = [];
const monospaces = [];
const cursives = [];
const fantasys = []; 

let font = 'sans-serif';
let canvas_x;
let canvas_y;
let hasInput = true;



function textMode(event){
    const text_page_num = Number(event.target.id.split("_")[0]);
    const colorboxNum = colorBoxes[text_page_num];
    const shapeboxnNum = shapeboxes[text_page_num];

    fontSelector[text_page_num].style.display = "";
    colorboxNum.style.display = "none";
    shapeboxnNum.style.display = "none";
    drawShape = false;
    hasInput = false;
}


// 각 페이지의 text 버튼
for(let i = 0; i < memo_pages.length; i++){
    textBtns[i] = colors[i].gettextBtn();
}
Array.from(textBtns).forEach(textBtn =>
    textBtn.addEventListener("click", textMode));

// 각 페이지의 폰트 버튼 
for(let i = 0; i < memo_pages.length; i++){
    fontSelector[i] = colors[i].gettextBtnBox();
    sans_serifs[i] = fontSelector[i].getElementsByTagName("button")[0];
    monospaces[i] = fontSelector[i].getElementsByTagName("button")[1];
    cursives[i] = fontSelector[i].getElementsByTagName("button")[2];
    fantasys[i] = fontSelector[i].getElementsByTagName("button")[3];
}



Array.from(sans_serifs).forEach(sans_serif =>
    sans_serif.addEventListener("click", function(event){
        font = 'sans-serif';
        hasInput = false;
    }));

Array.from(monospaces).forEach(monospace =>
    monospace.addEventListener("click", function(event){
        font = 'monospace';
        hasInput = false;
    }));

Array.from(cursives).forEach(cursive =>
    cursive.addEventListener("click", function(event){
        font = 'cursive';
        hasInput = false;
    }));

Array.from(fantasys).forEach(fantasy =>
    fantasy.addEventListener("click", function(event){
        font = 'fantasy';
        hasInput = false;
    }));

Array.from(memo_canvases).forEach(pen =>
    pen.addEventListener("click", function(event) {
    if (hasInput) return;
    canvas_x = event.offsetX;
    canvas_y = event.offsetY;
    addInput(Number(event.target.id.split("_")[0]), event.clientX, event.clientY);
    hasInput = true;
}));


function addInput(targetNum, x, y) {
    const input = document.createElement('input');
  
    input.type = 'text';
    input.id = targetNum + "_input"
    input.style.position = 'fixed';
    input.style.left = (x - 4) + 'px';
    input.style.top = (y - 4) + 'px';
  
    input.onkeydown = handleEnter;
  
    memo_boxes[targetNum].appendChild(input);
  
    input.focus();
  
    hasInput = true;
}
  
function handleEnter(event) {
    let keyCode = event.keyCode;
    console.log(this.id.split("_")[0]);
    if (keyCode === 13) {
        drawText(this, parseInt(canvas_x,10), parseInt(canvas_y,10));
        memo_boxes[Number(this.id.split("_")[0])].removeChild(this);
        }
}
  
function drawText(obj_txt, x, y) {
    const memo_ctxes_page_num = Number(obj_txt.id.split("_")[0]);
    const fontsize = memo_ctxes[memo_ctxes_page_num].lineWidth;
    memo_ctxes[memo_ctxes_page_num].textBaseline = 'top';
    memo_ctxes[memo_ctxes_page_num].textAlign = 'left';
    memo_ctxes[memo_ctxes_page_num].fillStyle = "black";
    memo_ctxes[memo_ctxes_page_num].font = String(Number(fontsize) * 20) + "px" + " " + font;
    memo_ctxes[memo_ctxes_page_num].fillText(obj_txt.value, x - 4, y - 4);
}



