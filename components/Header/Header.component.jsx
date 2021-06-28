import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Trans } from 'react-i18next'

export default function header() {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <header>
      <div className='logo'>
        <h1 className='linear-gradient-h1'>
          Man <br />
          <p className='textIn'>In</p> Night
        </h1>
        <img src='/img/simple-mini.png' alt='Picture of the author' />
      </div>

      <main>
        <div className='linkHeader'>
          <Link href='/' locale='fr'>
            <a>{t('french-language')}</a>
          </Link>
          /
          <Link href='/' locale='en'>
            <a>{t('english-language')}</a>
          </Link>
          /
          <Link href='/' locale='it'>
            <a>{t('italian-language')}</a>
          </Link>
        </div>

        <div className='btnWelcome'>
          <h1>{t('welcome')}</h1>
          <Link
            href='/'
            locale={
              router.locale === 'en'
                ? 'fr'
                : router.locale === 'fr'
                ? 'it'
                : router.locale === 'it' && 'en'
            }
          >
            {/* <a>{t('switch-language')}</a> */}
            <a>
              <Trans i18nKey='switch-language'>
                Changement de <strong className="st1"> langue </strong> 
                <strong  className="st2"> ezhfbhebfhbez </strong>
              </Trans>
            </a>
          </Link>
        </div>
      </main>
    </header>
  )
}
