import React from 'react';
import './BodySection.css';
import Title from './Title';
import Product from './Product';


function BodySection() {
    return (
        <div className="bodysection">

        

        {/*Title*/}
        {/*2 products*/}
        {/*2 Products*/}

        <Title content="A Lot Can Happen On A Coffee"/>

        <div className="bodysection_coffee">

            <Product id="64" url="cappuccino.jpg" drinkName="Cappuccino" price={12}/>
            <Product id="66" url="new.jpg" drinkName="Vintage Coffee" price={12}/>
        </div>

        <div className="bodysection_coffee">

            <Product id="67" url="espresso.jpg" drinkName="Espresso" price="12"/>
            <Product id="68" url="black coffee.jpg" drinkName="Dark Black Coffee" price={12} />
        </div>

        
        {/*Title*/}
        {/*2 products*/}
        {/*2 Products*/}

        <Title content="Enjoy Summer With Exclusive Drinks" />

        <div className="bodysection_coffee">

            <Product id="12" url="lemon.jpg" drinkName="Chilled Lemon Mojito" price="12"/>
            <Product id="1200"  url="smoothie.jpg" drinkName=" Fresh Smoothie" price={12}/>
        </div>

        <div className="bodysection_coffee">

            <Product id="13"  url="straw berry shake.jpg" drinkName="StrawBerry Shake" price="12"/>
            <Product id="120000"  url="blue lagoon.jpg" drinkName="Royal Blue Lagoon" price="102"/>
        </div>

        <Title content="Food that makes you more Hungry" />

        <div className="bodysection_coffee">

            <Product id="14"  url="food/burger.jpg" drinkName="Mix Burger with Fries" price="222"/>
            <Product id="15" url="food/salad.jpg" drinkName="Vegetarian Mix " price={112}/>
        </div>

        <div className="bodysection_coffee">

            <Product id="16" url="food/fries.jpg" drinkName="Royal French Fries" price="32"/>
            <Product id="17"  url="food/creamysoya.jpg" drinkName="Creamy Soya Sausage" price="112"/>
        </div>

        <Title content="Still Hungry Order More Food" />

<div className="bodysection_coffee">

    <Product id="121" url="nonveg/hotwings.jpg" drinkName="Hot Wings" price="322"/>
    <Product id="125"  url="nonveg/chickenroll.jpg" drinkName="Chicken Roll" price={212}/>
</div>

<div className="bodysection_coffee">

    <Product id="129"  url="nonveg/nonvegsalad.jpg" drinkName="Non Veg Salad" price="132"/>
    <Product id="120"  url="nonveg/nonvegspaghetti.jpg" drinkName="Non Veg Spaghetti" price="112"/>
</div>









            
        </div>
    )
}

export default BodySection
