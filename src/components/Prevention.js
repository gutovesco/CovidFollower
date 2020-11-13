import { useState, useEffect } from "react";
import UserService from '../api'

const Prevention = () => {
    const [preventions, setPreventions] = useState([])

    useEffect(() => {
        UserService.getPreventions().then((response) => {
            console.log(response.data)
            setPreventions(response.data)
        });
    }, [])

    return (
        <div>
            <section class="p-10 md-py-10">
                <div class="">
                    <h1 style={{ fontSize: 50 }} class="white ml-10 fw-900 lh-2">Medidas de prevenção</h1>
                </div>
            </section>
            <section id="blog" class="p-0 md-p-5">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    {preventions.map((prevention) => (
                        <div class="w-130pc md-w-33pc p-10">
                            <a href="/" class="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300">
                                <img class="w-100pc" src={prevention.imgUrl} alt="" />
                                <span class="fw-800 white fs-m4 mt-3">{prevention.title}</span>
                                <p class="fw-300 white fs-m1 mt-3">
                                    {prevention.description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Prevention;