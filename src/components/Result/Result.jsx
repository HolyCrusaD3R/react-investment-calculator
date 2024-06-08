import { calculateInvestmentResults, formatter } from "../../util/investment.js";
import "./Result.css";

export default function Result({ inputs }) {

    const result = calculateInvestmentResults(inputs);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    return (
        <table id="result" className="center">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map(resultOfYear => {
                    const totalInterest = resultOfYear.valueEndOfYear - resultOfYear.annualInvestment * resultOfYear.year - initialInvestment;
                    const totalAmountInvested = resultOfYear.valueEndOfYear - totalInterest;

                    return (
                        <tr key={resultOfYear.year}>
                            <td>{resultOfYear.year}</td>
                            <td>{formatter.format(resultOfYear.valueEndOfYear)}</td>
                            <td>{formatter.format(resultOfYear.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}