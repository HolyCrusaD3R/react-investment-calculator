import "./InputsBox.css";

export default function InputsBox({ onChange, inputs}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={inputs.Initial} onChange={(event) => onChange("Initial", event)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={inputs.Annual} onChange={(event) => onChange("Annual", event)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={inputs.Expected} onChange={(event) => onChange("Expected", event)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={inputs.Duration} onChange={(event) => onChange("Duration", event)}/>
                </p>
            </div>
        </section>
    );
}