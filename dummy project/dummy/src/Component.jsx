import React from 'react'
import image_moh from './Images/mohamad-khosravi-DuY4JP2M34Q-unsplash.jpg'

const Component = () => {
  return (
    <div class="bg-[#FBF7EE]">
    <nav class="flex justify-around">
        <div class="logo mt-5">
            <h1>Branding</h1>
        </div>
        <div class="nav-images mt-5">
            <img src="./Images/SVG/SVG 1.svg" class="inline ml-10" />
            <img src="./Images/SVG/SVG 2.svg" class="inline ml-10" />
            <img src="./Images/SVG/SVG 3.svg" class="inline ml-10" />
        </div>
        <img src={image_moh} alt="sserdtvgbmok" />
    </nav>
    <header class="mt-20 flex justify-around">
        <div class="card-one">
            <h1 class="font-bold mb-9 text-3xl">Spring/Summer vibs</h1>
            <p class="w-[340px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima
                obcaecati itaque exercitationem ad blanditiis eius molestias </p>
            <img src="./Project-1/Images/mohamad-khosravi-DuY4JP2M34Q-unsplash.jpg" class="w-[300px] mt-8"/>
        </div>

        <div class="card-two">
            <img src="./Images/austin-wade-d2s8NQ6WD24-unsplash.jpg" class="w-[300px] mt-8 rounded-t-[40rem]"/>

            <p class="w-[340px] mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima
                obcaecati itaque exercitationem ad blanditiis eius molestias </p>

            <button class="border border-[#af7452] text-[#af7452] pt-2 pb-2 pl-5 pr-5">Explore</button>

        </div>
    </header>

    <section class="flex justify-around pt-20">
        <div class="flex flex-col justify-around items-start">
            <h1 class="font-blod mb-9 text-3xl">
                An Industrial Take <br/>
                On Streetwear
            </h1>
            <p class="w-[340px] mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima
                obcaecati itaque exercitationem ad blanditiis eius molestias
            </p>
            <button class="border border-[#af7452] text-[#af7452] pt-2 pb-2 pl-5 pr-5">Shop Now</button>
        </div>

        <img src="..Project-1//Images/austin-wade-iQn82USu8gs-unsplash.jpg" class="w-[300px] mb-8"/>
    </section>

    <section class="flex justify-center items-center mt-20 p-10">
        <div class="p10 ml10 mr-5">
            <h1 class="font-bold mb-6">Buy Now,Pay Later</h1>
            <p class="font-thin w-[14rem]">0% intrest financing available <br/> pay after 30 days.</p>
            <button class="border border-[#af7452] text-[#af7452] mt-5   pt-2 pb-2 pl-5 pr-5">Shop Now</button>
        </div>

        <div class="p10 ml10 mr-5">
            <h1 class="font-bold mb-6">Cashback Reward</h1>
            <p class="font-thin w-[14rem]">Collect & Redeem on every order that you purchased.</p>
            <button class="border border-[#af7452] text-[#af7452] mt-5 pt-2 pb-2 pl-5 pr-5">Shop Now</button>
        </div>

        <div class="p10 ml10 mr-5">
            <h1 class="font-bold mb-6">Secure Payment</h1>
            <p class="font-thin w-[14rem]">gaurntee 100 secure payment online on our website.</p>
            <button class="border border-[#af7452] text-[#af7452] mt-5 pt-2 pb-2 pl-5 pr-5">Shop Now</button>
        </div>
    </section>
</div>
  )
}

export default Component
