import Head from "next/head";
import Banner from "../../components/Banner";

export default function AcquireNick() {
  return (
    <div>
      <Head>
        <title>Přivlastnění nicku | QPlay.cz</title>
        <meta
          name="description"
          content="Podrobný návod jak si na našem serveru přivlastnit nick."
        />
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Přivlastnění nicku</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          Máš originální Minecraft, ale někdo má již zabraný tvůj nick? Nevadí,
          stačí postupovat podle tohoto návodu a můžeš si svůj nick získat:{" "}
          <br />
          <br />
          <ol style={{ listStyleType: "decimal" }}>
            <li className="h6">
              Přihlaš se na stránce{" "}
              <a href="https://info.qplay.cz/" target="_blank" rel="noreferrer">
                https://info.qplay.cz
              </a>{" "}
              (jestliže ještě nemáš na QPlay žádný účet zaregistrovaný, tak
              nejdříve proveď registraci na{" "}
              <a
                href="https://registrace.qplay.cz/"
                target="_blank"
                rel="noreferrer"
              >
                https://registrace.qplay.cz
              </a>{" "}
              , pole &quot;Nick&quot; při registraci můžeš nechat prázdné)
            </li>
            <li className="h6">V menu vyber &quot;Změna nicku&quot;</li>
            <li className="h6">
              Zvol si svůj nick a klikni na tlačítko &quot;Změnit nick&quot;
            </li>
            <li className="h6">
              Pokud je nick již obsazený, tak se ti zobrazí návod, podle kterého
              stačí postupovat
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
