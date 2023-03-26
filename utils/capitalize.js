export default (s) => {
    let _s = s.trim().toLowerCase();
    return _s.charAt(0).toUpperCase() + _s.slice(1)
}