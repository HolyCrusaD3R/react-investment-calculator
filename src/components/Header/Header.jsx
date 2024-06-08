import investmentImg from "../../assets/investment-calculator-logo.png"
import './Header.css'

export default function Header(){
    return (
        <header id="header">
            <img src={investmentImg} alt="investment calculator logo"/>
            <h1>Investment Calculator</h1>
        </header>
    );
}