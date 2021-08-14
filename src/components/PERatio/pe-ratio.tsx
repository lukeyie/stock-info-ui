import classes from "./pe-ratio.module.scss"
import { ChangeEvent, FormEvent, useState } from "react";
import { getPERatios } from "../../api/api";
import { useSubject } from "../../hooks/useSubject";
import { peRatiosResponseSubject } from "../../subjects/stock";
import { PERatiosResponse } from "../../types/pe-ratio-info.types";

export interface PERatioProps {

}

const PERatio: React.FunctionComponent<PERatioProps> = () => {
    const [peRatiosResponse, setPERatiosResponse] = useState<PERatiosResponse>();
    const [ticker, setTicker] = useState<string>();
    useSubject(peRatiosResponseSubject, setPERatiosResponse as any)

    const invokePERatiosAPI = async (requestTicker: string) => {
        peRatiosResponseSubject.next(await getPERatios(requestTicker));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTicker(event.currentTarget.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        invokePERatiosAPI(ticker!)
    }

    return (
        <div className={classes.peRatioForm}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={ticker} onChange={handleChange} />
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>P/E Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {peRatiosResponse?.peRatios!.map(item => {
                                return (
                                    <tr>
                                        <td>{item.year}</td>
                                        <td>{item.peRatio}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </form>
        </div>
    );
}

export default PERatio;