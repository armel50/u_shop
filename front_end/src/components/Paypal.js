import React from 'react'

export default function Paypal({article}) {
    return (
       <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_xclick"/>
            <input type="hidden" name="business" value="cloe.kouadjo@my.tccd.edu"/>
            <input type="hidden" name="lc" value="AR"/>
            <input type="hidden" name="item_name" value={article.name}/>
            <input type="hidden" name="amount" value={article.price}/>
            <input type="hidden" name="currency_code" value="USD"/>
            <input type="hidden" name="button_subtype" value="services"/>
            <input type="hidden" name="no_note" value="0"/>
            <input type="hidden" name="tax_rate" value="8.000"/>
            <input type="hidden" name="shipping" value="5.00"/>
            <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"/>
            <button  className='ui circular segment' name="submit" alt="PayPal - The safer, easier way to pay online!"> 
  <h2 class="ui header">
    Buy Now
    <div class="sub header">${article.price}</div>
  </h2></button>
        </form>

    )
}
