var respecConfig = {
    subtitle:   "The stark raving awesome way to write specs."
,   nav:  [
        { url: "index.html", label: "Home" }
    ,   { url: "guide.html", label: "User's Guide" }
    ,   { url: "ref.html", label: "Reference" }
    ,   { url: "dev.html", label: "Developers" }
    ]
};
window.mungeConf = function (utils, source) {
    return source.replace("<section>", "<section class='well conf'>");
};