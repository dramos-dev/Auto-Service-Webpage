var spanishModeBool = false;


function changeLanguage() {
    spanishToggle();

    if(spanishModeBool)
        spanishMode();
    else
        englishMode();
}


function spanishMode() {

    document.getElementById('lang_btn').innerHTML = 'English';
    document.getElementById('nav_services').innerHTML = 'Servicios';
    document.getElementById('nav_home').innerHTML = 'Página principal';
    document.getElementById('nav_features').innerHTML = 'Caracteristicas';
    document.getElementById('nav_prices').innerHTML = 'Precios';
    document.getElementById('main_title').innerHTML = 'Servicios Automobilisticos';
}

function englishMode() {

    document.getElementById('lang_btn').innerHTML = 'Español';
    document.getElementById('nav_services').innerHTML = 'Services';
    document.getElementById('nav_home').innerHTML = 'Home';
    document.getElementById('nav_features').innerHTML = 'Features';
    document.getElementById('nav_prices').innerHTML = 'Pricing';
    document.getElementById('main_title').innerHTML = 'Auto Service Center';

}


function spanishToggle() {
    spanishModeBool = !spanishModeBool;
}