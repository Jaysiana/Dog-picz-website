import React from 'react';



const DarkMode = () => {

    let clickedClass = "clicked";
    const body = document.body;
    const lighttheme= "light";
    const darktheme= "dark";
    let theme;

    if(localStorage){
        theme = localStorage.getItem("theme");
    }

    if (theme === lighttheme || theme === darktheme){
        body.classList.add(theme)
    } else {
        body.classList.add(lighttheme)
    }

    const switchTheme = (e) => {
        if(theme === darktheme){
            body.classList.replace(darktheme, lighttheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lighttheme;
        } else {

            body.classList.replace(lighttheme, darktheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darktheme;

        }
    }

    return (
        <input className={theme=== "light" ? clickedClass: ""} type="checkbox" id="darkMode" onClick={(e) => switchTheme(e)}>
        </input>
    )

}


export default DarkMode;