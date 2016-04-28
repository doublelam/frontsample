interface FetchElement{
	element: HTMLElement
}

/**
 * GetElement
 */
class GetElement implements FetchElement {
	element: HTMLElement;
	constructor(eleName: string) {
		const strToEleType = {'.': 'class','#':'id'};
		var eleTypeDes = eleName.substr(0,1);
		this.element =  document.createElement('div');
	}
}

const getElement = new GetElement('s');
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