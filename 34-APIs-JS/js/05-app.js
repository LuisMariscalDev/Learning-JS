document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'hidden') {
        document.title = 'Regresa, te extrañamos:(';
    } else {
        document.title = 'Learning JS';
    }
})