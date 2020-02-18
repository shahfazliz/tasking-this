function onKeyEnter(event, callback) {
    if (event.keyCode === 13) {
        callback(event);
    }
}

export {
    onKeyEnter,
};