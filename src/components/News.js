const News = () => {
    return (
        <div>
            <section id="news" class="py-l10">
                <div class="flex flex-column md-flex-row md-w-80pc mx-auto">
                    <div class="w-100pc md-w-50pc">
                        <div class="br-8 p-5 m-5 bg-indigo-lightest-10 pointer hover-scale-up-1 ease-300">
                            <div class="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
                                individual</div>
                            <div class="indigo-lightest fw-600 fs-m1">Lorem ipsum <span class="opacity-30"> dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</span> </div>
                            <a href="/" class="mt-10 button bg-black fs-s3 white no-underline">Read</a>
                        </div>
                    </div>
                    <div class="w-100pc md-w-50pc">
                        <div class="br-8 p-5 m-5 bg-indigo-lightest-10  pointer hover-scale-up-1 ease-300">
                            <div class="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
                                team</div>
                            <div class="indigo-lightest fw-600 fs-m1">Lorem ipsum <span class="opacity-30"> dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</span> </div>
                            <a href="/" class="mt-10 button bg-black fs-s3 white no-underline">Read</a>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News;