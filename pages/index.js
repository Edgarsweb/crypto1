import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import coingeckoApi from 'coingecko-api';
import bitcoin from '/public/coin.png'
import CoinGecko from 'coingecko-api/lib/CoinGecko';
const coinGeckoClient = new CoinGecko();

export default function Home(props) {
  const { data } = props.result;

  const formatPercent = number => 
    `${new Number(number).toFixed(2)}%`
  // console.log(data);

  const formatDollar = (number, maximumSignificantDigits) =>
  new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'usd',
      maximumSignificantDigits
    }
  ).format(number);
  
  return (

   
    
    <div className={styles.container}>

      
      
      <Head>
        <title>Coinfo Club</title>
        <meta name="description" content="The largest online crypto community in the world, where you can find the latest rates of different currencies and crypto" />
        <meta name="keywords" content="crypto, coin, ethereum, bitcoin, blockchain, investment, crypto news, shib, nft, defi, million, billion, cryptocurrency, usdt, tether, usd" />
        <link rel="icon" href="/etherum.png" />
      </Head> <br />
      
      <header className='header'>
        <div className='text'>
           <h1>Coinfo Club</h1> <br /><br />
       <h2>The best online platform, where you can find the latest crypto-related news, prices and also buy | sell coins at one place</h2>
       <a href="#prices" className='rateButton'>Latest rates</a>
        </div>

        {/* <div id="ui">
  <div class="crystal">
    <div class="crystal_panel top front"></div>
    <div class="crystal_panel top back"></div>
    <div class="crystal_panel top left"></div>
    <div class="crystal_panel top right"></div>
    <div class="crystal_panel bottom front"></div>
    <div class="crystal_panel bottom back"></div>
    <div class="crystal_panel bottom left"></div>
    <div class="crystal_panel bottom right"></div>
  </div>
</div> */}
     
    <div className='imgBody'>
    <Image
      src={bitcoin}
      alt="coin image"
      width=""
      height=""
    />

    </div>
    
  
    
        

     
       
      </header>
      
      <div className='widgets'>
        
        {/* <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
<coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,litecoin,ripple" currency="usd" background-color="#080c25" locale="en" font-color="#a6b2ec"></coingecko-coin-price-marquee-widget>
       */}
      

      <iframe width="100%" scrolling="no" className='news'  src="https://cryptopanic.com/widgets/news/?bg_color=142035&amp;font_family=sans&amp;header_bg_color=3071e7&amp;header_text_color=eee&amp;link_color=3071e7&amp;news_feed=trending&amp;posts_limit=10&amp;text_color=eee&amp;title=Latest%20Trending%20News%20of%20Crypto%20World%20in%20Coinfo.club" height="770px" ></iframe>

     

    

      </div>


      <div className='exchange'>

      <div className='exchangeText'>       
      <h3>Limitless Crypto Exchange</h3> 
       <p>Fast Crypto Swaps, Free of Custody</p> 
      </div>

        <div className='exchanger'>
          
      <iframe id='iframe-widget' className='exchanger' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&from=btc&horizontal=true&lang=en-US&link_id=a34813162527c7&locales=true&logo=true&primaryColor=293659&to=usdterc20&toTheMoon=false' ></iframe>
    <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
        </div>

      </div> 

      
     

      
      


   

      
<h3>Crypto Chart</h3><br />
      <table className='table' id='prices'>
        
        <thead>
          
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>            
            {/* <th>Market</th> */}
          </tr>          
        </thead>  
        <tbody>
          {data.map(coin => (            <tr key={coin.id}>
              <td>
                <img
                  src={coin.image}
                  style={{width: 25, height: 25}}
                  alt="coin image"
                />
                {coin.symbol.toUpperCase()}
              </td>
              <td>{formatDollar (coin.current_price, 20)}
              </td>
              <td>
                <span
                className={coin.price_change_percentage_24h > 0 ?(
                  'text-success'
                ) : 'text-danger'}>
                {formatPercent (coin.price_change_percentage_24h)}
                </span>
              </td>
              
              {/* <td>{formatDollar (coin.market_cap, 3)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <footer className='footer'>
      <p>Copyright © 2022  <a href='https://edgarsblog.com/'>Edgarsblog.</a> |  All rights reserved </p> 
      </footer>
     
    </div>
  )
}


export async function getServerSideProps(context) {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC
  }
  const result = await coinGeckoClient.coins.markets({params});
  return {
    props: {
      result
    }
  };
};
