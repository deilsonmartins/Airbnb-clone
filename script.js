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
    ['Rio de Janeiro',
     'Lisboa',
     'Rome',
     'Paris',
     'Fortaleza',
     'Berlin',
     'Toronto',
     'Michigan',
     'Barcelona',
     'Madrid',
     'Brasilia',
     'Buenos Aires',
     'Santiago',
     'Montevidéu',
     'New York',
     'Porto',
     'Moskou',
     'Napoli',
     'São Paulo',
     'Florianópolis',
     'Oslo',
     'Monaco',
     'Camberra',
     'Porto Alegre',
     'Angra dos Reis'
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

/*function searchList(value)
{
    var lis = document.getElementsByClassName('card');
    
    for (var li in lis)
    {
       console.log(lis[li].lastElementChild.innerHTML)
        
    }
}

function OneSearch()
{
   let ul = document.getElementById('wrapper-cards');

   ul.innerHTML = '';
   const photo = "https://a0.muscache.com/im/pictures/e6c4b347-49c7-4840-8c00-df36a2a273da.jpg?aki_policy=x_large"
   createCard(photo, 'property_type', 'name', 'formatedPrice(card.price)', 'Location')
}

var form = document.getElementById('search');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    searchList(campo.value)
    OneSearch()
    // impede o envio do form
    e.preventDefault();
});*/

loadCards() 
