import React, {Component} from 'react'

export default class Home extends Component {
 
    render() {
        return (
            <div>
                <section className="colorlib-carriers" data-section="carriers">
                <div className="row no-gutters">
                <h2 className="colorlib-heading">Kariera</h2>
        <div class="timeline">
            <ul>
                <li>
                    <div className="Horizontalcontent">
                        <h3>II Liceum Ogólnokształcące</h3>
                        <p>Specjalizacja: Matematyczno-Geograficzno-Informatyczny<br />
                        Poziom wykształcenia: średnie
                        </p>
                    </div>
                    <div className="time">
                        <h4>09.2011 - 06.2014</h4>
                    </div>
                </li>
                <li>
                    <div className="Horizontalcontent">
                        <h3>Politechnika Częstochowska</h3>
                       <p>Kierunek: Informatyka <br />
                       Specjalizacja: Programowanie Aplikacji Internetowych<br />
                       Poziom wykształcenia: inżynier
                       </p>
                    </div>
                    <div className="time">
                        <h4>10.2014 - 02.2018</h4>
                    </div>
                </li>
                <li>
                    <div className="Horizontalcontent">
                        <h3>Politechnika Częstochowska</h3>
                         <p>Kierunek: Informatyka <br />
                         Specjalizacja: Zintegrowane Systemy Zarządzania i Analizy Danych<br />
                         Poziom wykształcenia: magister inżynier
                          </p>
                    </div>
                    <div className="time">
                        <h4>02.2018 - 07.2019</h4>
                    </div>
                </li>
                <li>
                    <div className="Horizontalcontent">
                        <h3>Savangard sp.z o.o</h3>
                        <p> Stanowisko: Młodszy Programista <br />
                            Krótki opis stanowiska: <br />
                           - Tworzenie nowych funkcji interfejsu użytkownika z wykorzystaniem techgnologii: JavaScript Angular, HTML, CSS, Angular Material. <br />
                           - Testowanie oprogramowania w programie SoapUI. <br />
                           - Utrzymywanie istniejących systemów z wykorzystaniem architektury SOA.
                        </p>
                    </div>
                    <div className="time">
                        <h4>07.2018 - 06.2019</h4>
                    </div>
                </li>
                <div className="emptyDiv"></div>
            </ul>
        </div>
    </div>
  </section>
            </div>
        )
    }
}