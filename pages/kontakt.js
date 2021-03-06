import React from 'react'

import Fade from 'react-reveal/Fade'
import Layout from '../components/Layout/layout'
import { BackgroundGradient } from '../components/Backgrounds'
import * as Contact from '../components/Kontakt/Wrapers'
import { ContactButton } from '../components/Kontakt/ContactButton'
import { MapContainer } from '../components/Kontakt/MapContainer'
import H1 from '../components/Tags/H1'
import H2 from '../components/Tags/H2'
import SEO from '../components/seo'

const Kontakt = () => (
  <Layout>
    <SEO
      title="Kontakt"
      keywords={['nutrikon, kontakt, Opole, Krakowska']}
      lang="pl/PL"
    />
    <BackgroundGradient>
      <Contact.KontaktContainer className="container">
        <Fade>
          <Contact.Wraper>
            <H1>Jesteśmy do Państwa dyspozycji</H1>
            <Contact.ContButtWraper>
              <Contact.ContactWraper>
                <Contact.InfoWraper>
                  <H2 blue>
                    <ion-icon name="pin" />
                    Adres
                  </H2>
                  <Contact.P>Krakowska 32A, 45-075 Opole</Contact.P>
                  <H2 blue>
                    <ion-icon name="clipboard" />
                    Rejestracja
                  </H2>
                  <Contact.P tel>48 792 325 000 lub 48 792 766 000</Contact.P>
                  <H2 blue>
                    <ion-icon name="mail" />
                    Kontakt mailowy
                  </H2>
                  <Contact.P>nutrikon@nutrikon.pl</Contact.P>
                  <Contact.SocialIcons>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/nutrikon.sp.z.o.o/"
                    >
                      <i className="icon ion-logo-facebook" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/nutrikon/"
                    >
                      <i className="icon ion-logo-instagram" />
                    </a>
                  </Contact.SocialIcons>
                </Contact.InfoWraper>

                <Contact.HoursWraper>
                  <div>
                    <H2 blue>
                      <ion-icon name="clock" />
                      Godziny otwarcia
                    </H2>
                    <Contact.P>Poniedziałek: 15 - 22</Contact.P>
                    <Contact.P>Wtorek: 15 - 22</Contact.P>
                    <Contact.P>Środa: 12 - 21</Contact.P>
                    <Contact.P>Czwartek: 15 - 19</Contact.P>
                    <Contact.P>Piątek: 16 - 19</Contact.P>
                  </div>
                </Contact.HoursWraper>
              </Contact.ContactWraper>
              <Contact.ButtonWraper>
                <p>Skontaktuj się z nami bezpośrednio</p>
                <ContactButton href="mailto:nutrikon@nutrikon.pl">
                  <ion-icon name="mail" />
                  Napisz do nas
                </ContactButton>
              </Contact.ButtonWraper>
              <Contact.BankAccWraper>
                <Contact.AccInfo>
                  <p>
                    <ion-icon name="card" />
                    NUTRIKON SP. Z O.O. 57 1050 1504 1000 0090 9598 7807
                  </p>
                  <p>
                    <ion-icon name="card" />
                    NUTRIKON SP.K. 26 1050 1520 1000 0090 3140 9429
                  </p>
                </Contact.AccInfo>
              </Contact.BankAccWraper>
            </Contact.ContButtWraper>
          </Contact.Wraper>
        </Fade>
      </Contact.KontaktContainer>
      <MapContainer>
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.9555045285!2d17.92190611592023!3d50.66508667975676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053051d5f5145%3A0xf86caee6a23498d!2sNutrikon+Sp.+z+o.o.+Sp.+k!5e0!3m2!1spl!2spl!4v1524501223435"
        />
      </MapContainer>
    </BackgroundGradient>
  </Layout>
)

export default Kontakt
