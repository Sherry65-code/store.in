window.addEventListener('load', ()=>{
    document.getElementById('main').innerHTML = `
    <h1>Apps From us</h1><br><br>
    <div class="app">
        <img src="https://th.bing.com/th/id/R.39448f750f7745f94e0bb02b4abf0511?rik=HFxAVKvMrkHzMA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fvexels%2foffice%2f1024%2fcalculator-icon.png&ehk=oUyRHVNgET9NAuQPXO1hpWkG%2bAeYrkZjlDur6tWDTd8%3d&risl=&pid=ImgRaw&r=0" class="appimage">
        <div class="apptitle">Invento Calculator</div><br>
        <button class="code" onclick="downsrc('cal')">Source Code</button><br><br>
        <button class="code" onclick="downexe('cal')">Download Installer</button>
    </div><br>
    <div class="app">
        <img src="https://cdn0.iconfinder.com/data/icons/computer-network-26/512/encryption-code-decryption-security-protect-512.png" class="appimage">
        <div class="apptitle">Invento Encryptor</div><br>
        <button class="code" onclick="downsrc('enc')">Source Code</button><br><br>
        <button class="code" onclick="downexe('enc')">Download Installer</button>
    </div>
    <br>
    <div class="app">
        <img src="https://cdn2.iconfinder.com/data/icons/security-add-on-glyph/48/Sed-08-512.png" class="appimage">
        <div class="apptitle">Invento Theif Catcher</div><br>
        <button class="code" onclick="downsrc('sec')">Source Code</button><br><br>
        <button class="code" onclick="downexe('sec')">Download Installer</button>
    </div>
    <div class="app">
    <img src="https://cdn2.iconfinder.com/data/icons/digital-business-2/64/AI-robot-technology-brain-chip-512.png" class="appimage">
    <div class="apptitle">OBO</div><br>
    <button class="code" onclick="downsrc('obo')">Source Code</button><br><br>
    <button class="code" onclick="downexe('obo')">Download Installer</button>
</div>
    `;
})
function downsrc(appname)
{
if (appname == "cal")
{
    window.open('https://github.com/Sherry65-code/inventocalculator/tree/main');
}
else if (appname == "enc")
{
    window.open('https://github.com/Sherry65-code/encrypter2.0');
}
else if (appname == "sec")
{
    window.open('https://github.com/Sherry65-code/theifcatcher');
}
else if (appname == "obo")
{
    window.open('https://github.com/Sherry65-code/OBO');
}
else{
    alert("Source Code not avaliable");
}
}
function downexe(appname)
{
    if (appname == "cal")
    {
        window.open('https://drive.google.com/file/d/1DeJXqJsAHlSdzV37HveK8Ifbf9KArkz-/view?usp=download')
    }
    else
    {
        alert("Executable is not avalaible");
    }
}
function givewarning(warntext)
{
    document.getElementById('warndiv').style.visibility = "visible";
    setTimeout(4000 , runout);
    document.getElementById('warnspan').innerHTML = warntext;
}
function runout()
{
    document.getElementById('warndiv').style.visibility = "hidden";
}