import React from "react"
// Own Components
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";
// Helpers
import chooseImage from "../../helpers/chooseImage";
// Import data from source
import productsObject from "../../data/products";
import navigationItemsObject from "../../data/navigationItem";
// Styling / CSS
import "./Dashboard.css"
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {productCards: [], open: true, cardClicked: {}};
    }

    componentDidMount() {
        this.setState({ productCards: productsObject.products })
    }

    onButtonClicked = () => {
        this.setState({ open: !this.state.open })
    }

    addButtonClicked = (inputFromPopup) => {
        let imageFromHelper = chooseImage(inputFromPopup);
        let toBeadded = [
            {
                id: this.state.productCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeadded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }

    onCardClicked = (idFromCard) =>{
        console.log(this.state.productCards[idFromCard -1]);
        this.setState(
            {
                open: !this.state.open, 
                cardClicked: this.state.productCards[idFromCard - 1],
            }
        );
    }

    render() { 
        console.log(this.state.cardClicked);          
        if (this.state.open === true) {
            return (
                <article className="dashboard">
                    <LeftPane navigationListItems={navigationItemsObject.navigationItem} let buttonText="Go Premium" />
                    <RightPane onProductCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn Producten" buttonSymbol="+" buttonText="Voeg een product toe" />
                </article>);
        }
        return (
            <Popup cardClicked={this.state.cardClicked} addButtonClicked={this.addButtonClicked} />
        )
    }
}

export default Dashboard;