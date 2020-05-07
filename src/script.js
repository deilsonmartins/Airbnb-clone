function formatedPrice(price)
{
    const newPrice = 'R$ ' + price + ',00/Day';

    return newPrice;
}
function createCard(src, Onetype, OneName, OnePrice, Onelocation) {

    var img  = document.createElement("img");
    img.setAttribute('src', src);
    img.setAttribute('class', 'image');

    var name = document.createElement("h1");
    name.setAttribute('class', 'name');
    var nodeName = document.createTextNode(OneName);
    name.appendChild(nodeName);

    var type = document.createElement("h3");
    type.setAttribute('class', 'type');
    var nodeType = document.createTextNode(Onetype);
    type.appendChild(nodeType);

    var price = document.createElement("strong");
    price.setAttribute('class', 'price');
    var nodePrice = document.createTextNode(OnePrice);
    price.appendChild(nodePrice);

    var location = document.createElement("strong");
    location.setAttribute('class', 'location');
    var nodelocation = document.createTextNode(Onelocation);
    location.appendChild(nodelocation);

    var list = document.createElement('li');
    list.setAttribute('class', 'card');
    
    list.appendChild(img);
    list.appendChild(name);
    list.appendChild(type);
    list.appendChild(price);
    list.appendChild(location);
    
    var ul = document.getElementById('wrapper-cards');
    ul.appendChild(list);
}

function loadCards(pagination = 24) {
    const URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72?offset=5&limit=5";
    const locations = 
    ['Rio de Janeiro - BR',
     'Lisboa - POR',
     'Rome - ITA',
     'Paris - FRAN',
     'Fortaleza - BR',
     'Berlin - ALEM',
     'Toronto - CAN',
     'Michigan - EUA',
     'Barcelona - ES',
     'Madrid - ES',
     'Brasilia - BR',
     'Buenos Aires - ARG',
     'Santiago - CH',
     'Montevidéu - UR',
     'New York - EUA',
     'Porto - POR',
     'Moskou - RUS',
     'Napoli - ITA',
     'São Paulo - BR',
     'Florianópolis - BR',
     'Oslo - NOR',
     'Monaco - FRAN',
     'Camberra - AUS',
     'Porto Alegre - BR',
     'Angra dos Reis - BR'
] 
    
    var location = 0
    axios.get(URL).then(
        function (response)
        {   
            response.data.slice(0, pagination).map(card => {
                location += 1;
                createCard(card.photo, card.property_type, card.name, formatedPrice(card.price), locations[location])
            });
            
        })
}

loadCards() 


