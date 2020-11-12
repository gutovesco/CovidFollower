import { useEffect, useState } from 'react';
import './App.css';
import UserService from './api'

const App = () => {
  const [preventions, setPreventions] = useState([])

  useEffect(() => {
    UserService.getUsers().then((response) => {
      console.log(response.data)
    });
    UserService.getPreventions().then((response) => {
      console.log(response.data)
      setPreventions(response.data)
    });
  }, [])


  return (
    <div classNameName="App">
      <body className="bg-black muli">
        <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
          <div className="flex justify-between">
            <a href="#" className="flex items-center p-2 mr-4 no-underline">
              <img className="max-h-l4 w-auto mb-2 ml-10" src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kifGCrBRMkBjIwXs1M3EMoAJtliAoh...Bj...fU9PExevg9C3ktKMcs8" />
            </a>
            <a data-toggle="toggle-nav" data-target="#nav-items" href="#"
              className="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3">
              <i data-feather="menu"></i>
            </a>
          </div>
          <div id="nav-items" className="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center">
            <a href="#home" className="fs-s1 mx-3 py-3 white no-underline hover-underline">Home</a>
            <a href="#features" className="fs-s1 mx-3 py-3 white no-underline hover-underline">Features</a>
            <a href="#pricing" className="fs-s1 mx-3 py-3 white no-underline hover-underline">Pricing</a>
            <a href="#blog" className="fs-s1 mx-3 py-3 white no-underline hover-underline">Blog</a>
            <a href="#" className="button bg-white black fw-300 no-underline mx-5">Register</a>
          </div>
        </nav>
        <section id="home" className="min-h-100vh flex justify-start items-center">
          <div className="mx-5 md-mx-l5">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="firstContainer">
                <h1 className="white fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900 ">Acompanhe a COVID-19 <br />próxima a você!</h1>

                <div className="br-8 mt-10 inline-flex">
                  <input type="text"
                    className="input-lg half bw-0 fw-200 bg-indigo-lightest-20 indigo-lightest ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 min-w-25vw br-r-0"
                    placeholder="Endereço de email" />
                  <button
                    className="button-lg bg-white black focus-white fw-300 fs-s3 mr-0 br-l-0">Enviar</button>
                </div>
              </div>
              <div className="secondContainer" style={{ marginLeft: 100 }}>
                <img alt="nada" src="https://i.ibb.co/ZfX2XQj/pngtree-doctor-characters-fight-coronavirus-illustration-png-image-2185129-removebg-preview.png" style={{ width: 800, height: 500 }} />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="p-10 md-p-l5">
          <div className="flex flex-column md-flex-row mx-auto">
            <div className="w-100pc md-w-40pc">
              <div className="br-8 p-5 m-5">
                <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                  data-feather="inbox" className="w-l5"></i></div>
                <h4 className="white fw-600 fs-m3 mb-5">Storage</h4>
                <div className="indigo-lightest fw-600 fs-m1 lh-3 opacity-50">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <a href="#"
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
                <a href="#"
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
                <a href="#"
                  className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">Read</a>
              </div>
            </div>
          </div>
        </section>

        <section class="py-l10">
          <div class="flex flex-column md-flex-row md-w-80pc mx-auto">
            <div class="w-100pc md-w-50pc">
              <div class="br-8 p-5 m-5 bg-indigo-lightest-10 pointer hover-scale-up-1 ease-300">
                <div class="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
                  individual</div>
                <div class="indigo-lightest fw-600 fs-m1">Lorem ipsum <span class="opacity-30"> dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</span> </div>
                <a href="#" class="mt-10 button bg-black fs-s3 white no-underline">Read</a>
              </div>
            </div>
            <div class="w-100pc md-w-50pc">
              <div class="br-8 p-5 m-5 bg-indigo-lightest-10  pointer hover-scale-up-1 ease-300">
                <div class="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
                  team</div>
                <div class="indigo-lightest fw-600 fs-m1">Lorem ipsum <span class="opacity-30"> dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</span> </div>
                <a href="#" class="mt-10 button bg-black fs-s3 white no-underline">Read</a>

              </div>
            </div>
          </div>
        </section>

        <section class="p-10 md-py-10">
          <div class="">
            <h1 style={{ fontSize: 50 }} class="white ml-10 fw-900 lh-2">Medidas de prevenção</h1>
          </div>
        </section>

        <section id="blog" class="p-0 md-p-5">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {preventions.map((prevention) => (
              <div class="w-130pc md-w-33pc p-10">
                <a href="#" class="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300">
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

        <footer class="p-5 md-p-l5 bg-indigo-lightest-10">
          <div class="flex flex-wrap">
            <div class="md-w-25pc mb-10">
              <img src="assets/images/logo.png" class="w-l5" alt="" />
              <div class="white opacity-70 fs-s2 mt-4 md-pr-10">
                <p>Soluta voluptate et optio. Eos quasi impedit sapiente aliquid eius eligendi at. Necessitatibus
                        magni et sed quod quas minima.</p>
                <br />
                <p>Soluta voluptate et optio. Eos quasi impedit sapiente aliquid eius eligendi at. Necessitatibus
                        magni et sed quod quas minima.</p>
              </div>
            </div>
            <div class="w-100pc md-w-50pc">
              <div class="flex justify-around">
                <div class="w-33pc md-px-10 mb-10">
                  <h5 class="white">Company</h5>
                  <ul class="list-none mt-5 fs-s2">
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">About
                                    Us</a></li>
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">Jobs</a>
                    </li>
                    <li class="my-3"><a href="#"
                      class="white opacity-70 no-underline hover-underline">Contact</a></li>
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">Media</a>
                    </li>
                  </ul>
                </div>
                <div class="w-33pc md-px-10 mb-10">
                  <h5 class="white">Product</h5>
                  <ul class="list-none mt-5 fs-s2">
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">About
                                    Us</a></li>
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">Jobs</a>
                    </li>
                    <li class="my-3"><a href="#"
                      class="white opacity-70 no-underline hover-underline">Contact</a></li>
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">Media</a>
                    </li>
                  </ul>
                </div>
                <div class="w-33pc md-px-10 mb-10">
                  <h5 class="white">Support</h5>
                  <ul class="list-none mt-5 fs-s2">
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">About
                                    Us</a></li>
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">Jobs</a>
                    </li>
                    <li class="my-3"><a href="#"
                      class="white opacity-70 no-underline hover-underline">Contact</a></li>
                    <li class="my-3"><a href="#" class="white opacity-70 no-underline hover-underline">Media</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-100pc md-w-25pc">
              <div class="flex w-75pc md-w-100pc mx-auto">
                <input type="text"
                  class="input flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 br-r-0"
                  placeholder="Email Address" />
                <button class="button bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">Start</button>
              </div>
              <div class="flex justify-around my-8">
                <a href="#" class="relative p-5 bg-indigo br-round white hover-scale-up-1 ease-400"><i
                  data-feather="twitter" class="absolute-center h-4"></i></a>
                <a href="#" class="relative p-5 bg-indigo br-round white hover-scale-up-1 ease-400"><i
                  data-feather="facebook" class="absolute-center h-4"></i></a>
                <a href="#" class="relative p-5 bg-indigo br-round white hover-scale-up-1 ease-400"><i
                  data-feather="instagram" class="absolute-center h-4"></i></a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </div>
  );
}

export default App;
