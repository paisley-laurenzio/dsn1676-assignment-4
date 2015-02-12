var blueBerries = {
    name: 'Blueberries',
    latinName: 'Vaccinium corymbosum',
    growsOnShrub: true,
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};


var grapes = {
    name: 'Grapes',
    latinName: 'vinifera',
    growsOnShrub: false,
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g'
};


var redCurrant = {
    name: 'Red Currant',
    latinName: 'Ribes rubrum',
    growsOnShrub: true,
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g'
};


var writeFruit = function (fruit) {
    document.write('<h1>' + fruit.name + '</h1>');
    document.write('<dl>');
    
    document.write('<dt>Latin Name<dt>');
    document.write('<dd>' + fruit.latinName + '<dd>');
    
    document.write('<dt>Grows On Shrub<dt>');
    document.write('<dd>' + fruit.growsOnShrub + '<dd>');
    
    document.write('<dt>Energy<dt>');
    document.write('<dd>' + fruit.energy + '<dd>');
    
    document.write('<dt>Carbohydrates<dt>');
    document.write('<dd>' + fruit.carbohydrates + '<dd>');
    
    document.write('<dt>Protein<dt>');
    document.write('<dd>' + fruit.protein + '<dd>');
    
    document.write('</dl>');
};


var allFruit = [blueBerries, grapes, redCurrant];

allFruit.forEach(writeFruit);

