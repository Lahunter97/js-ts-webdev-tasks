// For dropdown

const DataDropdown = {
    sort: "Sort by",
    drdbtn: "RECOMMENDED",
    amount: "6 ITEMS",
}; 

// button bulma
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

// header
const HeaderElement = document.createElement("div");
const AmountElement = document.createElement("div");

AmountElement.append(DataDropdown.amount);
AmountElement.setAttribute("class", "amountitems") // добавить счётчик на число

HeaderElement.setAttribute("class", "header")
HeaderElement.append(AmountElement, DropdownMain);


const Header = document.getElementsByTagName("body") [0];
Header.prepend(HeaderElement);




/*
const HeaderData = {
    HeaderKey: "Last works",
    ButtonHeader: "Explore Showcase",
    ButtonCard: "Explore",

// For header

const HeaderElement = document.createElement("header");
const H2Element = document.createElement("div");
const HeaderButton = document.createElement("button");

HeaderElement.append(H2Element, HeaderButton);
HeaderElement.setAttribute("class", "Header");
HeaderButton.setAttribute("class", "HeaderButton")

H2Element.append(HeaderData.HeaderKey);
HeaderButton.append(HeaderData.ButtonHeader);

const Header = document.getElementsByTagName("body") [0];
Header.prepend(HeaderElement);


//For cards

const CardValue = document.createDocumentFragment();
const CardSection = document.createElement("section");

CardData.forEach((item) => {
    
    const CardElement = document.createElement("div");
    
    const CardHeader = document.createElement("div");
    const CardText = document.createElement("div");
    const CardButton = document.createElement("button");

    
    CardElement.append(CardHeader, CardText, CardButton);
    CardSection.append(CardElement);


// classes from style name + default style 
// card style
CardElement.classList.add(`CardElement${item.cardstyle}`);
if (!item.cardstyle) {
    CardElement.setAttribute("class", "CardElementGrey");
  }


// headerstyle
CardHeader.classList.add(`CardHeader${item.headerstyle}`);
if (!item.headerstyle) {
    CardHeader.setAttribute("class", "CardHeaderBlue");
  }


// textstyle
CardText.classList.add(`CardText${item.textstyle}`);
if (!item.textstyle) {
    CardText.setAttribute("class", "CardTextBlue");
  }


// buttonstyle
CardButton.classList.add(`CardButton${item.buttonstyle}`);
if (!item.buttonstyle) {
    CardButton.setAttribute("class", "CardButtonWhite");
  }



    CardSection.setAttribute("class", "CardSection");

    CardHeader.append(item.title);
    CardText.append(item.text);
    CardButton.append(HeaderData.ButtonCard);

    CardValue.append(CardSection);
  

});


const Card = document.getElementsByTagName("body") [0];
Card.append(CardValue);
*/