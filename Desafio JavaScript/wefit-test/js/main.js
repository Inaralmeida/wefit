//UTILS
const handleRemoveEAddClass = (item, classRemove, classAdd) => {
  item.removeClass(classRemove);
  item.addClass(classAdd);
};

const handleCreateElements = (nameElements, nameActive, appendTo) =>{
  nameElements.forEach((element)=>{
    const item = $('<li>').addClass( element === nameActive ? 'list-group-item active' :'list-group-item').text(`${element} item`)
    

    item.appendTo(appendTo)

  })
}

//setters
const handleSetMenu = () => {
  const menu = $(".btn-group-vertical");
  handleRemoveEAddClass(menu, "btn-group-vertical", "btn-group-horizontal");
};

const handleSetHeader = () => {
  const jumbotron = $(".jumbotron");
  const linha = $(".my-4");
  const button = $(".jumbotron a");

  jumbotron.css({
    "background-color": "#6B757E",
    color: "#FCFCFC",
    display: "flex",
    "flex-direction": "column",
    "align-items": "flex-end",
  });

  linha.css("width", "100%");

  handleRemoveEAddClass(button, " btn-primary", " btn-success");
};

const handleSetOrderCards = () => {
    const newOrder = {
    "Natureza": '1',
    "Animais": '2',
    "Pessoas": '3',
    "Tecnologia": '4'
  }

  $('.col-lg-3').each(function() {
    var card = $(this);
    var title = card.find('.card-title').text();
    card.addClass(`order-${newOrder[title]}`)  
});

  const btnAnimal = $('.card-title:contains("Animais")').siblings('.btn')
  handleRemoveEAddClass(btnAnimal,'btn-primary','btn-success')
};

const handleSetListItens = () =>{
  const ul = $('ul')
  const currentActive = $('.active')
  handleRemoveEAddClass(currentActive, 'active', '')
  handleCreateElements(['Quarto', 'Quinto'], 'Quarto', ul)
}

handleSetMenu();
handleSetHeader();
handleSetOrderCards()
handleSetListItens()
