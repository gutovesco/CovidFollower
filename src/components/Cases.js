const Cases = () => {
    return (
        <div>
            <section id="features" className="p-10 md-p-l5">
                <div className="flex flex-column md-flex-row mx-auto">
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                                data-feather="inbox" className="w-l5"></i></div>
                            <h4 className="white fw-600 fs-m3 mb-5">Storage</h4>
                            <div className="indigo-lightest fw-600 fs-m1 lh-3 opacity-50">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            <a href="/"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">Read</a>
                        </div>
                    </div>
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                                data-feather="cpu" className="w-l5"></i></div>
                            <h4 className="white fw-600 fs-m3 mb-5">Compute</h4>
                            <div className="indigo-lightest fw-600 fs-m1 opacity-50">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            <a href="/"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">Read</a>
                        </div>
                    </div>
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                                data-feather="database" className="w-l5"></i></div>
                            <h4 className="white fw-600 fs-m3 mb-5">Database</h4>
                            <div className="indigo-lightest fw-600 fs-m1 opacity-50">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            <a href="/"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">Read</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cases;