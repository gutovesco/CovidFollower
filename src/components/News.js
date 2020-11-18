import { useState, useEffect } from "react";
import UserService from '../api'

const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        UserService.getNews().then((response) => {
            console.log(response.data)
            setNews(response.data)
        });
    }, [])
    return (
        <div>
            <section id="news" class="p-10 md-p-l5">
            <div>
                    <h1 style={{ fontSize: 50, marginBottom: 40 }} class="white ml-10 fw-900 lh-2">Últimas notícias</h1>
                </div>
                <div class="flex flex-column md-flex-row md-w-80pc mx-auto">
                    {news.map((item) => (
                        <div key={item.id} class="w-100pc md-w-50pc">
                            <div class="br-8 p-5 m-5 bg-indigo-lightest-10 pointer hover-scale-up-1 ease-300">
                                <div class="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
                                    {item.source}</div>
                                <div class="indigo-lightest fw-600 fs-m1">{item.body} </div>
                                <a href={item.url} class="mt-10 button bg-black fs-s3 white no-underline">Ler</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default News;