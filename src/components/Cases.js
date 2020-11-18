import { useState, useEffect } from "react";
import UserService from '../api'

const Cases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        UserService.getCases().then((response) => {
            console.log(response.data)
            setCases(response.data)
        });
    }, [])
    return (
        <div>
            <section id="features" className="p-10 md-p-l5">
                <div>
                    <h1 style={{ fontSize: 50, marginBottom: 40 }} class="white ml-10 fw-900 lh-2">Casos da região</h1>
                </div>
                <div className="flex flex-column md-flex-row mx-auto">
                    {cases.map(item => (
                        <div className="w-100pc md-w-40pc">
                            <div className="br-8 p-5 m-5">
                                <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><div>{item.number}</div></div>
                                <h4 className="white fw-600 fs-m3 mb-5">{item.title}</h4>
                                <div className="indigo-lightest fw-600 fs-m2 lh-3 opacity-50">{item.description}</div>
                                <a href={item.url}
                                    className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">Ler mais</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Cases;