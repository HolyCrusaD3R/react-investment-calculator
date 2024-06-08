import { calculateInvestmentResults } from "../../util/investment.js";

export default function Result({ inputs }) {

    calculateInvestmentResults(inputs)

    return (
        <div id="result">
            
        </div>
    );
}