
const HeaderData = {
    HeaderKey: "Last works",
    ButtonHeader: "Explore Showcase",
    ButtonCard: "Explore",
};

const CardData = [
    {
        title: "Startup Framework",
        text: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    },

    {  
        title: "Web Generator",
        text: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    },

    {
        title: "Slides 4",
        text: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
    },

    {
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

CardData.forEach((item, index) => {
    
    const CardElement = document.createElement("div");
    
    const CardHeader = document.createElement("div");
    const CardText = document.createElement("div");
    const CardButton = document.createElement("button");

    CardSection.append(CardElement);
    CardElement.append(CardHeader, CardText, CardButton);


    CardElement.classList.add(`CardElement${index +1}`);
    CardSection.setAttribute("class", "Cards");
    CardHeader.classList.add(`CardHeader${index + 1}`);
    CardText.classList.add(`CardText${index + 1}`);
    CardButton.classList.add(`CardButton${index + 1}`);

    CardHeader.append(item.title);
    CardText.append(item.text);
    CardButton.append(HeaderData.ButtonCard);

    CardValue.append(CardSection);
  

});


const Card = document.getElementsByTagName("body") [0];
Card.append(CardValue);