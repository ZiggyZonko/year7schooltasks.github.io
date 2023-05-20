window.onpopstate = function() { //force reload on chromium
    location.reload();
}
window.onunload = function() { }; //stop firefox from caching
var loading = false;
$(function () {
    $('#form').on('submit',function (e) {
        e.preventDefault();
        input(document.getElementById("input").value);
    });
});
function input(input)
{
    if (input == "" || loading)
    {
        return;
    }
    var originalInput = input;
    input = input.toLowerCase();
    if (input == "clear" || input == "cls")
    {
        $('#output').empty();
        document.getElementById("input").value = "";
        return;
    }
    var p = document.createElement('p');
    var inp = document.createElement('p');
    switch (input)
    {
        case "Discord":
        case "discord":
            p.innerHTML = "<span onclick=\"input('Discord')\"></span> My Discord Is ZiggyZonko#9795 - DM me for Hires or just to talk<br>";
            break;
        case "info":
        case "help":
            p.innerHTML = "<span onclick=\"input('projects')\">projects</span> - Display all of my projects, new and old.<br><span onclick=\"input('about')\">about</span>   - Learn more about me.<br><span onclick=\"input('clear')\">clear</span>   - Clear the terminal.<br> <span onclick=\"input('Discord')\">Discord</span> - Get My Discord";
            break;
        case "projects":
            p.innerHTML = `
            <a href="">Curiosity Bot</a>
            <br> 
            I have done many projects in the past but this was the biggest i had done I did it for a job which i used Distube
            <br>
            The Bot used to be very popular until it got shut down but I brought It back up again
            <br>
            In the Live launch there was about 30 people waiting for me to start up the bot and overall we had a great time partying.     <br><br>
            <u>Swimmy</u>
            <br>
            Swimmy is one of those old games that you built for your first time programming but it came out better than you expected.     Actually Thats not Swimmy Thats Nothing... 
            Anyway Swimmy is where your A fish swimmy around trying to swallow smaller fish.<br>
          `
            break;
        case "about":
            p.innerHTML = "Hello! I'm Zachary.<br>I am a teenage developer who likes to make games, applications, and discord bots. <br>I mainly use JS, however I am learning C# and C++. I am also somewhat competent in HTML/CSS. <br>With nearly 2 years of experience and way some free time, I am constantly making a new game, program or doing jobs.<br><a href=\"https://discord.gg\">Discord</a> <a href=\"https://github.com/ZiggyZonko\">Github</a>";
            break;
        case "welcome":
            p.innerHTML = "Welcome to the School Work Terminal. Use <span onclick=\"input('help')\">help</span> to see list of commands. Use <span onclick=\"input('help')\">help</span> to list all commands.";
            break;
        case "pdh":
        case "PDH":
            p.className = "loading";
            p.innerHTML = "Loading PDH Project...";
            inp.innerHTML = `<i>root@pl-website</i>:<b>~</b>$ ${originalInput}`;
            document.getElementById("output").appendChild(inp);
            document.getElementById("output").appendChild(p);
            document.getElementById("input").value = "";
            document.getElementById("inputLine").remove();
            loading = true;
            setTimeout(function(){
                p.className = "";
                p.innerHTML = "Loaded Project."
                loading = false;
                window.location.href = "pdh/index.html";
            }, 5000);
            return;
        default:
            p.innerHTML = `${originalInput} : The term '${originalInput}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.`;
            break;
    }
    inp.innerHTML = `<i>root@pl\School-Work</i>:<b>~</b>$ ${originalInput}`;
    document.getElementById("output").appendChild(inp);
    document.getElementById("output").appendChild(p);
    document.getElementById("input").value = "";
}