
const HeaderData = {
    HeaderKey: "Last works",
    ButtonHeader: "Explore Showcase",
    ButtonCard: "Explore",
};

const CardData = [
    {
        cardstyle: "Grey",
        headerstyle: "Blue",
        textstyle: "Blue",
        buttonstyle: "White",
        title: "Startup Framework",
        text: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    },

    {  
        cardstyle: "White",
        headerstyle: "Blue",
        textstyle: "Grey",
        buttonstyle: "Green",
        title: "Web Generator",
        text: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    },

    {
        cardstyle: "Blue",
        headerstyle: "White",
        textstyle: "White",
        buttonstyle: "White",
        title: "Slides 4",
        text: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
    },

    {
        cardstyle: "Image",
        headerstyle: "White",
        textstyle: "White",
        buttonstyle: "White",
        title: "Postcards",
        text: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
    },    
    {},
];


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