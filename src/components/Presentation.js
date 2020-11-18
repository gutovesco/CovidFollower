import { useState } from "react";
import axios from 'axios'

const Presentation = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async () => {
      const NEWSLETTER_REST_API_URL = 'http://localhost:8080/api/newsletter';

      const data = {
        email: inputValue
      }

      console.log(data)
    
    await axios.post(NEWSLETTER_REST_API_URL, data).then(res => {
      console.log(res)
    })
  }

    return(
        <div>
            <section id="home" className="min-h-100vh flex justify-start items-center">
          <div className="mx-5 md-mx-l5">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="firstContainer">
                <h1 className="white fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900 ">Acompanhe a COVID-19 <br />próxima a você!</h1>

                <div className="br-8 mt-10 inline-flex">
                  <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue}
                    className="input-lg half bw-0 fw-200 bg-indigo-lightest-20 indigo-lightest ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 min-w-25vw br-r-0"
                    placeholder="Endereço de email" />
                  <button onClick={() => handleSubmit()}
                    className="button-lg bg-white black focus-white fw-300 fs-s3 mr-0 br-l-0">Enviar</button>
                </div>
              </div>
              <div className="secondContainer" style={{ marginLeft: 100 }}>
                <img alt="nada" src="https://i.ibb.co/ZfX2XQj/pngtree-doctor-characters-fight-coronavirus-illustration-png-image-2185129-removebg-preview.png" style={{ width: 800, height: 500 }} />
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Presentation;