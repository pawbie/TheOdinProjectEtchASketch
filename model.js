var gameModel = function () {
    
    var _widthRatio = 48,
        _heightRatio = 48,
        _viewMode = "canvas",
        _currentBrush = "",
        _brushMode = "hover",
        _currentColor = "green",
        _currentZoom = 1;

    return {
        get widthRatio() {
            return _widthRatio;
        },

        get heightRatio() {
            return _heightRatio;
        },

        get currentColor() {
            return _currentColor;
        },

        get viewMode() {
            return _viewMode;
        }
    } 
}


