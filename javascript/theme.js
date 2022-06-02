const Theme = {
    dark: {
        surface_color: '#121212',
        top_nav_color: '#282828',
        topic_nav_color: '#322c35',
        subjects_color: '#1d1f20',
        card_color: '#313131d8',
        footer_color: '#282828',
        fore_ground_color: '#f5f5f5'
    },
    light: {
        surface_color: '#f0f0f0',
        top_nav_color: '#e0e0e0',
        topic_nav_color: '#cfcfcf',
        subjects_color: '#c7c7c7',
        card_color: '#a3a3a3d8',
        footer_color: '#e0e0e0',
        fore_ground_color: '#141414'
    }
};


function changeTheme(theme) {
    let r = document.querySelector(':root');

    for (const themeName in Theme[theme]) {
        if (Object.hasOwnProperty.call(Theme[theme], themeName)) {
            const color = Theme[theme][themeName];
            r.style.setProperty('--theme-' + themeName.replaceAll('_', '-'), color);
        }
    }
}