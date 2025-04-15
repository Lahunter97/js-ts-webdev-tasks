
const HeaderData = {
    HeaderKey: "Last works",
    ButtonHeader: "Explore Showcase",
    ButtonCard: "Explore",
};

const CardData = [
    {
        cardstyle: "grey",
        headerstyle: "blue",
        textstyle: "blue",
        buttonstyle: "white",
        title: "Startup Framework",
        text: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    },

    {  
        cardstyle: "white",
        headerstyle: "blue",
        textstyle: "grey",
        buttonstyle: "green",
        title: "Web Generator",
        text: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    },

    {
        cardstyle: "blue",
        headerstyle: "white",
        textstyle: "white",
        buttonstyle: "white",
        title: "Slides 4",
        text: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
    },

    {
        cardstyle: "image",
        headerstyle: "white",
        textstyle: "white",
        buttonstyle: "white",
        title: "Postcards",
        text: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
    },    
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


// 4 style classes with 4 'if' logic, +default style 


// card style
    if (item.cardstyle === "grey") {
        CardElement.setAttribute("class", "CardElementGrey");
    }
      else if (item.cardstyle === "white") {
        CardElement.setAttribute("class", "CardElementWhite");
    } else if (item.cardstyle === "blue") {
        CardElement.setAttribute("class", "CardElementBlue");
    } else if (item.cardstyle === "image") {
        CardElement.setAttribute("class", "CardElementImage");
    } else {
        CardElement.setAttribute("class", "CardElementGrey");
    }


// headerstyle
    if (item.headerstyle === "blue") {
        CardHeader.setAttribute("class", "CardHeaderBlue");
    }
      else if (item.headerstyle === "white") {
        CardHeader.setAttribute("class", "CardHeaderWhite");
    }  else {
        CardHeader.setAttribute("class", "CardHeader1");
    }


// textstyle
    if (item.textstyle === "blue") {
        CardText.setAttribute("class", "CardTextBlue");
    }
      else if (item.textstyle === "grey") {
        CardText.setAttribute("class", "CardTextGrey");
    } else if (item.textstyle === "white") {
        CardText.setAttribute("class", "CardTextWhite");
    } else {
        CardText.setAttribute("class", "CardTextBlue");
    }


// buttonstyle
    if (item.buttonstyle === "white") {
        CardButton.setAttribute("class", "CardButtonWhite");
    }
      else if (item.buttonstyle === "green") {
        CardButton.setAttribute("class", "CardButtonGreen");
    } else {
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