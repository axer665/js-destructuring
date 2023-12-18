export default function destructuring(object) {
    // массив, куда будем добавлять спец.атаки
    const result = [];
    // атрибуты объекта спец.атаки, которые должны присутствовать (с их дефолтными значениями, если атрибута нет)
    const mainParamsDefaultParams = {
        id: "Идентификатор скрыт", 
        name: "Наименование засекречено", 
        description: "Описание недоступно", 
        icon: "http://localhost/icons/defaultIcon.ico"  
    };
    //
    const { special } = object;

    if (!special) {
        return result;
    }

    // пройдемся по всем спец.атакам
    for (let i=0; i<special.length; i++){
        let specialAtack = special[i];
        let specialAtackItem = {};

        // пройдемся по списку обязательных параметров
        for (const property in mainParamsDefaultParams) {
            // если у спец.атаки нет нужного параметра - добавляем его с дефолтным значением
            //if (!specialAtack.hasOwnProperty(property)) { // я бы сделал так, но eslint ругается =(
            if (!Object.prototype.hasOwnProperty.call(specialAtack, property)){
                specialAtackItem[property] = mainParamsDefaultParams[property];
            } else {
                specialAtackItem[property] = specialAtack[property] 
            }
        }
        
        result.push(specialAtackItem);
    }
    return result;
}