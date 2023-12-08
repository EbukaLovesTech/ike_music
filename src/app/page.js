import Image from 'next/image'
import style from './page.module.css';
import Link from 'next/link';
import { headFont } from '@/components/font';

export default function Home() {
  return (
    <main className={style.main}>
      <section className={style.hero_wrapper}>
        <div className={style.intro_wrapper}>
          <h1 className={headFont.className}>I.k</h1>
          <p className={`${style.intro_tag} ${headFont.className}`}>Music Artist</p>
        </div>
        <div className={style.hero_img}>
          <Image src='/Untitled_design__6_-removebg-preview.png'
            alt={'Ike the upcoming singer'}
            priority
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className={style.music_section} id='music'>
        <div>
          <h2 className={headFont.className}>Latest Music</h2>
          <Image src='/broski.png'
            alt={'Ballin forever cover'}
            priority
            width={220}
            height={200}
            className={style.artcover}
          />
          <p className={headFont.className}>O.Y.O {'(On Your Own)'}</p>
          <button>Listen Now</button>
        </div>
      </section>
      <section className={style.about_section} id='about'>
        <h2 className={headFont.className}>Who Is I.K</h2>
        <div className={style.about_wrapper}>
          <div className={style.about_img}>
            <Image src='/Untitled_design__6_-removebg-preview (1).png'
              alt={'I.K'} priority
              width={500} height={500}
            />
          </div>
          <div className={style.about_text_wrapper}>
            <p>
              Azegba Ikechukwu Victor, professionally known as I.k is a Nigerian
              Singer, Songwriter and also an aspiring footballer. I.k was born in
              Onitsha,Anambra State, Nigeria. He came into this world on 3rd October
              2005.
            </p>
            <p>I.K which is a first two words from his name Ikechukwu, is an example
              of multi-talented individual, combining football and music just like the atletico
              madrid forward Memphis Depay, whom he get his motivation to sing and pursue pro football. I.K
              grew up listening to Burna Boy and Phyno, I.k blend his genre with Gospel and Afro-Beats.
            </p>
            <p>I.k has a mission of creating a meaningful and positive impact to the world with his music,
              so everybody should relax and hear what this boy has to offer.
            </p>
          </div>
        </div>
      </section>
      <section className={style.video} id='video'>
        <h2 className={headFont.className}>Videos</h2>
        <p>Coming Soon....</p>
      </section>
    </main>
  )
}
