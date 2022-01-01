window.addEventListener('load',()=>{
document.getElementById('loader').style.visibility = "hidden";
});
function inventose()
{
    app_ico = "https://static.vecteezy.com/system/resources/previews/000/582/320/original/cctv-camera-icon-vector.jpg";
    app_title = "Invento Security Camera";
    app_link = "";
    app_des = `This is Invento Security system app. Press q to exit application.
    This is made to catch theif. click it's photo and put it in theif automatically.
    Works with python3 and imports are - Pygame , cv2 , pyautogui.
    Change the index no. according to your requirements. Info of
    index no. in <a href="https://answers.opencv.org/question/83360/how-to-find-my-camera-index/">this article.</a>`;
   
    pop_open();
}
function pop_close()
{
    document.getElementById('down').style = "visibility: hidden;";
 
}
function pop_open()
{
    document.getElementById('down').style = "visibility: visible;";
    document.getElementById('down').innerHTML = `
    <img src="`+app_ico+`" alt="" id="app-icon">
    <div id="close" onclick="pop_close()"></div>
    <span id="app-text">`+app_title+`</span>
    <a href="`+app_link+`">
    <button id="install">Install</button></a>
    <span id="des-title">Description:-</span>
    <span id="des">
    `+app_des+`
    </span>
    `;
}