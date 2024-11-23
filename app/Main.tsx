import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { allAuthors, Authors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import Image from '@/components/Image'
import projectsData from '@/data/projectsData'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div className="flex max-w-3xl flex-col gap-20 xl:max-w-5xl">
        <div className="flex flex-col-reverse gap-6 space-y-2 md:flex-row md:space-y-5">
          <div className="max-w-full md:max-w-[55%]">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-4xl sm:leading-10 md:text-5xl">
              Moi, olen Aaro!
            </h1>
            <h2 className="my-3 text-xl font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-2xl sm:leading-10 md:text-3xl">
              Partiolainen, lukiolainen ja tähtien tavoittelija
            </h2>
            <p className="text-lg leading-7 text-black dark:text-white">
              Virka-aikana opiskelen lukiossa painottuen matemaattisiin aineisiin ja yhteiskuntaan.
              Vapaa-ajalla olen intohimoinen partiolainen. Rakas harrastukseni pitää sisällään
              paljon vapaaehtoistyötä, mutta samalla on väylä viettää aikaa ystävieni kanssa, sillä
              lähes kaikki tuntemani ihmiset ovat partiolaisia.
              <br />
              <br />
              Tulevaisuuden tähtenä on lukion jälkeen Tampereen yliopiston Tuotantotalouden
              koulutusohjelma. Minulla on myös pienestä lapsesta asti ollut unelma perustaa yritys
              ja aion toteuttaa unelmani ennemmin tai myöhemmin. Lisäksi partiokentällä halua johtaa
              vuonna 2034 järjestettävän Finjamboreen.
            </p>
          </div>
          <Image
            src="/static/images/aaro4.jpg"
            alt="Aaro Heroja"
            width={400}
            height={400}
            className="ml-auto h-[400px] w-full transform rounded-bl-[4rem] rounded-tl-[4rem] rounded-tr-[4rem] object-cover transition-transform duration-300 hover:scale-105 sm:h-[500px] md:aspect-square md:h-[400px]"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="py-5 text-2xl font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-3xl sm:leading-10 md:text-4xl">
            Merkityksellisimmät tehtäväni
          </h2>
          <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-700 "></div>
          <div className="py-5">
            <h3 className="text-lg font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-lg sm:leading-10 md:text-2xl ">
              Maanmittaaja | Kevytyritys
            </h3>
            <p className="text-md leading-7 text-black dark:text-white">
              Toimin oman kevytyrityksen kautta maanmittaajana Wisol Oy:lle kesällä 2024 Utajärven
              aurinkopuistoprojektilla. Tehtäväni oli kartoittaa maaston korkeuksia suunnittelutyötä
              varten ja merkitä pisteitä maastoon aurinkopaneelien asennusta varten.
            </p>
          </div>
          <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-700 "></div>
          <div className="py-5">
            <h3 className="text-lg font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-lg sm:leading-10 md:text-2xl">
              Vaalitoimikunnan jäsen | Suomen Partiolaiset
            </h3>
            <p className="text-md leading-7 text-black dark:text-white">
              Vaalitoimikunnan jäsenenä olin toteuttamassa ehdokashankintaa ja vaaliviestintää
              Suomen Partiolaisten vuoden 2024 vaaleille. Vastuullani oli sosiaalisen median
              sisällöntuotanto. Tehtävä oli intensiivinen ja vaati keskimäärin kuukausittain 12h
              vapaaehtoistyötä
            </p>
          </div>
          <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-700 "></div>
          <div className="py-5">
            <h3 className="text-lg font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-lg sm:leading-10 md:text-2xl">
              Brändi- ja viestintämestari | HuHu 2024
            </h3>
            <p className="text-md leading-7 text-black dark:text-white">
              Toimin brändi- ja viestintämestarina Lounais-Suomen Partiopiirin HuHu 2024
              samoajaleirillä. Vastuullani oli tiimin johtaminen, joka vastasi leirinaikaisesta
              viestinnästä, verkkosivuista ja koko leirin brändistä sekä graafisesta ilmeestä.
              Toimin läheisessä vuorovaikutuksessa lukuisien ihmisten kanssa, koska brändi ja
              leirinaikainen viestintä kosketti monia organisaation vapaaehtoisia. Tehtävä vaati
              noin 10h kuukaudessa aikaa.
            </p>
          </div>
          <Link href="/about" className="mx-auto">
            <button className="mt-5 transform rounded-lg bg-primary-500 p-2 text-white transition-transform duration-300 hover:scale-105">
              Lue lisää muista tehtävistäni
            </button>
          </Link>
        </div>
        <div className="mx-auto">
          <h2 className="my-3 mb-8 text-center text-2xl font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-3xl sm:leading-10 md:text-4xl">
            Mikä on minulle tärkeää?
          </h2>
          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="transform rounded-[3rem] bg-primary-500 p-6 shadow-lg shadow-gray-600 transition-transform duration-300 hover:scale-105 dark:shadow-gray-800">
                <h3 className="text-lg font-extrabold leading-9 tracking-tight text-white sm:text-lg sm:leading-10 md:text-2xl">
                  01 Määrätietoisuus
                </h3>
                <p className="text-md leading-7 text-white">
                  Määrätietoisuus on arvojeni ytimessä. Pitkänäköisillä tavoitteilla ja niiden
                  toteuttamisella pystyy saamaan lähes mitä tahansa aikaan, sillä aika on sen
                  puolella, joka aloittaa nyt. Siksi määrätietoisuus on tärkeää itselle.
                </p>
              </div>
              <div className="transform rounded-[3rem] bg-primary-500 p-6 shadow-lg shadow-gray-600 transition-transform duration-300 hover:scale-105 dark:shadow-gray-800">
                <h3 className="text-lg font-extrabold leading-9 tracking-tight text-white sm:text-lg sm:leading-10 md:text-2xl">
                  02 Järjestelmällisyys
                </h3>
                <p className="text-md leading-7 text-white">
                  Arvostan järjestelmiällisyyttä, sillä se mahdollistaa toiminnot, jotka ovat
                  rasvattuja ja toimivat ilman suurta aivotyötä. Järjestelmällisyydellä luodaan
                  kaaoksesta järjestystä, jolloin mekaaninen työ väistyy luovan työn edestä.
                </p>
              </div>
              <div className="transform rounded-[3rem] bg-primary-500 p-6 shadow-lg shadow-gray-600 transition-transform duration-300 hover:scale-105 dark:shadow-gray-800">
                <h3 className="text-lg font-extrabold leading-9 tracking-tight text-white sm:text-lg sm:leading-10 md:text-2xl">
                  03 Riskien ottaminen ja virheistä oppiminen
                </h3>
                <p className="text-md leading-7 text-white">
                  Kaikessa elämässä on riskinsä. Yleensä myös, mitä suurempi riski, sitä suurempi
                  palkinto. Riskit ovat työkaluja, joilla voi saavuttaa suurta, mutta kun virhe
                  tapahtuu, siitä pitää oppia ja toimia seuraavalla kerralla toisella tavalla. Ilman
                  kehittymistä ja riskinottoa, tavoitteita ei voi saavuttaa.
                </p>
              </div>
              <div className="transform rounded-[3rem] bg-primary-500 p-6 shadow-lg shadow-gray-600 transition-transform duration-300 hover:scale-105 dark:shadow-gray-800">
                <h3 className="text-lg font-extrabold leading-9 tracking-tight text-white sm:text-lg sm:leading-10 md:text-2xl">
                  04 Vapaus
                </h3>
                <p className="text-md leading-7 text-white">
                  Elämme individualistisessa yhteiskunnassa, jossa jokaisella tulisi olla oikeus
                  olla oma itsensä ja päättää omista asioistaa. Toisilla ei tulisi olla oikeutta
                  puuttua mihinkään poislukien tilanteet, jossa loukataan toisen oikeutta vapauteen.
                  Vapaus mahdollistaa omien päätöksien tekemisen, mitä haluaa elämältä ja mikä on
                  itselle tärkeää.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="w-full">
            <h2 className="my-3 text-2xl font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-3xl sm:leading-10 md:text-4xl">
              Projektini
            </h2>
            <div className="w-full">
              {projectsData.slice(0, 4).map((d, index) => (
                <div key={index} className="my-3">
                  <h3 className="text-lg font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-lg sm:leading-10 md:text-2xl">
                    {d.title}
                  </h3>
                  <p className="text-md line-clamp-2 leading-7 text-black dark:text-white">
                    {d.description}
                  </p>
                </div>
              ))}
              <Link href="/projects">
                <button className="transform rounded-lg bg-primary-500 p-2 text-white transition-transform duration-300 hover:scale-105">
                  Katso kaikki projektit
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5">
            <div>
              <h2 className="my-3 text-2xl font-extrabold tracking-tight text-black dark:text-white sm:text-3xl md:text-4xl">
                Verkostoidutaan
              </h2>
              <p className="text-md leading-7 text-black dark:text-white">
                Vaihdan mielelläni ajatuksia mistä tahansa asioista! Ota yhteyttä pienellä
                kynnyksellä ja jutellaan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-lg sm:leading-10 md:text-2xl">
                0<span className="text-primary-500">1</span> LinkendInissä
              </h3>
              <p className="text-md my-2 leading-7 text-black dark:text-white">
                Lähetä minulle verkostoitumispyyntö ja keskustellaan!
              </p>
              <Link href="https://www.linkedin.com/in/aaro-heroja/">
                <button className="transform rounded-lg bg-primary-500 p-2 text-white transition-transform duration-300 hover:scale-105">
                  Lähetä verkosoitumispyyntö
                </button>
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-lg sm:leading-10 md:text-2xl">
                0<span className="text-primary-500">2</span> Instagramissa
              </h3>
              <p className="text-md my-2 leading-7 text-black dark:text-white">
                Seuraa minua Instagramissa ja jutellaan!
              </p>
              <Link href="https://www.instagram.com/aaro.heroja/">
                <button className="transform rounded-lg bg-primary-500 p-2 text-white transition-transform duration-300 hover:scale-105">
                  Seuraa Instagramissa
                </button>
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-lg sm:leading-10 md:text-2xl">
                0<span className="text-primary-500">3</span> Sähköpostilla
              </h3>
              <p className="text-md my-2 leading-7 text-black dark:text-white">
                Ota yhteyttä sähköpostilla ja vaihdetaan ajatuksia!
              </p>
              <Link href="mailto:aaro@aaroheroja.fi">
                <button className="transform rounded-lg bg-primary-500 p-2 text-white transition-transform duration-300 hover:scale-105">
                  Ota yhteyttä sähköpostilla
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="0 text-2xl font-extrabold leading-9 tracking-tight text-black dark:text-white sm:text-3xl sm:leading-10 md:text-5xl">
            Viimeisimmät julkaisut
          </h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read more: "${title}"`}
                          >
                            Lue lisää &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Kaikki julkaisut"
          >
            Kaikki julkaisut &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
