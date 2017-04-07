!function(){
    var controllers = {};
    var components = {};
    var models = {};
    var obj = window;
    var APP_STATE = {};

    function isFunction(obj, functionName){
        //return typeof obj[functionName] == "function" && obj.hasOwnProperty(functionName);
        return Object.prototype.toString.call(obj[functionName]) === '[object Function]';
    }
    function isObjectOf(functionName, type){
        return isFunction(obj, functionName) && functionName.indexOf(type) != -1;
    }
    function isComponent(func) {
        return isObjectOf(func, "Component");
    }
    function isController(func){
        return isObjectOf(func, "Controller");
    }
    function isModel(func){
        return isObjectOf(func, "Model");
    }
    function render(tagName, content){
        document.getElementsByTagName(tagName)[0].innerHTML = content;
    }

    function read(filePath){

    }

    document.addEventListener("DOMContentLoaded", function(event) {
        for (var m in obj) {
            isController(m) && (controllers[m.substring(0, m.indexOf("Controller"))] = obj[m]);
            isComponent(m) && (components[m.substring(0, m.indexOf("Component"))] = obj[m]);
            isModel(m) && (models[m.substring(0, m.indexOf("Model"))] = obj[m]);
        }

        var componentNames = Object.keys(components);
        render(componentNames[0], "Hello");

    });
}();