/**
 * GetElement
 */
var GetElement = (function () {
    function GetElement(eleName) {
        var strToEleType = { '.': 'class', '#': 'id' };
        var eleTypeDes = eleName.substr(0, 1);
        this.element = document.createElement('div');
    }
    return GetElement;
}());
var getElement = new GetElement('s');
console.log(getElement.element);
// interface ShowWaterfall{
// 	containerName: HTMLElement;
// 	childNames: Array<HTMLElement>;
// }
// class WaterfallLayout implements ShowWaterfall {
// 	containerName: HTMLElement;
// 	childNames: Array<HTMLElement>;
// 	constructor(){
// 		this.containerName = document.getElememt
// 	}
// } 
