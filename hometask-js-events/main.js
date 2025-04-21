

// menu bulma
const DataMenu = [
    "Jackets & Coats",
    "Hoodies",
    "T-shirts & Vests",
    "Shirts",
    "Blazers & Suits",
    "Jeans",
    "Trousers",
    "Shorts",
    "Underwear",
    "Gift Sets",
  ];
  
  const MenuValue = document.createDocumentFragment();
  const MenuElements = document.createElement("ul");
  MenuElements.setAttribute("class", "menu-list");


  DataMenu.forEach((item) => {
    const MenuElement = document.createElement("li");
    const MenuElementInner = document.createElement("a");
    MenuElementInner.textContent = item;
    MenuElement.append(MenuElementInner);
    MenuElements.append(MenuElement);
  });
  

  MenuValue.append(MenuElements);
  document.body.append(MenuValue);


// dropdown
const DataDropdown = {
    sort: "Sort by",
    drdbtn: "RECOMMENDED",
    amount: " ITEMS",
    buttontext: "Add to bag",
}; 

// select bulma
const DropdownButton = document.createElement("option");
const DropdownElement = document.createElement("select");
const DropdownMain = document.createElement("div");
const SortElement = document.createElement("div");

DropdownElement.append(DropdownButton);
DropdownMain.append(SortElement,DropdownElement);

SortElement.append(DataDropdown.sort);
DropdownButton.append(DataDropdown.drdbtn);

SortElement.setAttribute("class", "sort");
DropdownMain.setAttribute("class", "dropdown");


// Cards

const CardData = [
    {
        name: "slub jersey t-shirt",
        price: "$ 12.99",
        photo: "slub-jersey-t-shirt-white",
    },
    {
        name: "printed t-shirt",
        price: "$ 12.99",
        photo: "printed-t-shirt",
    },
    {
        name: "cotton t-shirt",
        price: "$ 12.99",
        photo: "cotton-t-shirt",
    },
    {
        name: "t-shirt with a motif",
        price: "$ 12.99",
        photo: "t-shirt-with-a-motif",
    },
    {
        name: "cotton t-shirt regular fit",
        price: "$ 12.99",
        photo: "cotton-t-shirt-regular-fit",
    },
    {
        name: "slub jersey t-shirt",
        price: "$ 12.99",
        photo: "slub-jersey-t-shirt-th",
    },
    {},
];

const CardValue = document.createDocumentFragment();
const CardSection = document.createElement("section");

CardData.forEach((item) => {
    
    const CardElement = document.createElement("div");
    
    const CardPhoto = document.createElement("div");
    const CardName = document.createElement("div");
    const CardPrice = document.createElement("div");
    const CardButton = document.createElement("button");

    
    CardElement.append(CardPhoto, CardName, CardPrice, CardButton);
    CardSection.append(CardElement);


// class photo+name, default photo

CardElement.classList.add("card-element");

// background photo
CardPhoto.classList.add(`photo-${item.photo}`);
if (!item.photo) {
    CardPhoto.setAttribute("class", "photo-no");
  }

// textstyle
CardName.classList.add("card-text");

// pricestyle
CardPrice.classList.add("card-price");

// buttonstyle
CardButton.classList.add("card-button");


    CardSection.setAttribute("class", "card-section");

    CardName.append(item.name);
    CardPrice.append(item.price);
    CardButton.append(DataDropdown.buttontext);

    CardValue.append(CardSection);

});

// select header
const HeaderElement = document.createElement("div");
const AmountElement = document.createElement("div");


let CardCounter = CardData.length;
AmountElement.append(`${CardCounter}${DataDropdown.amount}`);


AmountElement.setAttribute("class", "amountitems")

HeaderElement.setAttribute("class", "header")
HeaderElement.append(AmountElement, DropdownMain);



// page
const PageElement = document.createElement("div");
const PageCards = document.createElement("div");
const PageMenu = document.createElement("div");

PageElement.setAttribute("class", "container");
PageMenu.setAttribute("class", "menu");
PageCards.setAttribute("class", "cards");

PageMenu.append(MenuElements);
PageCards.append(HeaderElement, CardValue);
PageElement.append(PageMenu, PageCards);

const Page = document.getElementsByTagName("body") [0];
Page.prepend(PageElement);