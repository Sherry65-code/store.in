function downsrc(appname)
{
if (appname == "cal")
{
    window.open('https://github.com/Sherry65-code/inventocalculator/tree/main');
}
}
function downexe(appname)
{
    if (appname == "cal")
    {
        window.open('https://drive.google.com/file/d/1DeJXqJsAHlSdzV37HveK8Ifbf9KArkz-/view?usp=download')
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