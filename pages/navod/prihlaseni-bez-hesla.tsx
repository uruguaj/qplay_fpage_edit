import Head from "next/head";
import Banner from "../../components/Banner";

export default function LoginWithoutPassword() {
  return (
    <div>
      <Head>
        <title>Přihlášení bez hesla | QPlay.cz</title>
        <meta
          name="description"
          content="Podrobný návod jak na se na našem serveru přihlašovat bez hesla."
        />
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Přihlášení bez hesla</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          Máš originální Minecraft a nebaví tě se furt na serveru přihlašovat?
          Vidíš u ostatních hráčů, že mají skin, ale ty ho nemáš? Tak postupuj
          podle tohoto krátkého návodu a aktivuj si tyto výhody i ty! <br />
          <br />
          <ol style={{ listStyleType: "decimal" }}>
            <li className="h6">
              Přihlaš se na stránce{" "}
              <a href="https://info.qplay.cz/" target="_blank" rel="noreferrer">
                https://info.qplay.cz
              </a>
            </li>
            <li className="h6">
              Na stránce &quot;Domů&quot; najdi položku &quot;Přihlášení na
              serveru bez hesla&quot;
            </li>
            <li className="h6">Klikni na tlačítko &quot;Zapnout&quot;</li>
            <li className="h6">Připoj se na server :)</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
